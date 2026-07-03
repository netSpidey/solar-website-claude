<template>
  <section class="section-py" style="background: #F8F9FA">
    <v-container>
      <CommonSectionHeading
        eyebrow="Our Services"
        title="Complete Solar Solutions Under One Roof"
        subtitle="From homes to factories, we design, install, and maintain solar systems tailored to your energy needs."
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
import { services } from '~/data/services'
</script>
