<template>
  <v-app-bar
    :elevation="0"
    height="72"
    class="app-header"
    :class="{ 'app-header--scrolled': scrolled }"
    color="white"
  >
    <v-container class="d-flex align-center py-0" fluid>
      <NuxtLink :to="localePath('/')" class="d-flex align-center text-decoration-none mr-4 flex-shrink-0">
        <img src="/assets/images/logo1.png" :alt="`${companyInfo.name} logo`" height="52" width="52" />
        <div class="ml-2 d-none d-sm-block brand-lines">
          <div class="brand-lines__primary">
            <span class="brand-lines__s">{{ t('company.brandS') }}</span>.<span class="brand-lines__p">{{ t('company.brandP') }}</span>.
            <span class="brand-lines__enterprises">{{ t('company.brandEnterprises') }}</span>
          </div>
          <div class="brand-lines__secondary">{{ t('company.brandLine2') }}</div>
        </div>
      </NuxtLink>

      <v-spacer />

      <nav class="d-none d-lg-flex align-center" :aria-label="t('nav.home')">
        <NuxtLink
          v-for="link in navBefore"
          :key="link.to"
          :to="localePath(link.to)"
          class="nav-link"
          :class="{ 'nav-link--exact': link.exact }"
        >
          {{ link.title }}
        </NuxtLink>

        <v-menu open-on-hover location="bottom start" :close-delay="120">
          <template #activator="{ props: menuProps, isActive }">
            <button
              v-bind="menuProps"
              type="button"
              class="nav-link nav-link--menu"
              :class="{ 'router-link-active': serviceRouteActive }"
              :aria-expanded="isActive"
            >
              {{ t('nav.services') }}
              <v-icon icon="mdi-chevron-down" size="18" class="nav-link__chevron" :class="{ 'nav-link__chevron--open': isActive }" />
            </button>
          </template>
          <v-list class="services-menu" density="comfortable" elevation="0">
            <v-list-item
              v-for="service in services"
              :key="service.slug"
              :to="localePath(`/${service.slug}`)"
              :title="service.title"
              class="services-menu__item"
            >
              <template #prepend>
                <span class="services-menu__icon">
                  <v-icon :icon="service.icon" size="20" />
                </span>
              </template>
            </v-list-item>
          </v-list>
        </v-menu>

        <NuxtLink
          v-for="link in navAfter"
          :key="link.to"
          :to="localePath(link.to)"
          class="nav-link"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>

      <v-spacer class="d-lg-none" />

      <div class="d-flex align-center flex-shrink-0">
        <v-btn
          icon="mdi-phone"
          variant="text"
          color="primary"
          class="d-none d-xl-inline-flex"
          :href="phoneHref"
          :aria-label="t('common.callNow')"
        />
        <v-btn
          icon="mdi-whatsapp"
          variant="text"
          color="secondary"
          class="d-none d-xl-inline-flex mr-1"
          :href="`https://wa.me/${companyInfo.whatsapp}`"
          target="_blank"
          rel="noopener"
          :aria-label="t('common.chatWhatsapp')"
        />

        <v-btn
          color="accent"
          variant="flat"
          class="d-none d-sm-inline-flex header-cta"
          :to="localePath('/contact')"
        >
          {{ t('common.getFreeQuote') }}
        </v-btn>

        <v-menu location="bottom end">
          <template #activator="{ props: menuProps }">
            <v-btn
              v-bind="menuProps"
              variant="text"
              prepend-icon="mdi-translate"
              append-icon="mdi-chevron-down"
              class="d-none d-lg-inline-flex ml-1 lang-btn"
            >
              {{ currentLocaleName }}
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item
              v-for="localeItem in availableLocales"
              :key="localeItem.code"
              :to="switchLocalePath(localeItem.code)"
              :title="localeItem.name"
              :active="localeItem.code === locale"
            />
          </v-list>
        </v-menu>

        <v-app-bar-nav-icon class="d-lg-none" :aria-label="t('nav.home')" @click="drawer = !drawer" />
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary width="310">
    <div class="pa-4 d-flex align-center">
      <img src="/assets/images/logo1.png" :alt="`${companyInfo.name} logo`" height="44" width="44" />
      <div class="ml-2 brand-lines">
        <div class="brand-lines__primary text-body-2">
          <span class="brand-lines__s">{{ t('company.brandS') }}</span>.<span class="brand-lines__p">{{ t('company.brandP') }}</span>.
          <span class="brand-lines__enterprises">{{ t('company.brandEnterprises') }}</span>
        </div>
        <div class="brand-lines__secondary text-caption">{{ t('company.brandLine2') }}</div>
      </div>
    </div>
    <v-divider />
    <v-list nav>
      <v-list-item
        v-for="link in navBefore"
        :key="link.to"
        :to="localePath(link.to)"
        :title="link.title"
        @click="drawer = false"
      />
      <v-list-group value="services">
        <template #activator="{ props: groupProps }">
          <v-list-item v-bind="groupProps" :title="t('nav.services')" />
        </template>
        <v-list-item
          v-for="service in services"
          :key="service.slug"
          :to="localePath(`/${service.slug}`)"
          :title="service.title"
          :prepend-icon="service.icon"
          @click="drawer = false"
        />
      </v-list-group>
      <v-list-item
        v-for="link in navAfter"
        :key="link.to"
        :to="localePath(link.to)"
        :title="link.title"
        @click="drawer = false"
      />
    </v-list>
    <v-divider class="my-2" />
    <div class="pa-4 d-flex flex-column ga-3">
      <v-btn color="accent" variant="flat" block :to="localePath('/contact')" @click="drawer = false">
        {{ t('common.getFreeQuote') }}
      </v-btn>
      <v-btn color="primary" variant="outlined" prepend-icon="mdi-phone" block :href="phoneHref">
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
const route = useRoute()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { mainNavLinks, services } = useLocalizedContent()

