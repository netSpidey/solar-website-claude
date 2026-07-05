<template>
  <v-app-bar
    :elevation="scrolled ? 3 : 0"
    height="76"
    class="app-header"
    :class="{ 'app-header--scrolled': scrolled }"
    color="white"
  >
    <v-container class="d-flex align-center py-0" fluid>
      <NuxtLink :to="localePath('/')" class="d-flex align-center text-decoration-none mr-4">
        <img src="/assets/images/logo.svg" :alt="`${companyInfo.name} logo`" height="44" width="172" />
      </NuxtLink>

      <v-spacer />

      <nav class="d-none d-lg-flex align-center">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="localePath(link.to)"
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
          {{ t('common.callNow') }}
        </v-btn>
        <v-btn
          color="success"
          variant="flat"
          prepend-icon="mdi-whatsapp"
          :href="`https://wa.me/${companyInfo.whatsapp}`"
          target="_blank"
          rel="noopener"
        >
          {{ t('common.whatsapp') }}
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" append-icon="mdi-chevron-down" class="ml-1">
              {{ currentLocaleName }}
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item
              v-for="localeItem in availableLocales"
              :key="localeItem.code"
              :to="switchLocalePath(localeItem.code)"
              :title="localeItem.name"
            />
          </v-list>
        </v-menu>
      </div>

      <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer" />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary width="300">
    <div class="pa-4">
      <img src="/assets/images/logo.svg" :alt="`${companyInfo.name} logo`" height="40" />
    </div>
    <v-divider />
    <v-list nav>
      <v-list-item
        v-for="link in navLinks"
        :key="link.to"
        :to="localePath(link.to)"
        :title="link.title"
        @click="drawer = false"
      />
    </v-list>
    <v-divider class="my-2" />
    <div class="pa-4 d-flex flex-column ga-3">
      <v-btn color="secondary" variant="flat" prepend-icon="mdi-phone" block :href="phoneHref">
        {{ t('common.callNow') }}
      </v-btn>
      <v-btn color="success" variant="flat" prepend-icon="mdi-whatsapp" block :href="`https://wa.me/${companyInfo.whatsapp}`" target="_blank" rel="noopener">
        {{ t('common.whatsapp') }}
      </v-btn>
      <v-select
        v-model="selectedLocale"
        :items="availableLocales"
        item-title="name"
        item-value="code"
        density="compact"
        variant="outlined"
        hide-details
        @update:model-value="changeLocale"
      />
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { companyInfo } from '~/data/nav'

const drawer = ref(false)
const scrolled = ref(false)
const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, '')}`
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { navLinks } = useLocalizedContent()

const availableLocales = computed(() =>
  locales.value.map((item) => (typeof item === 'string' ? { code: item, name: item } : item))
)
const currentLocaleName = computed(() =>
  availableLocales.value.find((item) => item.code === locale.value)?.name || locale.value
)
const selectedLocale = computed({
  get: () => locale.value,
  set: () => {},
})

async function changeLocale(code: string) {
  await navigateTo(switchLocalePath(code))
  drawer.value = false
}

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
