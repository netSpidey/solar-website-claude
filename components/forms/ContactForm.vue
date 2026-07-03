<template>
  <v-form ref="formRef" v-model="isValid" @submit.prevent="handleSubmit">
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-text-field v-model="form.name" label="Full Name" :rules="[rules.required]" prepend-inner-icon="mdi-account-outline" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="form.phone" label="Phone Number" :rules="[rules.required, rules.phone]" prepend-inner-icon="mdi-phone-outline" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="form.email" label="Email Address" :rules="[rules.email]" prepend-inner-icon="mdi-email-outline" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select v-model="form.service" :items="serviceOptions" label="I'm Interested In" prepend-inner-icon="mdi-solar-power-variant-outline" />
      </v-col>
      <v-col cols="12">
        <v-textarea v-model="form.message" label="Message" rows="4" prepend-inner-icon="mdi-message-text-outline" />
      </v-col>
    </v-row>

    <v-alert v-if="submitted" type="success" variant="tonal" class="mb-4">
      Thank you! Our solar consultant will contact you within 24 hours.
    </v-alert>
    <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
      {{ error }}
    </v-alert>

    <v-btn
      type="submit"
      color="secondary"
      size="large"
      block
      :loading="submitting"
      prepend-icon="mdi-send-outline"
    >
      Send Message
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

const props = withDefaults(defineProps<{ source?: string }>(), { source: 'contact-page' })

const formRef = ref()
const isValid = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
})

const serviceOptions = services.map((s) => s.title)

const rules = {
  required: (v: string) => !!v || 'This field is required',
  phone: (v: string) => /^[6-9]\d{9}$/.test(v.replace(/\s+/g, '')) || 'Enter a valid 10-digit phone number',
  email: (v: string) => !v || /.+@.+\..+/.test(v) || 'Enter a valid email address',
}

const { submitting, submitted, error, submitLead } = useLeadSubmit()

async function handleSubmit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  await submitLead({
    name: form.name,
    phone: form.phone,
    email: form.email,
    service: form.service,
    message: form.message,
    source: props.source,
  })

  if (submitted.value) {
    form.name = ''
    form.phone = ''
    form.email = ''
    form.service = ''
    form.message = ''
    formRef.value.resetValidation()
  }
}
</script>
