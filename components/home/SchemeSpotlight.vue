<template>
  <section class="scheme-spotlight">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="8" class="scheme-spotlight__content">
          <CommonRevealOnScroll>
            <CommonSchemeBadge class="mb-6" />
            <h2 class="scheme-spotlight__title">{{ t('subsidy.registeredBadge') }}</h2>
            <p class="scheme-spotlight__desc mt-3">{{ t('sections.schemeSpotlightDesc') }}</p>
            <ul class="scheme-spotlight__stats mt-5">
              <li v-for="stat in stats" :key="stat" class="scheme-spotlight__stat">
                <v-icon icon="mdi-check-circle" color="secondary" size="18" />
                <span>{{ stat }}</span>
              </li>
            </ul>
            <div class="d-flex flex-wrap ga-3 mt-7">
              <v-btn color="secondary" size="large" :to="localePath('/solar-subsidy')" prepend-icon="mdi-cash-multiple">
                {{ t('sections.deadlineCta') }}
              </v-btn>
              <v-btn
                variant="outlined"
                color="primary"
                size="large"
                href="https://pmsuryaghar.gov.in"
                target="_blank"
                rel="noopener"
                append-icon="mdi-open-in-new"
              >
                {{ t('sections.officialPortal') }}
              </v-btn>
            </div>
          </CommonRevealOnScroll>
        </v-col>
        <v-col cols="12" md="4" class="scheme-spotlight__photo-col">
          <CommonRevealOnScroll :delay="120" class="scheme-spotlight__photo-reveal">
            <div class="scheme-spotlight__photo-wrap">
              <!-- Official portrait as published on pmsuryaghar.gov.in -->
              <img
                src="/assets/images/govt/pm-narendra-modi.webp"
                :alt="`${t('subsidy.pmName')} — ${t('subsidy.pmRole')}`"
                class="scheme-spotlight__photo"
                loading="lazy"
              />
            </div>
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()
const localePath = useLocalePath()

const stats = computed(() => tm('sections.schemeSpotlightStats') as string[])
</script>

<style scoped lang="scss">
.scheme-spotlight {
  position: relative;
  background: var(--surface-alt);
  border-bottom: 1px solid var(--border-soft);
  overflow: hidden;

  // Subtle tricolor keyline — a nod to the national scheme without imitating government chrome.
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff9933 0%, #ff9933 33%, #ffffff 33%, #ffffff 67%, #138808 67%, #138808 100%);
  }

  &__content {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: clamp(1.4rem, 2.6vw, 1.9rem);
    font-weight: 700;
    line-height: 1.25;
    color: var(--color-navy);
    max-width: 620px;
  }

  &__desc {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-body);
    max-width: 600px;
    margin-bottom: 0;
  }

  &__stats {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__stat {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 15px;
    border-radius: var(--radius-pill);
    background: var(--surface-page);
    border: 1px solid var(--border-soft);
    color: var(--text-strong);
    font-size: 0.88rem;
    font-weight: 600;
  }

  &__photo-col {
    align-self: flex-end;
    padding-bottom: 0;
  }

  &__photo-reveal {
    display: block;
  }

  &__photo-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    // Soft halo behind the portrait so the transparent image sits on the band nicely.
    &::before {
      content: '';
      position: absolute;
      bottom: -90px;
      left: 50%;
      transform: translateX(-50%);
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 193, 7, 0.22) 0%, rgba(255, 193, 7, 0) 70%);
    }
  }

  &__photo {
    position: relative;
    display: block;
    width: min(280px, 70vw);
    height: auto;
  }
}

@media (max-width: 959px) {
  .scheme-spotlight__content {
    padding-bottom: 8px;
  }
}
</style>
