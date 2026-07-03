<template>
  <div>
    <CommonPageHero
      title="Industrial Solar Power Plants in Nashik"
      subtitle="High-capacity rooftop and ground-mount solar solutions engineered for factories, MIDC units, and warehouses."
    />

    <section class="section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img :src="service?.image" alt="Industrial solar power plant installation" rounded="xl" cover height="420" />
          </v-col>
          <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
            <h2 class="text-h4 font-weight-bold" style="color: #0B1F3A">Engineered for Industrial Scale</h2>
            <p class="text-body-1 mt-4" style="color: #616161">{{ service?.description }}</p>
            <v-list class="mt-2 bg-transparent">
              <v-list-item v-for="feature in service?.features" :key="feature" class="px-0">
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="secondary" class="mr-2" />
                </template>
                <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-btn color="accent" size="large" class="text-deep-navy mt-4" to="/contact" prepend-icon="mdi-calendar-check-outline">
              Talk to Our Engineering Team
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading
          eyebrow="Capabilities"
          title="End-to-End Industrial EPC"
          center
          max-width="620px"
        />
        <v-row class="mt-8">
          <v-col v-for="cap in capabilities" :key="cap.title" cols="12" sm="6" md="3">
            <v-card class="pa-6 text-center h-100" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
              <v-icon :icon="cap.icon" color="secondary" size="30" class="mb-3" />
              <h3 class="text-subtitle-1 font-weight-bold mb-2" style="color: #0B1F3A">{{ cap.title }}</h3>
              <p class="text-body-2 mb-0" style="color: #616161">{{ cap.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeProcessTimeline />

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading eyebrow="Case Studies" title="Recent Industrial Installations" center max-width="600px" />
        <v-row class="mt-8">
          <v-col v-for="project in industrialProjects" :key="project.id" cols="12" sm="6" md="4">
            <CommonProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { getServiceBySlug } from '~/data/services'
import { projects } from '~/data/projects'

const service = getServiceBySlug('industrial-solar')
const industrialProjects = projects.filter((p) => p.propertyType === 'Industrial')

const capabilities = [
  { title: 'System Design', description: 'MW-scale engineering tailored to your load and roof/land profile.', icon: 'mdi-ruler-square-compass' },
  { title: 'Open Access', description: 'Support for open access and group captive solar arrangements.', icon: 'mdi-transmission-tower' },
  { title: 'Project Management', description: 'Dedicated PM ensures on-time delivery with zero production downtime.', icon: 'mdi-account-hard-hat-outline' },
  { title: 'SCADA Monitoring', description: 'Real-time performance monitoring and reporting dashboards.', icon: 'mdi-monitor-dashboard' },
]

useSeoMeta({
  title: 'Industrial Solar EPC Company in Nashik',
  description:
    'MW-scale industrial solar power plants for MIDC factories and warehouses in Nashik, Sinnar, and Igatpuri. End-to-end EPC services with SCADA monitoring.',
  ogTitle: 'Industrial Solar Power Plants — Nashik',
  ogDescription: 'High-capacity solar EPC solutions for factories and industrial units in Nashik.',
  keywords: 'industrial solar Nashik, solar EPC Nashik, MIDC solar Nashik, factory solar power plant Maharashtra',
})
</script>
