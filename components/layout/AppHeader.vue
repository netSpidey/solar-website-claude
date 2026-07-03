<template>
  <v-app-bar
    :elevation="scrolled ? 3 : 0"
    height="76"
    class="app-header"
    :class="{ 'app-header--scrolled': scrolled }"
    color="white"
  >
    <v-container class="d-flex align-center py-0" fluid>
      <NuxtLink to="/" class="d-flex align-center text-decoration-none mr-4">
        <img src="/assets/images/logo.svg" alt="Suryoday Solar Nashik logo" height="44" width="172" />
      </NuxtLink>

      <v-spacer />

      <nav class="d-none d-lg-flex align-center">
        <NuxtLink
          v-for="link in mainNav"
          :key="link.to"
          :to="link.to"
          class="nav-link text-body-2 font-weight-medium mx-2"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>

      <v-spacer class="d-lg-none" />

      <div class="d-none d-md-flex align-center ml-4">
        <v-btn
          color="secondary"
          variant="flat"
          prepend-icon="mdi-phone"
          :href="phoneHref"
          class="mr-2"
        >
          Call Now
        </v-btn>
        <v-btn
          color="success"
          variant="flat"
          prepend-icon="mdi-whatsapp"
          :href="`https://wa.me/${companyInfo.whatsapp}`"
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </v-btn>
      </div>

      <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer" />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary width="300">
    <div class="pa-4">
      <img src="/assets/images/logo.svg" alt="Suryoday Solar Nashik logo" height="40" />
    </div>
    <v-divider />
    <v-list nav>
      <v-list-item
        v-for="link in mainNav"
        :key="link.to"
        :to="link.to"
        :title="link.title"
        @click="drawer = false"
      />
    </v-list>
    <v-divider class="my-2" />
    <div class="pa-4 d-flex flex-column ga-3">
      <v-btn color="secondary" variant="flat" prepend-icon="mdi-phone" block :href="phoneHref">
        Call Now
      </v-btn>
      <v-btn color="success" variant="flat" prepend-icon="mdi-whatsapp" block :href="`https://wa.me/${companyInfo.whatsapp}`" target="_blank" rel="noopener">
        WhatsApp
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { mainNav, companyInfo } from '~/data/nav'

const drawer = ref(false)
const scrolled = ref(false)
const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`

function handleScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.app-header {
  transition: box-shadow 0.25s ease;
  border-bottom: 1px solid rgba(11, 31, 58, 0.06);
}

.nav-link {
  color: #212121;
  text-decoration: none;
  padding: 8px 4px;
  position: relative;

  &:hover {
    color: #0B1F3A;
  }

  &.router-link-active {
    color: #0B1F3A;
    font-weight: 700;
  }
}
</style>
