<template>
  <div>
    <CommonPageHero :title="service?.title ?? ''" :subtitle="service?.shortDescription" />

    <section class="section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img :src="service?.image" :alt="service?.title" rounded="xl" cover height="400" />
          </v-col>
          <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
            <p class="text-body-1" style="color: #616161">{{ service?.description }}</p>
            <v-list class="mt-2 bg-transparent">
              <v-list-item v-for="feature in service?.features" :key="feature" class="px-0">
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="secondary" class="mr-2" />
                </template>
                <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-btn color="accent" size="large" class="text-deep-navy mt-4" :to="localePath('/contact')" prepend-icon="mdi-calendar-check-outline">
              {{ t('pages.maintenance.cta') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { getServiceBySlug } = useLocalizedContent()

const service = getServiceBySlug('solar-maintenance')

useSeoMeta({
  title: 'Solar Panel Maintenance Services in Nashik',
  description:
    'Professional solar panel cleaning, inspection, and performance checks to keep your rooftop solar system generating maximum output in Nashik.',
  ogTitle: 'Solar Maintenance — Nashik',
  ogDescription: 'Panel cleaning, inverter checks, and performance servicing for solar systems in Nashik.',
  keywords: 'solar maintenance Nashik, solar panel cleaning Nashik, solar servicing Maharashtra',
})
</script>
