<template>
  <div>
    <CommonPageHero
      title="Solar Subsidy Assistance in Nashik"
      subtitle="We handle the complete government subsidy application so you get the maximum benefit with zero paperwork hassle."
    />

    <section class="section-py">
      <v-container>
        <v-row>
          <v-col cols="12" md="7">
            <CommonSectionHeading
              eyebrow="PM Surya Ghar Muft Bijli Yojana"
              title="Get Up to ₹78,000 in Central Subsidy"
              subtitle="Residential rooftop solar systems up to 3 kW are eligible for subsidy under the national PM Surya Ghar scheme."
            />

            <v-row class="mt-6">
              <v-col v-for="slab in subsidySlabs" :key="slab.capacity" cols="12" sm="4">
                <v-card class="pa-5 text-center h-100" elevation="1" rounded="xl">
                  <div class="text-subtitle-2 font-weight-medium mb-1" style="color: #9e9e9e">{{ slab.capacity }}</div>
                  <div class="text-h5 font-weight-bold" style="color: #43A047">{{ slab.subsidy }}</div>
                </v-card>
              </v-col>
            </v-row>

            <p class="text-caption mt-4" style="color: #9e9e9e">
              Subsidy amounts are indicative and subject to the latest government notification at the time
              of application. Our team confirms exact figures during your free consultation.
            </p>
          </v-col>

          <v-col cols="12" md="5" class="mt-8 mt-md-0">
            <v-card class="pa-6" elevation="2" rounded="xl">
              <h3 class="text-subtitle-1 font-weight-bold mb-4" style="color: #0B1F3A">Eligibility Checklist</h3>
              <v-list class="bg-transparent">
                <v-list-item v-for="point in eligibility" :key="point" class="px-0">
                  <template #prepend>
                    <v-icon icon="mdi-check-circle" color="secondary" class="mr-2" />
                  </template>
                  <v-list-item-title class="text-body-2">{{ point }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading
          eyebrow="Application Process"
          title="How We Handle Your Subsidy Application"
          center
          max-width="620px"
        />
        <v-row class="mt-8">
          <v-col v-for="(step, i) in subsidySteps" :key="step.title" cols="12" sm="6" md="3">
            <div class="text-center">
              <div class="subsidy-step-circle mx-auto mb-3">{{ i + 1 }}</div>
              <h3 class="text-body-1 font-weight-bold mb-1" style="color: #0B1F3A">{{ step.title }}</h3>
              <p class="text-caption mb-0" style="color: #616161">{{ step.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <CommonSectionHeading
              eyebrow="PM-KUSUM Scheme"
              title="Subsidy for Solar Water Pumps"
              subtitle="Farmers across Nashik district can avail subsidy on solar-powered irrigation pumps under the PM-KUSUM scheme."
              center
            />
            <div class="text-center mt-6">
              <v-btn color="secondary" size="large" :to="localePath('/solar-water-pump')" prepend-icon="mdi-water-pump">
                Learn About Solar Water Pumps
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFAQSection />
    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const subsidySlabs = [
  { capacity: 'Up to 1 kW', subsidy: '₹30,000' },
  { capacity: '2 kW', subsidy: '₹60,000' },
  { capacity: '3 kW & above', subsidy: '₹78,000' },
]

const eligibility = [
  'Property owner with a valid electricity connection',
  'Roof area with good sunlight exposure and no major shading',
  'Willingness to install a system up to 3 kW for maximum central subsidy',
  'Valid identity and property ownership documents',
]

const subsidySteps = [
  { title: 'Registration', description: 'We register your application on the national solar portal.' },
  { title: 'Documentation', description: 'Submission of ID, address proof, and electricity bill.' },
  { title: 'Installation & Inspection', description: 'System installation followed by DISCOM inspection.' },
  { title: 'Disbursement', description: 'Subsidy credited directly to your bank account.' },
]

useSeoMeta({
  title: 'Solar Subsidy Assistance — PM Surya Ghar Yojana Nashik',
  description:
    'Get government solar subsidy assistance in Nashik under the PM Surya Ghar Muft Bijli Yojana. We handle registration, documentation, and disbursement end-to-end.',
  ogTitle: 'Solar Subsidy Assistance — Nashik',
  ogDescription: 'Complete subsidy application support for rooftop solar in Nashik, Maharashtra.',
  keywords: 'solar subsidy Nashik, PM Surya Ghar Yojana Maharashtra, solar subsidy Maharashtra, rooftop solar subsidy application',
})
</script>

<style scoped lang="scss">
.subsidy-step-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0B1F3A;
  color: #FFC107;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
