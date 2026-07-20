<template>
  <section class="hero" :style="heroStyle">
    <v-container class="py-10 py-md-16 hero__container">
      <v-row align="center">
        <v-col cols="12" md="7" class="pr-md-8">
          <div class="hero__badge">
            <v-icon icon="mdi-check-decagram" size="18" />
            <span>{{ t('hero.badge') }}</span>
          </div>

          <h1 class="hero__title mt-5">
            {{ t('hero.titlePrefix') }}
            <span class="text-gradient-solar">{{ t('hero.titleHighlight') }}</span>
          </h1>

          <ul class="hero__subtitle mt-5">
            <li v-for="(point, index) in subtitlePoints" :key="index">{{ point }}</li>
          </ul>

          <div class="d-flex flex-wrap ga-3 mt-8">
            <v-btn
              color="accent"
              size="x-large"
              variant="flat"
              prepend-icon="mdi-calculator-variant-outline"
              to="#savings-calculator"
            >
              {{ t('hero.calculate') }}
            </v-btn>
            <v-btn
              color="white"
              variant="outlined"
              size="x-large"
              prepend-icon="mdi-phone-outline"
              :href="phoneHref"
            >
              {{ t('hero.expert') }}
            </v-btn>
          </div>

          <ul class="hero__trust mt-8">
            <li v-for="point in trustPoints" :key="point" class="hero__trust-chip">
              <v-icon icon="mdi-check-circle" color="secondary" size="18" />
              <span>{{ point }}</span>
            </li>
          </ul>
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
const subtitlePoints = computed(() => tm('hero.subtitle') as string[])
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-color: var(--color-navy); // paints before the photo loads

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 85% 15%, rgba(255, 193, 7, 0.18), transparent 45%);
    pointer-events: none;
  }
}

.hero__container {
  position: relative;
  z-index: 1;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: var(--color-amber);
  color: var(--color-navy);
  font-size: 0.85rem;
  font-weight: 700;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4.6vw, 3.4rem);
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.015em;
  color: var(--text-on-dark);
  max-width: 640px;
}

.hero__subtitle {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 560px;

  li {
    position: relative;
    padding-left: 26px;
    color: var(--text-on-dark-muted);
    font-size: 1.08rem;
    line-height: 1.6;

    & + li {
      margin-top: 8px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-amber);
    }
  }
}

.hero__trust {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero__trust-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 15px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: var(--text-on-dark);
  font-size: 0.88rem;
  font-weight: 600;
}
</style>
