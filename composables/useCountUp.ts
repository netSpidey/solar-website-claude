import type { MaybeRefOrGetter, Ref } from 'vue'

interface CountUpOptions {
  /** Animation length in ms */
  duration?: number
  /** IntersectionObserver threshold that triggers the animation */
  threshold?: number
}

// Matches numeric tokens like "78,000", "6.4" or "25" inside a localized
// stat string ("₹78,000", "25 वर्षे", "6.4%"). All locales use Latin digits.
const NUMBER_RE = /\d[\d,]*(?:\.\d+)?/g

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3

/**
 * Animates the numeric parts of a stat string from 0 to their final value
 * when `el` scrolls into view. Prefix/suffix text (₹, %, "Years", "वर्षे")
 * stays static, grouping/decimals match the original string.
 *
 * SSR-safe: the final string is rendered on the server and only re-animated
 * on the client. Respects prefers-reduced-motion (no animation, final value).
 */
export function useCountUp(source: MaybeRefOrGetter<string>, options: CountUpOptions = {}) {
  const { duration = 1400, threshold = 0.35 } = options
  const el: Ref<HTMLElement | null> = ref(null)
  const display = ref(toValue(source))
  let raf = 0
  let played = false

  function render(progress: number) {
    display.value = toValue(source).replace(NUMBER_RE, (match) => {
      const target = Number.parseFloat(match.replace(/,/g, ''))
      if (Number.isNaN(target)) return match
      const decimals = (match.split('.')[1] || '').length
      return (target * progress).toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: match.includes(','),
      })
    })
  }

  function animate() {
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      render(easeOutCubic(t))
      if (t < 1) {
        raf = requestAnimationFrame(step)
      } else {
        display.value = toValue(source)
      }
    }
    raf = requestAnimationFrame(step)
  }

  // On locale switch just show the new final string — no replay.
  watch(
    () => toValue(source),
    (value) => {
      cancelAnimationFrame(raf)
      display.value = value
    }
  )

  onMounted(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el.value || reduceMotion || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            played = true
            animate()
            observer.disconnect()
          }
        })
      },
      { threshold }
    )
    observer.observe(el.value)

    onBeforeUnmount(() => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    })
  })

  return { el, display }
}
