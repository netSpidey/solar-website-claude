<template>
  <section class="section-py bg-section-alt">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.whyEyebrow')"
        :title="t('sections.whyTitle')"
        :subtitle="t('sections.whySubtitle')"
        center
        max-width="640px"
      />

      <v-row class="mt-8">
        <v-col v-for="(item, i) in whyChooseUs" :key="item.icon" cols="12" sm="6" md="3">
          <CommonRevealOnScroll :delay="i * 70">
            <v-card class="why-card h-100 hover-lift" elevation="0">
              <div class="why-card__media">
                <v-img
                  :src="item.image"
                  :alt="item.title"
                  :style="{ objectPosition: item.imagePosition || 'center' }"
                  class="why-card__img"
                  cover
                />
              </div>
              <div class="why-card__body px-5 pb-5">
                <div class="why-card__icon mb-3">
                  <v-icon :icon="item.icon" size="24" />
                </div>
                <h3 class="why-card__title text-subtitle-1 font-weight-bold mb-2">{{ item.title }}</h3>
                <p class="why-card__desc text-body-2 mb-0">{{ item.description }}</p>
              </div>
            </v-card>
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { whyChooseUs } = useLocalizedContent()
</script>

<style scoped lang="scss">
.why-card {
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--surface-page);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);

  &__media {
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--surface-alt-strong);
  }

  &__img {
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
  }

  &:hover &__img :deep(img) {
    transform: scale(1.06);
  }

  // Chip overlaps the photo edge, ringed by the card surface so it reads as floating.
  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    margin-top: -26px;
    position: relative;
    border-radius: 14px;
    background: var(--color-amber-soft);
    color: var(--color-navy);
    border: 3px solid var(--surface-page);
    box-shadow: var(--shadow-sm);
  }

  &__title {
    color: var(--text-strong);
    line-height: 1.35;
  }

  &__desc {
    color: var(--text-muted);
  }
}

@media (prefers-reduced-motion: reduce) {
  .why-card__img {
    transition: none;
  }
}
</style>
