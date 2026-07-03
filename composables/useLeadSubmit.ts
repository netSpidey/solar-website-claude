export interface LeadPayload {
  name: string
  phone: string
  email?: string
  monthlyBill?: string
  propertyType?: string
  service?: string
  message?: string
  source: string
}

export function useLeadSubmit() {
  const submitting = ref(false)
  const submitted = ref(false)
  const error = ref<string | null>(null)

  async function submitLead(payload: LeadPayload) {
    submitting.value = true
    error.value = null

    try {
      // TODO: Replace with real backend/API integration (e.g. POST /api/leads
      // or a CRM webhook). For now we log locally so the flow can be tested
      // end-to-end without a backend.
      // eslint-disable-next-line no-console
      console.log('[Lead Submitted]', payload)

      await new Promise((resolve) => setTimeout(resolve, 500))
      submitted.value = true
    } catch (e) {
      error.value = 'Something went wrong. Please call us directly.'
    } finally {
      submitting.value = false
    }
  }

  function resetLead() {
    submitted.value = false
    error.value = null
  }

  return { submitting, submitted, error, submitLead, resetLead }
}
