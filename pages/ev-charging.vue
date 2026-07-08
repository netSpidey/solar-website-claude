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
            <v-btn color="accent" size="large" class="text-deep-navy mt-4" :to="localePath('/contact')" prepend-icon="mdi-ev-station">
              {{ t('pages.evCharging.cta') }}
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

const service = getServiceBySlug('ev-charging')

useSeoMeta({
  title: 'EV Charger Installation in Nashik',
  description:
    'Professional EV charging point installation for homes, housing societies, and businesses in Nashik — with solar-integrated charging options and after-sales support.',
  ogTitle: 'EV Charging Solutions — Nashik',
  ogDescription: 'Safe, professional EV charger installation for homes and businesses in Nashik.',
  keywords: 'EV charger installation Nashik, EV charging station Nashik, solar EV charging Maharashtra',
})
</script>
