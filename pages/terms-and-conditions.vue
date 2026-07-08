<template>
  <div>
    <CommonPageHero :title="t('pages.terms.title')" :subtitle="t('pages.terms.subtitle')" />

    <section class="section-py">
      <v-container style="max-width: 800px">
        <div v-for="(section, index) in sections" :key="section.title" class="mb-8">
          <h2 class="text-h6 font-weight-bold mb-3" style="color: #0B1F3A">
            {{ index + 1 }}. {{ section.title }}
          </h2>
          <ul class="terms-list">
            <li v-for="point in section.points" :key="point" class="text-body-2 mb-2" style="color: #616161">
              {{ point }}
            </li>
          </ul>
        </div>

        <v-alert type="info" variant="tonal" density="comfortable" class="mt-4">
          {{ acceptanceNote }}
        </v-alert>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { termsSections, termsAcceptanceNote } from '~/data/terms'

const { t, locale } = useI18n()

const sections = computed(() => termsSections[locale.value as keyof typeof termsSections] ?? termsSections.en)
const acceptanceNote = computed(() => termsAcceptanceNote[locale.value as keyof typeof termsAcceptanceNote] ?? termsAcceptanceNote.en)

useSeoMeta({
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for solar plant supply, installation, warranty, and services by S.P. Enterprises, Nashik Solar.',
})
</script>

<style scoped>
.terms-list {
  padding-left: 20px;
}
</style>
