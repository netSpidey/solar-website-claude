<template>
  <section class="section-py" style="background: #F8F9FA">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.servicesEyebrow')"
        :title="t('sections.servicesTitle')"
        :subtitle="t('sections.servicesSubtitle')"
        center
        max-width="640px"
      />

      <v-row class="mt-8">
        <v-col v-for="(service, i) in services" :key="service.slug" cols="12" sm="6" md="4">
          <CommonRevealOnScroll :delay="i * 80">
            <CommonServiceCard :service="service" />
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { services } = useLocalizedContent()
</script>
