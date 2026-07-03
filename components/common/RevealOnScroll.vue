<template>
  <div ref="el" class="reveal" :style="{ transitionDelay: `${delay}ms` }">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value || typeof IntersectionObserver === 'undefined') {
    el.value?.classList.add('reveal-visible')
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  observer.observe(el.value)

  onBeforeUnmount(() => observer.disconnect())
})
</script>
