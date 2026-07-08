<template>
  <div>
    <CommonPageHero
      title="Commercial Solar Solutions in Nashik"
      subtitle="Lower operating costs for shops, offices, hotels, and hospitals with a solar system built around your business load."
    />

    <section class="section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img :src="service?.image" alt="Commercial rooftop solar installation" rounded="xl" cover height="420" />
          </v-col>
          <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
            <h2 class="text-h4 font-weight-bold" style="color: #0B1F3A">{{ t('pages.commercial.detailTitle') }}</h2>
            <p class="text-body-1 mt-4" style="color: #616161">{{ service?.description }}</p>
            <v-list class="mt-2 bg-transparent">
              <v-list-item v-for="feature in service?.features" :key="feature" class="px-0">
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="secondary" class="mr-2" />
                </template>
                <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-btn color="accent" size="large" class="text-deep-navy mt-4" :to="localePath('/contact')" prepend-icon="mdi-calendar-check-outline">
              {{ t('pages.commercial.cta') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading
          eyebrow="Who We Serve"
          title="Trusted by Businesses Across Nashik"
          center
          max-width="620px"
        />
        <v-row class="mt-8">
          <v-col v-for="segment in segments" :key="segment.title" cols="12" sm="6" md="3">
            <v-card class="pa-6 text-center h-100" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
              <v-icon :icon="segment.icon" color="secondary" size="30" class="mb-3" />
              <h3 class="text-subtitle-1 font-weight-bold" style="color: #0B1F3A">{{ segment.title }}</h3>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <CommonSystemTypesSection />
    <CommonNetMeteringSection />

    <HomeProcessTimeline />

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading eyebrow="Case Studies" title="Recent Commercial Installations" center max-width="600px" />
        <v-row class="mt-8">
          <v-col v-for="project in commercialProjects" :key="project.id" cols="12" sm="6" md="4">
            <CommonProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeTestimonialsSection />
    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { getServiceBySlug, projects } = useLocalizedContent()

const service = getServiceBySlug('commercial-solar')
const commercialProjects = computed(() => projects.value.filter((p) => p.propertyType === 'Commercial'))

const segments = [
  { title: 'Retail Showrooms', icon: 'mdi-store-outline' },
  { title: 'Offices & IT Parks', icon: 'mdi-office-building-outline' },
  { title: 'Hotels & Banquets', icon: 'mdi-bed-outline' },
  { title: 'Hospitals & Clinics', icon: 'mdi-hospital-box-outline' },
]

useSeoMeta({
  title: 'Commercial Solar Panel Installation in Nashik',
  description:
    'Reduce your business electricity costs with commercial solar installations in Nashik. Custom system design, flexible financing, and real-time monitoring for shops, offices, and hotels.',
  ogTitle: 'Commercial Solar Installation — Nashik',
  ogDescription: 'Solar solutions for shops, offices, and hotels across Nashik.',
  keywords: 'commercial solar Nashik, solar for business Nashik, solar for office Nashik, solar for shops Nashik',
})
</script>
