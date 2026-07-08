<template>
  <div>
    <CommonPageHero :title="service?.title ?? ''" :subtitle="service?.shortDescription" />

    <section class="section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img :src="service?.image" :alt="service?.title" rounded="xl" cover height="400" />
          </v-col>
          <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
            <p class="text-body-1" style="color: #616161">{{ service?.description }}</p>
            <v-list class="mt-2 bg-transparent">
              <v-list-item v-for="feature in service?.features" :key="feature" class="px-0">
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="secondary" class="mr-2" />
                </template>
                <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-btn color="accent" size="large" class="text-deep-navy mt-4" :to="localePath('/contact')" prepend-icon="mdi-sprinkler-variant">
              {{ t('pages.autoCleaning.cta') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section-py" style="background: #F8F9FA">
      <v-container>
        <v-row>
          <v-col v-for="(benefit, index) in benefits" :key="index" cols="12" sm="6" md="3">
            <v-card class="pa-6 text-center h-100" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
              <v-icon :icon="benefit.icon" color="secondary" size="30" class="mb-3" />
              <p class="text-subtitle-1 font-weight-bold mb-0" style="color: #0B1F3A">{{ benefit.label }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { getServiceBySlug } = useLocalizedContent()

const service = getServiceBySlug('auto-cleaning-system')

const benefitIcons = ['mdi-chart-line', 'mdi-account-hard-hat-outline', 'mdi-water-outline', 'mdi-solar-panel']
const benefits = computed(() =>
  (service.value?.features ?? []).slice(1, 5).map((label, index) => ({
    label,
    icon: benefitIcons[index],
  }))
)

useSeoMeta({
  title: 'Solar Panel Auto Cleaning System in Nashik',
  description:
    'Automatic solar panel cleaning systems in Nashik — improve generation by 5–20%, save water and labour, and keep panels dust-free year-round. Retrofit on existing plants.',
  ogTitle: 'Auto Cleaning System — Nashik Solar',
  ogDescription: 'Automatic panel cleaning for 5–20% more solar generation, with water and labour savings.',
  keywords: 'solar panel cleaning system Nashik, auto cleaning solar panels, solar panel cleaning Maharashtra',
})
</script>
