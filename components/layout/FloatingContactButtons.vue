<template>
  <div class="floating-buttons">
    <v-btn
      :href="`https://wa.me/${companyInfo.whatsapp}`"
      target="_blank"
      rel="noopener"
      icon="mdi-whatsapp"
      color="success"
      size="56"
      class="floating-btn floating-btn--whatsapp"
      elevation="6"
      aria-label="Chat on WhatsApp"
    />
    <v-btn
      :href="phoneHref"
      icon="mdi-phone"
      color="secondary"
      size="48"
      class="floating-btn floating-btn--call d-md-none"
      elevation="6"
      aria-label="Call us now"
    />
  </div>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'

const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`
</script>

<style scoped lang="scss">
.floating-buttons {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.floating-btn--whatsapp {
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
</style>
