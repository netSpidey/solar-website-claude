<template>
  <section class="pm-band">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="8" class="pm-band__content">
          <CommonRevealOnScroll>
            <CommonSchemeBadge class="mb-6" />
            <blockquote class="pm-band__quote">
              &ldquo;{{ t('subsidy.pmQuote') }}&rdquo;
            </blockquote>
            <div class="mt-5">
              <div class="pm-band__name">{{ t('subsidy.pmName') }}</div>
              <div class="pm-band__role">{{ t('subsidy.pmRole') }}</div>
            </div>
          </CommonRevealOnScroll>
        </v-col>
        <v-col cols="12" md="4" class="pm-band__photo-col">
          <CommonRevealOnScroll :delay="120" class="pm-band__photo-reveal">
            <div class="pm-band__photo-wrap">
              <!-- Official portrait as published on pmsuryaghar.gov.in -->
              <img
                src="/assets/images/govt/pm-narendra-modi.webp"
                :alt="`${t('subsidy.pmName')} — ${t('subsidy.pmRole')}`"
                class="pm-band__photo"
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
const { t } = useI18n()
</script>

<style scoped lang="scss">
.pm-band {
  background: var(--surface-alt);
  border-bottom: 1px solid var(--border-soft);
  overflow: hidden;

  &__content {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  &__quote {
    margin: 0;
    padding-left: 20px;
    border-left: 3px solid var(--color-amber);
    font-size: 1.02rem;
    line-height: 1.75;
    color: var(--text-body);
    max-width: 640px;
  }

  &__name {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-navy);
  }

  &__role {
    font-size: 0.85rem;
    color: var(--text-muted);
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

    // Soft halo behind the portrait so the transparent PNG sits on the band nicely.
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
  .pm-band__content {
    padding-bottom: 8px;
  }
}
</style>
