<template>
  <v-card
    class="service-card hover-lift h-100"
    :class="{ 'service-card--compact': compact }"
    elevation="0"
    :to="localePath(`/${service.slug}`)"
  >
    <div v-if="!compact" class="service-card__media">
      <v-img
        :src="service.image"
        :alt="service.title"
        :style="{ objectPosition: service.imagePosition || 'center' }"
        class="service-card__img"
        cover
      />
      <div class="service-card__icon">
        <v-icon :icon="service.icon" size="26" color="deep-navy" />
      </div>
    </div>

    <v-card-item :class="compact ? 'pt-5' : 'pt-4'">
      <div v-if="compact" class="service-card__icon-chip mb-3">
        <v-icon :icon="service.icon" size="24" />
      </div>
      <v-card-title class="font-weight-bold px-0 service-card__title" :class="compact ? 'text-subtitle-1' : 'text-h6'">
        {{ service.title }}
      </v-card-title>
      <v-card-text class="px-0 text-body-2 service-card__desc">
        {{ service.shortDescription }}
      </v-card-text>
    </v-card-item>

    <v-card-actions class="px-4 pb-4 pt-0">
      <v-btn variant="text" color="secondary" append-icon="mdi-arrow-right" class="px-0 service-card__cta">
        {{ t('common.learnMore') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { ServiceItem } from '~/data/types'

withDefaults(defineProps<{ service: ServiceItem; compact?: boolean }>(), { compact: false })
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
.service-card {
  border-radius: var(--radius-xl);
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background: var(--surface-page);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);

  &__media {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
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

  &__icon {
    position: absolute;
    left: 14px;
    bottom: 14px;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(2px);
    box-shadow: var(--shadow-md);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--color-amber-soft);
    color: var(--color-navy);
  }

  &__title {
    white-space: normal;
    line-height: 1.3;
    color: var(--text-strong);
  }

  &__desc {
    color: var(--text-muted);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 2.6em;
  }

  &__cta {
    :deep(.v-icon) {
      transition: transform 0.25s ease;
    }
  }

  &:hover &__cta :deep(.v-icon) {
    transform: translateX(4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card__img,
  .service-card__cta :deep(.v-icon) {
    transition: none;
  }
}
</style>