// Home + About, then the Services dropdown, then the remaining links.
const navBefore = computed(() => mainNavLinks.value.slice(0, 2))
const navAfter = computed(() => mainNavLinks.value.slice(2))

const serviceRouteActive = computed(() =>
  services.value.some((service) => route.path.includes(`/${service.slug}`))
)

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
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.app-header {
  border-bottom: 1px solid var(--border-soft);
  transition: box-shadow 0.25s ease;

  &--scrolled {
    box-shadow: var(--shadow-md) !important;
  }
}

.brand-lines {
  line-height: 1.15;

  &__primary {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-navy); // separators (the dots) between the letters
  }

  &__s {
    color: var(--color-blue);
  }

  &__p {
    color: var(--color-green);
  }

  &__enterprises {
    color: var(--color-orange);
  }

  &__secondary {
    color: var(--color-green);
    font-weight: 600;
    font-size: 0.72rem;
    letter-spacing: 0.04em;
  }
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin: 0 8px;
  padding: 25px 2px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text-body);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 500;
  line-height: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16px;
    height: 3px;
    border-radius: 2px;
    background: transparent;
    transition: background 0.2s ease;
  }

  &:hover {
    color: var(--color-navy);
  }

  // Prefix-matched active state for regular links, exact-only for home.
  &:not(.nav-link--exact).router-link-active,
  &.router-link-exact-active {
    color: var(--color-navy);
    font-weight: 700;

    &::after {
      background: var(--color-amber);
    }
  }
}

.nav-link__chevron {
  transition: transform 0.2s ease;

  &--open {
    transform: rotate(180deg);
  }
}

.services-menu {
  border-radius: var(--radius-lg) !important;
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-lg) !important;
  padding: 8px;
  margin-top: 6px;
  min-width: 280px;
}

.services-menu__item {
  border-radius: var(--radius-md) !important;
}

.services-menu__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 10px;
  background: var(--surface-alt-strong);
  color: var(--color-navy);
}

.header-cta {
  font-weight: 700;
}

.lang-btn {
  color: var(--text-muted);
}

@media (prefers-reduced-motion: reduce) {
  .nav-link::after,
  .nav-link__chevron,
  .app-header {
    transition: none;
  }
}
</style>
