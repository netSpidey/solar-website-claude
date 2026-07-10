<template>
  <section class="py-10 py-md-12 bg-section-alt">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.brandsEyebrow')"
        :title="t('sections.brandsTitle')"
        center
        max-width="620px"
      />

      <div class="d-flex flex-wrap justify-center ga-4 mt-8">
        <div
          v-for="brand in brandPartners"
          :key="brand.name"
          class="brand-chip d-flex flex-column align-center justify-center px-8 py-4"
        >
          <img v-if="brand.logo" :src="brand.logo" :alt="brand.name" height="40" />
          <template v-else>
            <div class="brand-wordmark d-flex align-center" :class="{ 'font-italic': brand.italic }">
              <v-icon v-if="brand.icon" :icon="brand.icon" :color="brand.iconColor" size="22" class="mr-1" />
              <span
                v-for="part in brand.parts"
                :key="part.text"
                :style="part.gradient
                  ? { background: part.gradient, '-webkit-background-clip': 'text', 'background-clip': 'text', color: 'transparent' }
                  : { color: part.color }"
              >{{ part.text }}</span>
            </div>
            <div v-if="brand.tagline" class="brand-tagline" :style="{ color: brand.taglineColor }">
              {{ brand.tagline }}
            </div>
          </template>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { brandPartners } from '~/data/brands'

const { t } = useI18n()
</script>

<style scoped>
.brand-chip {
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  background: var(--surface-page);
  box-shadow: var(--shadow-sm);
  min-width: 180px;
  min-height: 84px;
}

.brand-wordmark {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.1;
}

.brand-tagline {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin-top: 2px;
}
</style>
