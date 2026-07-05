<template>
  <section class="hero" :style="heroStyle">
    <v-container class="py-10 py-md-16">
      <v-row align="center" class="ga-0">
        <v-col cols="12" md="7" class="pr-md-8">
          <v-chip color="accent" variant="flat" size="small" class="mb-4 font-weight-bold">
            {{ t('hero.badge') }}
          </v-chip>
          <h1 class="text-h3 text-md-h2 font-weight-bold text-white" style="line-height: 1.15">
            {{ t('hero.titlePrefix') }}
            <span class="text-gradient-solar">{{ t('hero.titleHighlight') }}</span>
          </h1>
          <p class="text-body-1 text-md-h6 font-weight-regular text-white opacity-80 mt-5" style="max-width: 560px">
            {{ t('hero.subtitle') }}
          </p>

          <div class="d-flex flex-wrap ga-3 mt-8">
            <v-btn color="accent" size="x-large" class="text-deep-navy" prepend-icon="mdi-calculator-variant-outline" to="#savings-calculator">
              {{ t('hero.calculate') }}
            </v-btn>
            <v-btn color="white" variant="outlined" size="x-large" prepend-icon="mdi-phone-outline" :href="phoneHref">
              {{ t('hero.expert') }}
            </v-btn>
          </div>

          <div class="d-flex flex-wrap ga-6 mt-10">
            <div v-for="point in trustPoints" :key="point" class="d-flex align-center ga-2">
              <v-icon icon="mdi-check-circle" color="secondary" size="20" />
              <span class="text-body-2 text-white opacity-90">{{ point }}</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="5" class="mt-10 mt-md-0">
          <HomeLeadForm />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'

const { t, tm } = useI18n()
const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`
const baseURL = useRuntimeConfig().app.baseURL
const heroStyle = {
  backgroundImage: `linear-gradient(120deg, rgba(11, 31, 58, 0.94) 0%, rgba(11, 31, 58, 0.88) 45%, rgba(11, 31, 58, 0.65) 100%), url('${baseURL}assets/images/hero/hero-solar-home.jpg')`,
}

const trustPoints = computed(() => tm('hero.trust') as string[])
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 85% 15%, rgba(255, 193, 7, 0.18), transparent 45%);
    pointer-events: none;
  }
}
</style>
