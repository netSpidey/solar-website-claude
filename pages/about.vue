<template>
  <div>
    <CommonPageHero
      title="About Suryoday Solar Nashik"
      subtitle="Helping homes and businesses across Nashik switch to clean, affordable solar energy since 2015."
    />

    <section class="section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img
              src="/assets/images/about/about-banner.jpg"
              alt="Suryoday Solar Nashik rooftop solar installation"
              rounded="xl"
              cover
              height="420"
            />
          </v-col>
          <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
            <v-chip color="accent" variant="flat" size="small" class="mb-3 font-weight-bold">Our Story</v-chip>
            <h2 class="text-h4 font-weight-bold" style="color: #0B1F3A">
              A Local Team, Committed to Nashik's Solar Future
            </h2>
            <p class="text-body-1 mt-4" style="color: #616161">
              Suryoday Solar Nashik was founded with a simple mission — make clean, reliable solar
              energy accessible to every home and business in the region. Over the years, we have
              installed more than 12 MW of solar capacity across residential, commercial, and
              industrial properties in and around Nashik.
            </p>
            <p class="text-body-1 mt-4" style="color: #616161">
              Our in-house team of certified engineers and technicians handles every stage of your
              solar journey — from the first consultation to installation, net metering, and
              long-term maintenance — so you never have to deal with multiple vendors.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading
          eyebrow="Our Values"
          title="What Drives Us Every Day"
          center
          max-width="600px"
        />
        <v-row class="mt-8">
          <v-col v-for="value in values" :key="value.title" cols="12" sm="6" md="3">
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
          eyebrow="Our Team"
          title="Certified Engineers, Local Expertise"
          subtitle="Every installation is handled by our in-house team — trained, certified, and based right here in Nashik."
          center
          max-width="600px"
        />
        <v-row class="mt-8 justify-center">
          <v-col v-for="member in team" :key="member.name" cols="12" sm="6" md="3">
            <v-card class="text-center pa-6" elevation="1" rounded="xl">
              <v-avatar size="88" class="mb-4">
                <v-img :src="member.avatar" :alt="member.name" />
              </v-avatar>
              <h3 class="text-subtitle-1 font-weight-bold" style="color: #0B1F3A">{{ member.name }}</h3>
              <p class="text-caption mb-0" style="color: #9e9e9e">{{ member.role }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
const values = [
  {
    title: 'Transparency',
    description: 'Clear pricing and honest recommendations — no hidden costs, ever.',
    icon: 'mdi-eye-check-outline',
  },
  {
    title: 'Quality',
    description: 'Only Tier-1 panels and inverters, installed to strict safety standards.',
    icon: 'mdi-medal-outline',
  },
  {
    title: 'Reliability',
    description: 'On-time installation and responsive after-sales support, always.',
    icon: 'mdi-shield-check-outline',
  },
  {
    title: 'Local Focus',
    description: "Deep understanding of Nashik's climate, tariffs, and subsidy processes.",
    icon: 'mdi-map-marker-radius-outline',
  },
]

const team = [
  { name: 'Anil Sharma', role: 'Founder & Chief Engineer', avatar: '/assets/images/testimonials/avatar-1.svg' },
  { name: 'Priya Rane', role: 'Head of Design & Engineering', avatar: '/assets/images/testimonials/avatar-2.svg' },
  { name: 'Vikram Salunke', role: 'Installation Lead', avatar: '/assets/images/testimonials/avatar-3.svg' },
  { name: 'Neha Bhosale', role: 'Customer Success Manager', avatar: '/assets/images/testimonials/avatar-5.svg' },
]

useSeoMeta({
  title: 'About Us — Solar Company in Nashik',
  description:
    "Learn about Suryoday Solar Nashik, a trusted local solar installation company with over 12 MW of installed capacity and 500+ satisfied customers across Nashik, Maharashtra.",
  ogTitle: 'About Suryoday Solar Nashik',
  ogDescription: "Nashik's trusted rooftop solar installation team since 2015.",
  keywords: 'about solar company Nashik, solar installer Nashik, solar EPC company Maharashtra',
})
</script>
