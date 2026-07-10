<template>
  <section class="final-cta bg-navy-gradient">
    <v-container class="final-cta__container py-14 py-md-20 text-center">
      <h2 class="text-h4 text-md-h3 font-weight-bold text-white mx-auto" style="max-width: 640px">
        {{ t('sections.finalTitle') }}
      </h2>
      <p class="final-cta__subtitle mt-4 mx-auto">
        {{ t('sections.finalSubtitle') }}
      </p>

      <div class="d-flex flex-wrap justify-center ga-3 mt-8">
        <v-btn
          color="accent"
          size="x-large"
          variant="flat"
          prepend-icon="mdi-calculator-variant-outline"
          :to="localePath('/contact')"
        >
          {{ t('common.getFreeQuote') }}
        </v-btn>
        <v-btn
          color="success"
          variant="flat"
          size="x-large"
          prepend-icon="mdi-whatsapp"
          :href="`https://wa.me/${companyInfo.whatsapp}`"
          target="_blank"
          rel="noopener"
        >
          {{ t('common.chatWhatsapp') }}
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
.final-cta {
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -160px;
    right: -120px;
    width: 460px;
    height: 460px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 193, 7, 0.16), transparent 65%);
    pointer-events: none;
  }

  &__container {
    position: relative;
    z-index: 1;
  }

  &__subtitle {
    color: var(--text-on-dark-muted);
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 520px;
  }
}
</style>
