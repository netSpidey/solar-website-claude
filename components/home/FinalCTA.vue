<template>
  <section class="final-cta bg-navy-gradient">
    <v-container class="py-12 py-md-16 text-center">
      <h2 class="text-h4 text-md-h3 font-weight-bold text-white mx-auto" style="max-width: 640px">
        Ready to Reduce Your Electricity Bill?
      </h2>
      <p class="text-body-1 text-white opacity-80 mt-4 mx-auto" style="max-width: 520px">
        Get a free, no-obligation site survey and personalised solar quote from Nashik's trusted
        installation experts.
      </p>

      <div class="d-flex flex-wrap justify-center ga-3 mt-8">
        <v-btn color="accent" size="x-large" class="text-deep-navy" prepend-icon="mdi-calculator-variant-outline" to="/contact">
          Get Free Quote
        </v-btn>
        <v-btn
          color="success"
          variant="flat"
          size="x-large"
          prepend-icon="mdi-whatsapp"
          :href="`https://wa.me/${companyInfo.whatsapp}`"
          target="_blank"
          rel="noopener"
        >
          Chat on WhatsApp
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'
</script>
