<template>
  <div>
    <CommonPageHero
      title="Residential Solar Installation in Nashik"
      subtitle="Cut your household electricity bill by up to 90% with a rooftop solar system designed for your home."
    />

    <section class="section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img :src="service?.image" alt="Residential rooftop solar installation" rounded="xl" cover height="420" />
          </v-col>
          <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
            <h2 class="text-h4 font-weight-bold" style="color: #0B1F3A">{{ t('pages.residential.detailTitle') }}</h2>
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
              {{ t('common.bookFreeSurvey') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <CommonSystemTypesSection />

    <section class="section-py">
      <v-container>
        <CommonSectionHeading
          eyebrow="Popular Sizes"
          title="Which System Size Fits Your Home?"
          center
          max-width="600px"
        />
        <v-row class="mt-8">
          <v-col v-for="pkg in packages" :key="pkg.size" cols="12" sm="4">
            <v-card class="pa-6 text-center h-100 hover-lift" elevation="1" rounded="xl">
              <div class="text-h4 font-weight-bold" style="color: #0B1F3A">{{ pkg.size }}</div>
              <p class="text-caption mb-4" style="color: #9e9e9e">Suggested for</p>
              <p class="text-body-2 mb-4" style="color: #616161">{{ pkg.suitedFor }}</p>
              <v-chip color="secondary" variant="tonal" size="small">{{ pkg.savings }}</v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeSavingsCalculator />
    <CommonNetMeteringSection />
    <HomeProcessTimeline />

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading eyebrow="Case Studies" title="Recent Residential Installations" center max-width="600px" />
        <v-row class="mt-8">
          <v-col v-for="project in residentialProjects" :key="project.id" cols="12" sm="6" md="4">
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

const service = getServiceBySlug('residential-solar')
const residentialProjects = computed(() => projects.value.filter((p) => p.propertyType === 'Residential'))

const packages = [
  { size: '3 kW', suitedFor: '1-2 BHK homes with average bill of ₹2,000-3,000/month', savings: 'Save up to ₹2,800/month' },
  { size: '5 kW', suitedFor: '3 BHK homes & bungalows with average bill of ₹4,000-5,500/month', savings: 'Save up to ₹4,500/month' },
  { size: '10 kW', suitedFor: 'Large bungalows & farmhouses with high consumption', savings: 'Save up to ₹9,000/month' },
]

useSeoMeta({
  title: 'Residential Solar Panel Installation in Nashik',
  description:
    'Rooftop solar systems for homes and bungalows in Nashik. Save up to 90% on electricity bills with free site survey, subsidy assistance, and 25-year warranty.',
  ogTitle: 'Residential Solar Installation — Nashik',
  ogDescription: 'Rooftop solar systems for homes in Nashik with subsidy assistance and net metering support.',
  keywords: 'residential solar Nashik, rooftop solar for home Nashik, home solar panels Nashik, solar installation cost Nashik',
})
</script>
