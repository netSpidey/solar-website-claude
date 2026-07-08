<template>
  <section class="section-py" style="background: #F8F9FA">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.whyEyebrow')"
        :title="t('sections.whyTitle')"
        :subtitle="t('sections.whySubtitle')"
        center
        max-width="640px"
      />

      <v-row class="mt-8">
        <v-col v-for="(item, i) in whyChooseUs" :key="item.icon" cols="12" sm="6" md="3">
          <CommonRevealOnScroll :delay="i * 70">
            <v-card class="pa-6 h-100 hover-lift" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
              <v-icon :icon="item.icon" color="secondary" size="32" class="mb-4" />
              <h3 class="text-subtitle-1 font-weight-bold mb-2" style="color: #0B1F3A">{{ item.title }}</h3>
              <p class="text-body-2 mb-0" style="color: #616161">{{ item.description }}</p>
            </v-card>
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { whyChooseUs } = useLocalizedContent()
</script>
