<template>
  <section class="deadline-banner py-3">
    <v-container>
      <div class="d-flex flex-column flex-md-row align-center justify-center ga-3 text-center text-md-left">
        <div class="d-flex align-center ga-2">
          <v-icon icon="mdi-alarm" color="deep-navy" size="22" />
          <span class="text-body-2 font-weight-medium" style="color: #0B1F3A">{{ t('sections.deadlineText') }}</span>
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

<style scoped>
.deadline-banner {
  background: #FFC107;
}
</style>
