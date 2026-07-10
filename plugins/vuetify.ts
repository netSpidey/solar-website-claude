import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: 'solarLight',
      themes: {
        solarLight: {
          dark: false,
          colors: {
            primary: '#0B1F3A',
            secondary: '#43A047',
            accent: '#FFC107',
            background: '#FFFFFF',
            surface: '#FFFFFF',
            'surface-alt': '#F3F7FC',
            'on-primary': '#FFFFFF',
            'on-secondary': '#FFFFFF',
            'on-accent': '#0B1F3A',
            error: '#D32F2F',
            success: '#43A047',
            warning: '#FFC107',
            info: '#0B1F3A',
            'solar-yellow': '#FFC107',
            'deep-navy': '#0B1F3A',
            'solar-green': '#43A047',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        rounded: 'pill',
        style: 'text-transform: none; letter-spacing: normal; font-weight: 600;',
      },
      // Card radius comes from main.scss (.v-card → var(--radius-xl)) so it
      // can be themed via tokens.scss.
      VCard: {
        flat: false,
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
