<template>
  <section class="deadline-banner py-2">
    <v-container>
      <div class="d-flex flex-column flex-md-row align-center justify-center ga-2 ga-md-4 text-center text-md-left">
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

  &__text {
    color: var(--color-navy);
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.4;
  }
}
</style>
