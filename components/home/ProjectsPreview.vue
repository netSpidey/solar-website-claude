<template>
  <section class="section-py">
    <v-container>
      <div class="d-flex flex-column flex-md-row justify-space-between align-md-end mb-2">
        <CommonSectionHeading
          :eyebrow="t('sections.workEyebrow')"
          :title="t('sections.workTitle')"
          :subtitle="t('sections.workSubtitle')"
        />
        <v-btn variant="text" color="secondary" append-icon="mdi-arrow-right" :to="localePath('/projects')" class="mb-6">
          {{ t('common.viewAllProjects') }}
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
const { t } = useI18n()
const localePath = useLocalePath()
const { projects } = useLocalizedContent()

const previewProjects = computed(() => projects.value.slice(0, 3))
</script>
