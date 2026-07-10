<template>
  <section class="section-py bg-section-alt">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.testimonialsEyebrow')"
        :title="t('sections.testimonialsTitle')"
        :subtitle="t('sections.testimonialsSubtitle')"
        center
        max-width="640px"
      />

      <div class="rating-header d-flex align-center justify-center ga-2 mt-5">
        <div class="d-flex" aria-hidden="true">
          <v-icon
            v-for="n in 5"
            :key="n"
            :icon="n <= Math.round(averageRating) ? 'mdi-star' : 'mdi-star-outline'"
            color="accent"
            size="22"
          />
        </div>
        <span class="rating-header__text">{{ averageRating }}/5</span>
      </div>

      <v-slide-group class="testimonial-track mt-6" show-arrows>
        <v-slide-group-item v-for="testimonial in testimonials" :key="testimonial.id">
          <v-card class="testimonial-card pa-6 ma-3 d-flex flex-column" elevation="0">
            <v-icon icon="mdi-format-quote-open" size="34" class="testimonial-card__quote-icon mb-2" />
            <div class="d-flex mb-3">
              <v-icon
                v-for="n in 5"
                :key="n"
                :icon="n <= testimonial.rating ? 'mdi-star' : 'mdi-star-outline'"
                color="accent"
                size="16"
              />
            </div>
            <p class="testimonial-card__text mb-6">
              "{{ testimonial.quote }}"
            </p>
            <div class="d-flex align-center ga-3 mt-auto">
              <v-avatar size="44">
                <v-img :src="testimonial.avatar" :alt="testimonial.name" />
              </v-avatar>
              <div>
                <div class="testimonial-card__name">{{ testimonial.name }}</div>
                <div class="testimonial-card__meta">{{ testimonial.location }} · {{ testimonial.systemSize }}</div>
              </div>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import type { TestimonialItem } from '~/data/types'

const { t } = useI18n()
const { testimonials } = useLocalizedContent()

const averageRating = computed(() => {
  const items = testimonials.value
  if (!items.length) return 5
  return Math.round((items.reduce((sum: number, item: TestimonialItem) => sum + item.rating, 0) / items.length) * 10) / 10
})
</script>

<style scoped lang="scss">
.rating-header__text {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-strong);
}

.testimonial-track :deep(.v-slide-group__content) {
  padding: 4px 0 12px;
}

.testimonial-card {
  width: 340px;
  border-radius: var(--radius-xl);
  background: var(--surface-page);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);

  &__quote-icon {
    color: var(--color-amber);
  }

  &__text {
    color: var(--text-body);
    font-size: 0.92rem;
    line-height: 1.65;
  }

  &__name {
    color: var(--text-strong);
    font-size: 0.9rem;
    font-weight: 700;
  }

  &__meta {
    color: var(--text-muted);
    font-size: 0.78rem;
  }
}

@media (max-width: 600px) {
  .testimonial-card {
    width: 300px;
  }
}
</style>
