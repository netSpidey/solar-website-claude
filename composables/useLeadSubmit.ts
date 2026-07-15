import { companyInfo } from '~/data/nav'

export interface LeadPayload {
  name: string
  phone: string
  email?: string
  monthlyBill?: string
  propertyType?: string
  service?: string
  message?: string
  source: string
  botcheck?: boolean
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const PLACEHOLDER_ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY'

// Fixed English labels so every incoming lead reads the same for the business
// owner regardless of the visitor's locale; visitors can edit before sending.
function buildWhatsAppText(p: LeadPayload): string {
  const lines = [
    'Hello! I just sent an enquiry from the website.',
    `Name: ${p.name}`,
    `Phone: ${p.phone}`,
    p.monthlyBill ? `Monthly bill: Rs. ${p.monthlyBill}` : '',
    p.propertyType ? `Property: ${p.propertyType}` : '',
    p.service ? `Service: ${p.service}` : '',
    p.message ? `Message: ${p.message}` : '',
  ]
  return lines.filter(Boolean).join('\n')
}

export function useLeadSubmit() {
  const config = useRuntimeConfig()
  const submitting = ref(false)
  const submitted = ref(false)
  const error = ref(false)
  const lastPayload = ref<LeadPayload | null>(null)

  // Prefilled handoff link shown after submit (and as the failure fallback).
  // Built from the snapshot, not the form fields — ContactForm clears its
  // fields after a successful submit.
  const whatsappUrl = computed(() =>
    lastPayload.value
      ? `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(buildWhatsAppText(lastPayload.value))}`
      : `https://wa.me/${companyInfo.whatsapp}`
  )

  async function submitLead(payload: LeadPayload) {
    submitting.value = true
    error.value = false
    lastPayload.value = payload

    try {
      // Honeypot tripped: pretend success without spending quota.
      if (payload.botcheck) {
        submitted.value = true
        return
      }

      const accessKey = config.public.web3formsAccessKey

      // No real key yet: simulate success in dev so the flow stays testable.
      // In production the request below fails instead, surfacing the error
      // state with its WhatsApp fallback so leads are never silently dropped.
      if (accessKey === PLACEHOLDER_ACCESS_KEY && import.meta.dev) {
        // eslint-disable-next-line no-console
        console.warn('[useLeadSubmit] Web3Forms key not configured — simulating success', payload)
        submitted.value = true
        return
      }

      const res = await $fetch<{ success: boolean; message: string }>(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: {
          access_key: accessKey,
          subject: `New solar lead — ${payload.name} (${payload.source})`,
          from_name: 'S.P. Enterprises Website',
          botcheck: false,
          name: payload.name,
          phone: payload.phone,
          email: payload.email || undefined,
          monthly_bill: payload.monthlyBill || undefined,
          property_type: payload.propertyType || undefined,
          service: payload.service || undefined,
          message: payload.message || undefined,
          source: payload.source,
          page: import.meta.client ? window.location.href : undefined,
        },
        timeout: 15000,
        retry: 0,
      })

      if (!res.success) throw new Error(res.message)
      submitted.value = true
    } catch (e) {
      if (import.meta.dev) {
        // eslint-disable-next-line no-console
        console.error('[useLeadSubmit] Lead submission failed', e)
      }
      error.value = true
    } finally {
      submitting.value = false
    }
  }

  function resetLead() {
    submitted.value = false
    error.value = false
    lastPayload.value = null
  }

  return { submitting, submitted, error, whatsappUrl, submitLead, resetLead }
}
