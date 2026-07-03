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
            <v-btn color="accent" size="large" class="text-deep-navy mt-4" to="/contact" prepend-icon="mdi-water-pump">
              Enquire About Solar Pumps
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { getServiceBySlug } from '~/data/services'

const service = getServiceBySlug('solar-water-pump')

useSeoMeta({
  title: 'Solar Water Pumps for Farms in Nashik — PM-KUSUM',
  description:
    'Solar-powered irrigation water pumps for farmers in Nashik district, subsidised under the PM-KUSUM scheme. Reduce diesel and electricity costs.',
  ogTitle: 'Solar Water Pumps — Nashik',
  ogDescription: 'PM-KUSUM subsidised solar irrigation pumps for Nashik district farmers.',
  keywords: 'solar water pump Nashik, PM-KUSUM Nashik, solar irrigation pump Maharashtra',
})
</script>
