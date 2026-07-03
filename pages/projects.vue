<template>
  <div>
    <CommonPageHero
      title="Our Solar Projects"
      subtitle="Explore rooftop and ground-mount solar installations completed across Nashik and the surrounding district."
    />

    <section class="section-py">
      <v-container>
        <div class="d-flex flex-wrap justify-center ga-2 mb-8">
          <v-chip
            v-for="filter in filters"
            :key="filter"
            :color="activeFilter === filter ? 'accent' : undefined"
            :variant="activeFilter === filter ? 'flat' : 'outlined'"
            class="font-weight-medium"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </v-chip>
        </div>

        <v-row>
          <v-col v-for="project in filteredProjects" :key="project.id" cols="12" sm="6" md="4">
            <CommonProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeTrustStats />
    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const filters = ['All', 'Residential', 'Commercial', 'Industrial'] as const
const activeFilter = ref<(typeof filters)[number]>('All')

const filteredProjects = computed(() =>
  activeFilter.value === 'All' ? projects : projects.filter((p) => p.propertyType === activeFilter.value)
)

useSeoMeta({
  title: 'Solar Installation Projects in Nashik',
  description:
    'Browse our portfolio of completed residential, commercial, and industrial solar installation projects across Nashik, Maharashtra.',
  ogTitle: 'Solar Projects — Nashik',
  ogDescription: 'Residential, commercial, and industrial solar installations completed across Nashik.',
  keywords: 'solar projects Nashik, solar installation portfolio Nashik, solar case studies Maharashtra',
})
</script>
