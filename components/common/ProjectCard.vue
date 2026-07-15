<template>
  <v-card class="project-card hover-lift h-100" elevation="0">
    <div class="project-card__media">
      <v-img
        :src="project.image"
        :alt="project.title"
        :style="{ objectPosition: project.imagePosition || 'center' }"
        class="project-card__img"
        cover
      />
      <v-chip class="project-card__chip" color="accent" size="small" variant="flat">
        {{ translateCategory(project.propertyType) }}
      </v-chip>
    </div>
    <v-card-item>
      <v-card-title class="text-subtitle-1 font-weight-bold px-0 project-card__title">{{ project.title }}</v-card-title>
      <v-card-subtitle class="px-0 d-flex align-center ga-1 project-card__location">
        <v-icon icon="mdi-map-marker-outline" size="16" />
        {{ project.location }}
      </v-card-subtitle>
    </v-card-item>
    <v-card-text class="pt-1 pb-5">
      <div class="d-flex flex-wrap ga-2">
        <span v-if="project.systemSize" class="stat-chip">
          <v-icon icon="mdi-lightning-bolt" size="15" />
          <span class="d-sr-only">{{ t('common.systemSize') }}: </span>
          {{ project.systemSize }}
        </span>
        <span v-if="project.estimatedSavings" class="stat-chip stat-chip--green">
          <v-icon icon="mdi-piggy-bank-outline" size="15" />
          <span class="d-sr-only">{{ t('common.estSavings') }}: </span>
          {{ project.estimatedSavings }}
        </span>
      </div>
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
  border-radius: var(--radius-xl);
  overflow: hidden;
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

  &__chip {
    position: absolute;
    top: 12px;
    left: 12px;
    color: var(--color-navy);
    font-weight: 700;
  }

  &__title {
    white-space: normal;
    color: var(--text-strong);
  }

  &__location {
    white-space: normal;
    color: var(--text-muted);
    opacity: 1;
  }
}

.stat-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  background: var(--surface-alt);
  border: 1px solid var(--border-soft);
  color: var(--color-navy);
  font-size: 0.8rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;

  &--green {
    background: rgba(67, 160, 71, 0.1);
    border-color: rgba(67, 160, 71, 0.25);
    color: var(--color-green-strong);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card__img {
    transition: none;
  }
}
</style>
