<template>
  <div>
    <CommonPageHero :title="t('pages.about.heroTitle')" :subtitle="t('pages.about.heroSubtitle')" />

    <section class="section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img
              src="/assets/images/about/about-banner.jpg"
              :alt="`${companyInfo.name} rooftop solar installation`"
              rounded="xl"
              cover
              height="420"
            />
          </v-col>
          <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
            <v-chip color="accent" variant="flat" size="small" class="mb-3 font-weight-bold">{{ t('pages.about.storyEyebrow') }}</v-chip>
            <h2 class="text-h4 font-weight-bold" style="color: #0B1F3A">
              {{ t('pages.about.storyTitle') }}
            </h2>
            <p class="text-body-1 mt-4" style="color: #616161">
              {{ t('pages.about.storyPara1') }}
            </p>
            <p class="text-body-1 mt-4" style="color: #616161">
              {{ t('pages.about.storyPara2') }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading
          :eyebrow="t('pages.about.valuesEyebrow')"
          :title="t('pages.about.valuesTitle')"
          center
          max-width="600px"
        />
        <v-row class="mt-8">
          <v-col v-for="value in values" :key="value.icon" cols="12" sm="6" md="3">
            <v-card class="pa-6 text-center h-100" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
              <v-icon :icon="value.icon" color="secondary" size="32" class="mb-3" />
              <h3 class="text-subtitle-1 font-weight-bold mb-2" style="color: #0B1F3A">{{ value.title }}</h3>
              <p class="text-body-2 mb-0" style="color: #616161">{{ value.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeTrustStats />

    <section class="section-py" style="background: #FFFFFF">
      <v-container>
        <CommonSectionHeading
          :eyebrow="t('pages.about.teamEyebrow')"
          :title="t('pages.about.teamTitle')"
          :subtitle="t('pages.about.teamSubtitle')"
          center
          max-width="600px"
        />
        <v-row class="mt-8" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="text-center pa-8" elevation="1" rounded="xl">
              <!-- TODO: replace placeholder avatar with a real photo of the proprietor -->
              <v-avatar size="96" class="mb-4">
                <v-img src="/assets/images/testimonials/avatar-1.svg" :alt="companyInfo.proprietor" />
              </v-avatar>
              <h3 class="text-h6 font-weight-bold" style="color: #0B1F3A">{{ companyInfo.proprietor }}</h3>
              <p class="text-body-2 mt-1 mb-4" style="color: #616161">{{ t('pages.about.proprietorRole') }}</p>
              <div class="d-flex flex-wrap justify-center ga-2 mb-6">
                <v-chip color="secondary" variant="tonal" size="small" prepend-icon="mdi-check-decagram">
                  {{ t('subsidy.registeredBadge') }}
                </v-chip>
                <v-chip color="primary" variant="tonal" size="small" prepend-icon="mdi-file-certificate-outline">
                  {{ t('common.gstin') }}: {{ companyInfo.gstin }}
                </v-chip>
              </div>
              <div class="d-flex justify-center ga-3">
                <v-btn color="secondary" prepend-icon="mdi-phone" :href="phoneHref">
                  {{ t('common.callNow') }}
                </v-btn>
                <v-btn color="success" prepend-icon="mdi-whatsapp" :href="`https://wa.me/${companyInfo.whatsapp}`" target="_blank" rel="noopener">
                  {{ t('common.whatsapp') }}
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'

const { t, tm } = useI18n()

const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`

const valueIcons = ['mdi-eye-check-outline', 'mdi-medal-outline', 'mdi-shield-check-outline', 'mdi-map-marker-radius-outline']
const values = computed(() => {
  const titles = tm('pages.about.valueTitles') as string[]
  const descriptions = tm('pages.about.valueDescriptions') as string[]
  return valueIcons.map((icon, index) => ({
    icon,
    title: titles[index] || '',
    description: descriptions[index] || '',
  }))
})

useSeoMeta({
  title: 'About Us — Solar Company in Nashik',
  description:
    'S.P. Enterprises, Nashik Solar is an Authorized Channel Partner and Solar EPC Contractor registered under the PM Surya Ghar Yojana, serving homes and businesses across Nashik.',
  ogTitle: 'About S.P. Enterprises, Nashik Solar',
  ogDescription: 'Authorized Channel Partner & Solar EPC Contractor in Nashik, Maharashtra.',
  keywords: 'about solar company Nashik, solar installer Nashik, solar EPC company Maharashtra',
})
</script>
