<template>
  <section class="section-py" style="background: #F8F9FA">
    <v-container>
      <div class="d-flex flex-column flex-md-row justify-space-between align-md-end mb-2">
        <CommonSectionHeading
          eyebrow="Our Work"
          title="Recent Solar Installations"
          subtitle="A glimpse of rooftop and ground-mount projects completed across Nashik."
        />
        <v-btn variant="text" color="secondary" append-icon="mdi-arrow-right" to="/projects" class="mb-6">
          View All Projects
        </v-btn>
      </div>

      <v-row class="mt-4">
        <v-col v-for="(project, i) in previewProjects" :key="project.id" cols="12" sm="6" md="4">
          <CommonRevealOnScroll :delay="i * 80">
            <CommonProjectCard :project="project" />
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const previewProjects = projects.slice(0, 3)
</script>
