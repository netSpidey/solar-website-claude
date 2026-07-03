<template>
  <v-footer class="footer bg-navy-gradient pt-12 pb-6" theme="dark">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img src="/assets/images/logo.svg" alt="Suryoday Solar Nashik logo" height="40" class="mb-4 footer-logo" />
          <p class="text-body-2 text-white opacity-80 mb-4">
            {{ companyInfo.name }} designs and installs premium rooftop solar systems for homes,
            businesses, and industries across Nashik, Maharashtra.
          </p>
          <div class="d-flex ga-2">
            <v-btn
              v-for="social in socialLinks"
              :key="social.title"
              :icon="social.icon"
              :href="social.href"
              target="_blank"
              rel="noopener"
              variant="tonal"
              color="white"
              size="small"
              :aria-label="social.title"
            />
          </div>
        </v-col>

        <v-col cols="6" md="2">
          <h3 class="text-subtitle-1 font-weight-bold mb-4 text-accent">Services</h3>
          <ul class="footer-list">
            <li v-for="service in services" :key="service.slug">
              <NuxtLink :to="`/${service.slug}`" class="footer-link">{{ service.title }}</NuxtLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="6" md="2">
          <h3 class="text-subtitle-1 font-weight-bold mb-4 text-accent">Quick Links</h3>
          <ul class="footer-list">
            <li v-for="link in mainNav" :key="link.to">
              <NuxtLink :to="link.to" class="footer-link">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="4">
          <h3 class="text-subtitle-1 font-weight-bold mb-4 text-accent">Contact Us</h3>
          <ul class="footer-list">
            <li class="d-flex align-start ga-2 mb-2">
              <v-icon icon="mdi-map-marker-outline" size="18" class="mt-1" />
              <span>{{ companyInfo.address }}</span>
            </li>
            <li class="d-flex align-center ga-2 mb-2">
              <v-icon icon="mdi-phone-outline" size="18" />
              <a :href="phoneHref" class="footer-link">{{ companyInfo.phoneDisplay }}</a>
            </li>
            <li class="d-flex align-center ga-2 mb-2">
              <v-icon icon="mdi-email-outline" size="18" />
              <a :href="`mailto:${companyInfo.email}`" class="footer-link">{{ companyInfo.email }}</a>
            </li>
            <li class="d-flex align-center ga-2">
              <v-icon icon="mdi-clock-outline" size="18" />
              <span>{{ companyInfo.workingHours }}</span>
            </li>
          </ul>

          <div class="map-placeholder mt-4 rounded-lg overflow-hidden">
            <iframe
              :src="companyInfo.mapEmbedUrl"
              width="100%"
              height="160"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Suryoday Solar Nashik location map"
            />
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6 opacity-20" />

      <div class="d-flex flex-column flex-md-row justify-space-between align-center ga-2 text-caption text-white opacity-70">
        <span>&copy; {{ year }} {{ companyInfo.name }}. All rights reserved.</span>
        <span>GSTIN: {{ companyInfo.gstin }} · Nashik, Maharashtra, India</span>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { companyInfo, mainNav, socialLinks } from '~/data/nav'
import { services } from '~/data/services'

const year = new Date().getFullYear()
const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`
</script>

<style scoped lang="scss">
.footer-logo {
  filter: brightness(0) invert(1);
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;
  }
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    color: #FFC107;
  }
}

.map-placeholder {
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
