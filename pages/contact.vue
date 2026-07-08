<template>
  <div>
    <CommonPageHero
      title="Contact Us"
      subtitle="Get in touch for a free site survey, custom quotation, or answers to your solar questions."
    />

    <section class="section-py">
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <h2 class="text-h5 font-weight-bold mb-6" style="color: #0B1F3A">Get in Touch</h2>

            <v-card v-for="item in contactItems" :key="item.title" class="pa-5 mb-4 d-flex align-start ga-4" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
              <v-avatar color="accent" size="44">
                <v-icon :icon="item.icon" color="deep-navy" />
              </v-avatar>
              <div>
                <h3 class="text-body-1 font-weight-bold mb-1" style="color: #0B1F3A">{{ item.title }}</h3>
                <p class="text-body-2 mb-0" style="color: #616161">{{ item.value }}</p>
              </div>
            </v-card>

            <div class="d-flex ga-3 mt-6">
              <v-btn color="secondary" size="large" prepend-icon="mdi-phone" :href="phoneHref" class="flex-grow-1">
                Call Now
              </v-btn>
              <v-btn color="success" size="large" prepend-icon="mdi-whatsapp" :href="`https://wa.me/${companyInfo.whatsapp}`" target="_blank" rel="noopener" class="flex-grow-1">
                WhatsApp
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="7">
            <v-card class="pa-6 pa-md-8" elevation="2" rounded="xl">
              <h2 class="text-h5 font-weight-bold mb-1" style="color: #0B1F3A">Send Us a Message</h2>
              <p class="text-body-2 mb-6" style="color: #616161">We typically respond within 24 hours.</p>
              <FormsContactForm source="contact-page" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="pb-16">
      <v-container>
        <v-card rounded="xl" elevation="1" class="overflow-hidden">
          <iframe
            :src="companyInfo.mapEmbedUrl"
            width="100%"
            height="380"
            style="border: 0; display: block"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="t('footer.locationMap')"
          />
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'

const { t } = useI18n()

const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`

const contactItems = [
  { title: 'Phone', value: companyInfo.phoneDisplay, icon: 'mdi-phone-outline' },
  { title: 'Email', value: companyInfo.email, icon: 'mdi-email-outline' },
  { title: 'Office Address', value: companyInfo.address, icon: 'mdi-map-marker-outline' },
  { title: 'Working Hours', value: companyInfo.workingHours, icon: 'mdi-clock-outline' },
]

useSeoMeta({
  title: 'Contact Us — Solar Installation Enquiry Nashik',
  description:
    'Contact S.P. Enterprises, Nashik Solar for a free rooftop solar site visit, custom quotation, or subsidy assistance. Call, WhatsApp, or send us a message.',
  ogTitle: 'Contact S.P. Enterprises, Nashik Solar',
  ogDescription: 'Get a free solar site survey and quotation in Nashik, Maharashtra.',
  keywords: 'contact solar company Nashik, solar quotation Nashik, solar installer contact Maharashtra',
})
</script>
