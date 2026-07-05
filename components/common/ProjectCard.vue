<template>
  <v-card class="project-card hover-lift h-100" elevation="2">
    <div class="project-card__media">
      <v-img
        :src="project.image"
        :alt="project.title"
        :style="{ objectPosition: project.imagePosition || 'center' }"
        class="project-card__img"
        cover
      />
      <v-chip class="project-card__chip" color="accent" size="small" variant="flat" style="color: #0B1F3A">
        {{ translateCategory(project.propertyType) }}
      </v-chip>
    </div>
    <v-card-item>
      <v-card-title class="text-subtitle-1 font-weight-bold px-0" style="white-space: normal">{{ project.title }}</v-card-title>
      <v-card-subtitle class="px-0 d-flex align-center ga-1" style="white-space: normal">
        <v-icon icon="mdi-map-marker-outline" size="16" />
        {{ project.location }}
      </v-card-subtitle>
    </v-card-item>
    <v-card-text class="pt-0">
      <v-row dense class="mt-1">
        <v-col cols="6">
          <div class="text-caption" style="color: #9e9e9e">{{ t('common.systemSize') }}</div>
          <div class="text-body-2 font-weight-bold">{{ project.systemSize }}</div>
        </v-col>
        <v-col cols="6">
          <div class="text-caption" style="color: #9e9e9e">{{ t('common.estSavings') }}</div>
          <div class="text-body-2 font-weight-bold" style="color: #43A047">{{ project.estimatedSavings }}</div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { ProjectItem } from '~/data/types'

defineProps<{ project: ProjectItem }>()
const { t } = useI18n()
const { translateCategory } = useLocalizedContent()
</script>

<style scoped lang="scss">
.project-card {
  border-radius: 20px;
  overflow: hidden;

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

  &__chip {
    position: absolute;
    top: 12px;
    left: 12px;
  }
}
</style>
