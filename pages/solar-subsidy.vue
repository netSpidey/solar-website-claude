<template>
  <div>
    <CommonPageHero :title="t('subsidy.heroTitle')" :subtitle="t('subsidy.heroSubtitle')" />

    <HomeSubsidyDeadlineBanner />

    <section class="section-py">
      <v-container>
        <v-row>
          <v-col cols="12" md="7">
            <CommonSectionHeading
              :eyebrow="t('subsidy.eyebrow')"
              :title="t('subsidy.title')"
              :subtitle="t('subsidy.subtitle')"
            />

            <div class="d-flex flex-wrap ga-2 mt-4">
              <v-chip color="secondary" variant="tonal" prepend-icon="mdi-check-decagram">
                {{ t('subsidy.registeredBadge') }}
              </v-chip>
              <v-chip color="primary" variant="tonal" prepend-icon="mdi-certificate-outline">
                {{ t('subsidy.channelPartner') }}
              </v-chip>
            </div>

            <v-row class="mt-6">
              <v-col v-for="slab in subsidySlabs" :key="slab.subsidy" cols="12" sm="4">
                <v-card class="pa-5 text-center h-100" elevation="1" rounded="xl">
                  <div class="text-subtitle-2 font-weight-medium mb-1" style="color: #9e9e9e">{{ slab.capacity }}</div>
                  <div class="text-h5 font-weight-bold" style="color: #43A047">{{ slab.subsidy }}</div>
                </v-card>
              </v-col>
            </v-row>

            <p class="text-caption mt-4" style="color: #9e9e9e">
              {{ t('subsidy.disclaimer') }}
            </p>
          </v-col>

          <v-col cols="12" md="5" class="mt-8 mt-md-0">
            <v-card class="pa-6" elevation="2" rounded="xl">
              <h3 class="text-subtitle-1 font-weight-bold mb-4" style="color: #0B1F3A">{{ t('subsidy.eligibilityTitle') }}</h3>
              <v-list class="bg-transparent">
                <v-list-item v-for="point in eligibility" :key="point" class="px-0">
                  <template #prepend>
                    <v-icon icon="mdi-check-circle" color="secondary" class="mr-2" />
                  </template>
                  <v-list-item-title class="text-body-2">{{ point }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>

            <v-card class="pa-6 mt-4" elevation="2" rounded="xl" style="border-left: 4px solid #43A047">
              <div class="d-flex align-start ga-3">
                <v-icon icon="mdi-bank-outline" color="secondary" size="30" class="mt-1" />
                <div>
                  <h3 class="text-subtitle-1 font-weight-bold mb-1" style="color: #0B1F3A">{{ t('subsidy.loanTitle') }}</h3>
                  <p class="text-body-2 mb-0" style="color: #616161">{{ t('subsidy.loanDesc') }}</p>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <CommonSectionHeading
          :eyebrow="t('subsidy.processEyebrow')"
          :title="t('subsidy.processTitle')"
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
              :eyebrow="t('subsidy.kusumEyebrow')"
              :title="t('subsidy.kusumTitle')"
              :subtitle="t('subsidy.kusumSubtitle')"
              center
            />
            <div class="text-center mt-6">
              <v-btn color="secondary" size="large" :to="localePath('/solar-water-pump')" prepend-icon="mdi-water-pump">
                {{ t('subsidy.kusumCta') }}
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
const { t, tm } = useI18n()
const localePath = useLocalePath()

const subsidyAmounts = ['₹30,000', '₹60,000', '₹78,000']
const subsidySlabs = computed(() => {
  const capacities = tm('subsidy.slabCapacities') as string[]
  return subsidyAmounts.map((subsidy, index) => ({
    capacity: capacities[index] || '',
    subsidy,
  }))
})

const eligibility = computed(() => tm('subsidy.eligibility') as string[])

const subsidySteps = computed(() => {
  const titles = tm('subsidy.stepTitles') as string[]
  const descriptions = tm('subsidy.stepDescriptions') as string[]
  return titles.map((title, index) => ({
    title,
    description: descriptions[index] || '',
  }))
})

useSeoMeta({
  title: 'Solar Subsidy Assistance — PM Surya Ghar Yojana Nashik',
  description:
    'Get up to ₹78,000 solar subsidy in Nashik under the PM Surya Ghar Muft Bijli Yojana before it closes on 31 March 2027. S.P. Enterprises handles registration, documentation, and disbursement end-to-end.',
  ogTitle: 'Solar Subsidy Assistance — Nashik',
  ogDescription: 'Complete subsidy application support for rooftop solar in Nashik, Maharashtra — register before 31 March 2027.',
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
