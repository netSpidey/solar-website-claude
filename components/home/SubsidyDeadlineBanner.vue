<template>
  <section class="deadline-banner py-2">
    <v-container>
      <div class="d-flex flex-column flex-md-row align-center justify-center ga-2 ga-md-4 text-center text-md-left">
        <span class="deadline-banner__scheme flex-shrink-0">
          <v-icon icon="mdi-white-balance-sunny" size="14" />
          {{ t('subsidy.schemeTag') }}
        </span>
        <div class="d-flex align-center ga-2">
          <v-icon icon="mdi-alarm" size="20" class="deadline-banner__icon" />
          <span class="deadline-banner__text">{{ t('sections.deadlineText') }}</span>
        </div>
        <v-btn color="primary" size="small" variant="flat" :to="localePath('/solar-subsidy')" class="flex-shrink-0">
          {{ t('sections.deadlineCta') }}
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
.deadline-banner {
  background: var(--color-amber);

  &__icon {
    color: var(--color-navy);
  }

  &__scheme {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: var(--radius-pill);
    background: var(--color-navy);
    color: var(--color-amber);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &__text {
    color: var(--color-navy);
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.4;
  }
}
</style>
