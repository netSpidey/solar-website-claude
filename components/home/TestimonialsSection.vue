<template>
  <section class="section-py" style="background: #FFFFFF">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.testimonialsEyebrow')"
        :title="t('sections.testimonialsTitle')"
        :subtitle="t('sections.testimonialsSubtitle')"
        center
        max-width="640px"
      />

      <v-row class="mt-8">
        <v-col v-for="(testimonial, i) in testimonials" :key="testimonial.id" cols="12" sm="6" md="4">
          <CommonRevealOnScroll :delay="i * 70">
            <v-card class="pa-6 h-100" elevation="1" rounded="xl">
              <div class="d-flex mb-3">
                <v-icon
                  v-for="n in 5"
                  :key="n"
                  :icon="n <= testimonial.rating ? 'mdi-star' : 'mdi-star-outline'"
                  color="accent"
                  size="18"
                />
              </div>
              <p class="text-body-2 font-italic mb-6" style="color: #424242">
                "{{ testimonial.quote }}"
              </p>
              <div class="d-flex align-center ga-3">
                <v-avatar size="44">
                  <v-img :src="testimonial.avatar" :alt="testimonial.name" />
                </v-avatar>
                <div>
                  <div class="text-body-2 font-weight-bold" style="color: #0B1F3A">{{ testimonial.name }}</div>
                  <div class="text-caption" style="color: #9e9e9e">{{ testimonial.location }} · {{ testimonial.systemSize }}</div>
                </div>
              </div>
            </v-card>
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { testimonials } = useLocalizedContent()
</script>
