<template>
  <v-footer class="footer bg-navy-gradient pt-16 pb-8" theme="dark">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="footer-logo d-inline-flex align-center pa-2 mb-4">
            <img src="/assets/images/logo1.png" :alt="`${companyInfo.name} logo`" height="64" />
          </div>
          <p class="text-body-2 text-white opacity-80 mb-4">
            {{ t('company.footerAbout') }}
          </p>
          <div v-if="socialLinks.length" class="d-flex ga-2">
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
          <h3 class="footer-heading mb-4">{{ t('footer.services') }}</h3>
          <ul class="footer-list">
            <li v-for="service in services" :key="service.slug">
              <NuxtLink :to="localePath(`/${service.slug}`)" class="footer-link">{{ service.title }}</NuxtLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="6" md="2">
          <h3 class="footer-heading mb-4">{{ t('footer.quickLinks') }}</h3>
          <ul class="footer-list">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink :to="localePath(link.to)" class="footer-link">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="4">
          <h3 class="footer-heading mb-4">{{ t('footer.contactUs') }}</h3>
          <ul class="footer-list">
            <li class="d-flex align-start ga-2 mb-2">
              <v-icon icon="mdi-map-marker-outline" size="18" class="mt-1" />
              <span>{{ t('company.address') }}</span>
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
              <span>{{ t('company.workingHours') }}</span>
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
              :title="t('footer.locationMap')"
            />
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6 opacity-20" />

      <div class="d-flex flex-column flex-md-row justify-space-between align-center ga-2 text-caption text-white opacity-70">
        <span>&copy; {{ year }} {{ companyInfo.name }}. {{ t('common.rights') }}</span>
        <span class="d-flex align-center ga-3">
          <NuxtLink :to="localePath('/terms-and-conditions')" class="footer-link">{{ t('footer.terms') }}</NuxtLink>
          <span>{{ t('common.gstin') }}: {{ companyInfo.gstin }} · Nashik, Maharashtra, India</span>
        </span>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { companyInfo, socialLinks } from '~/data/nav'

const year = new Date().getFullYear()
const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`
const { t } = useI18n()
const localePath = useLocalePath()
const { navLinks, services } = useLocalizedContent()
</script>

<style scoped lang="scss">
.footer-logo {
  background: #ffffff;
  border-radius: var(--radius-md);
}

.footer-heading {
  color: var(--color-amber);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
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
  color: var(--text-on-dark-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-amber);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.map-placeholder {
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
