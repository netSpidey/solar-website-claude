<template>
  <v-card class="service-card hover-lift h-100" elevation="2" :to="`/${service.slug}`">
    <div class="service-card__media">
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

    <v-card-item class="pt-4">
      <v-card-title class="text-h6 font-weight-bold px-0 service-card__title">{{ service.title }}</v-card-title>
      <v-card-text class="px-0 text-body-2 service-card__desc" style="color: #616161">
        {{ service.shortDescription }}
      </v-card-text>
    </v-card-item>

    <v-card-actions class="px-4 pb-4 pt-0">
      <v-btn variant="text" color="secondary" append-icon="mdi-arrow-right" class="px-0 service-card__cta">
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { ServiceItem } from '~/data/types'

defineProps<{ service: ServiceItem }>()
</script>

<style scoped lang="scss">
.service-card {
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &__media {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #e9ecef;
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
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(2px);
    box-shadow: 0 6px 16px rgba(11, 31, 58, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    white-space: normal;
    line-height: 1.3;
  }

  &__desc {
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
</style>
