import { messages } from '../locales/messages'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'mr',
  fallbackLocale: 'en',
  messages,
}))
