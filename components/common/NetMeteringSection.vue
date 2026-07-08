<template>
  <section class="section-py">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('netMetering.eyebrow')"
        :title="t('netMetering.title')"
        :subtitle="t('netMetering.description')"
        center
        max-width="720px"
      />
      <v-row class="mt-8" justify="center">
        <v-col v-for="(step, index) in steps" :key="step.icon" cols="12" sm="4">
          <v-card class="pa-6 text-center h-100" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
            <v-avatar color="accent" size="40" class="mb-3">
              <span class="font-weight-bold" style="color: #0B1F3A">{{ index + 1 }}</span>
            </v-avatar>
            <h3 class="text-subtitle-1 font-weight-bold mb-2" style="color: #0B1F3A">{{ step.title }}</h3>
            <p class="text-body-2 mb-0" style="color: #616161">{{ step.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
  { icon: 'application', title: t('netMetering.step1Title'), description: t('netMetering.step1Desc') },
  { icon: 'meter', title: t('netMetering.step2Title'), description: t('netMetering.step2Desc') },
  { icon: 'credit', title: t('netMetering.step3Title'), description: t('netMetering.step3Desc') },
])
</script>
