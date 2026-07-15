import { fileURLToPath } from 'node:url'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-01',
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
    public: {
      // TODO(client): replace with the real Web3Forms access key. Creating it
      // requires access to the sachinpawar461883@gmail.com inbox (Web3Forms
      // emails the key to the recipient address on signup at web3forms.com).
      // The key is public-by-design (client-side safe), so hardcoding is fine.
      web3formsAccessKey:
        process.env.NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '48b25d48-7bf4-4f81-8841-d36103140b27',
    },
  },

  app: {
    baseURL,
    buildAssetsDir: '_nuxt/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s | S.P. Enterprises, Nashik Solar',
      htmlAttrs: { lang: 'mr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'author',
          content: 'S.P. Enterprises, Nashik Solar',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}assets/favicon.svg` },
      ],
    },
  },

  css: [
    // Self-hosted fonts (Latin + Devanagari subsets, unicode-range split)
    '@fontsource/poppins/600.css',
    '@fontsource/poppins/700.css',
    '@fontsource/mukta/400.css',
    '@fontsource/mukta/500.css',
    '@fontsource/mukta/600.css',
    '@fontsource/mukta/700.css',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/styles/main.scss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;',
        },
      },
    },
  },

  modules: [
    '@nuxtjs/i18n',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error - vuetify plugin type mismatch with nuxt vite config
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  i18n: {
    defaultLocale: 'mr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'mr', name: 'मराठी', language: 'mr-IN' },
      { code: 'hi', name: 'हिंदी', language: 'hi-IN' },
      { code: 'en', name: 'English', language: 'en-IN' },
    ],
    vueI18n: './i18n.config.ts',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  typescript: {
    strict: true,
  },

  alias: {
    '@': fileURLToPath(new URL('.', import.meta.url)),
  },
})
