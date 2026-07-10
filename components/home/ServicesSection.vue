<template>
  <section class="section-py">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.servicesEyebrow')"
        :title="t('sections.servicesTitle')"
        :subtitle="t('sections.servicesSubtitle')"
        center
        max-width="640px"
      />

      <!-- Primary offerings: Residential & Commercial as large feature cards -->
      <v-row class="mt-8">
        <v-col v-for="(service, i) in primaryServices" :key="service.slug" cols="12" md="6">
          <CommonRevealOnScroll :delay="i * 80">
            <CommonServiceCard :service="service" />
          </CommonRevealOnScroll>
        </v-col>
      </v-row>

      <!-- Remaining services as compact icon cards -->
      <v-row class="mt-2">
        <v-col v-for="(service, i) in secondaryServices" :key="service.slug" cols="12" sm="6" md="4">
          <CommonRevealOnScroll :delay="i * 60">
            <CommonServiceCard :service="service" compact />
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { services } = useLocalizedContent()

const primaryServices = computed(() => services.value.slice(0, 2))
const secondaryServices = computed(() => services.value.slice(2))
</script>
