<template>
  <section class="section-py bg-section-alt">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.galleryEyebrow')"
        :title="t('sections.galleryTitle')"
        :subtitle="t('sections.gallerySubtitle')"
        center
      />

      <v-row class="mt-6" dense>
        <v-col v-for="(img, i) in galleryImages" :key="img.src" cols="6" sm="4" md="3">
          <button type="button" class="gallery-tile" :aria-label="img.alt" @click="open(i)">
            <v-img
              :src="img.src"
              :alt="img.alt"
              :aspect-ratio="4 / 3"
              :style="{ objectPosition: img.imagePosition || 'center' }"
              class="gallery-tile__img"
              cover
            />
          </button>
        </v-col>
      </v-row>

      <v-dialog v-model="lightbox" max-width="1100">
        <v-card class="lightbox" elevation="0">
          <v-img :src="currentImage.src" :alt="currentImage.alt" :aspect-ratio="4 / 3" />
          <v-btn
            class="lightbox__close"
            icon="mdi-close"
            variant="flat"
            size="small"
            :aria-label="t('common.close')"
            @click="lightbox = false"
          />
          <div class="d-flex align-center justify-center ga-4 py-2">
            <v-btn icon="mdi-chevron-left" variant="text" :aria-label="t('common.prevPhoto')" @click="prev" />
            <span class="lightbox__counter text-body-2">{{ current + 1 }} / {{ galleryImages.length }}</span>
            <v-btn icon="mdi-chevron-right" variant="text" :aria-label="t('common.nextPhoto')" @click="next" />
          </div>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { galleryImages } from '~/data/gallery'

const { t } = useI18n()

const lightbox = ref(false)
const current = ref(0)
const currentImage = computed(() => galleryImages[current.value] ?? galleryImages[0]!)

const open = (i: number) => {
  current.value = i
  lightbox.value = true
}
const prev = () => {
  current.value = (current.value - 1 + galleryImages.length) % galleryImages.length
}
const next = () => {
  current.value = (current.value + 1) % galleryImages.length
}

// Focus can sit outside the dialog card, so bind arrow keys on window while open.
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}
watch(lightbox, (isOpen: boolean) => {
  if (isOpen) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped lang="scss">
.gallery-tile {
  display: block;
  width: 100%;
  padding: 0;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  background: var(--surface-alt-strong);
  box-shadow: var(--shadow-sm);

  &:focus-visible {
    outline: 2px solid var(--color-navy);
    outline-offset: 2px;
  }

  &__img {
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
  }

  &:hover .gallery-tile__img :deep(img) {
    transform: scale(1.06);
  }
}

.lightbox {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;

  &__close {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  &__counter {
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-tile__img {
    transition: none;
  }
}
</style>
