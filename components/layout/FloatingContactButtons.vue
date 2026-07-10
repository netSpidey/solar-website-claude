<template>
  <!-- Desktop / tablet: floating WhatsApp button -->
  <v-btn
    :href="`https://wa.me/${companyInfo.whatsapp}`"
    target="_blank"
    rel="noopener"
    icon="mdi-whatsapp"
    color="success"
    size="56"
    class="floating-whatsapp d-none d-md-inline-flex"
    elevation="6"
    :aria-label="t('common.chatWhatsapp')"
  />

  <!-- Mobile: sticky bottom bar with Call + WhatsApp -->
  <div class="mobile-cta-bar d-md-none">
    <v-btn
      :href="phoneHref"
      color="primary"
      variant="flat"
      rounded="0"
      prepend-icon="mdi-phone"
      class="mobile-cta-bar__btn"
    >
      {{ t('common.callNow') }}
    </v-btn>
    <v-btn
      :href="`https://wa.me/${companyInfo.whatsapp}`"
      target="_blank"
      rel="noopener"
      color="success"
      variant="flat"
      rounded="0"
      prepend-icon="mdi-whatsapp"
      class="mobile-cta-bar__btn"
    >
      {{ t('common.whatsapp') }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'

const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`
const { t } = useI18n()
</script>

<style scoped lang="scss">
.floating-whatsapp {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  animation: pulse-whatsapp 2.4s ease-in-out infinite;
}

@keyframes pulse-whatsapp {
  0% {
    box-shadow: 0 0 0 0 rgba(67, 160, 71, 0.5);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(67, 160, 71, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(67, 160, 71, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-whatsapp {
    animation: none;
  }
}

.mobile-cta-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  background: var(--surface-page);
  box-shadow: 0 -4px 16px rgba(11, 31, 58, 0.14);
  padding-bottom: env(safe-area-inset-bottom);

  &__btn {
    flex: 1 1 50%;
    height: 54px !important;
    font-size: 0.95rem;
  }
}
</style>
