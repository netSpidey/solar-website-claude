import { fileURLToPath } from 'node:url'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-01',
  devtools: { enabled: true },
  ssr: true,

  app: {
    baseURL,
    buildAssetsDir: '_nuxt/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s | Suryoday Solar Nashik',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'author',
          content: 'Suryoday Solar Nashik',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}assets/favicon.svg` },
      ],
    },
  },

  css: [
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
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error - vuetify plugin type mismatch with nuxt vite config
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  typescript: {
    strict: true,
  },

  alias: {
    '@': fileURLToPath(new URL('.', import.meta.url)),
  },
})
