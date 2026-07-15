<template>
  <v-form ref="formRef" v-model="isValid" @submit.prevent="handleSubmit">
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-text-field v-model="form.name" :label="t('forms.fullName')" :rules="[rules.required]" prepend-inner-icon="mdi-account-outline" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="form.phone" :label="t('forms.phoneNumber')" :rules="[rules.required, rules.phone]" prepend-inner-icon="mdi-phone-outline" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="form.email" :label="t('forms.email')" :rules="[rules.email]" prepend-inner-icon="mdi-email-outline" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          v-model="form.service"
          :items="serviceOptions"
          :label="t('forms.interestedIn')"
          item-title="title"
          item-value="value"
          prepend-inner-icon="mdi-solar-power-variant-outline"
        />
      </v-col>
      <v-col cols="12">
        <v-textarea v-model="form.message" :label="t('forms.message')" rows="4" prepend-inner-icon="mdi-message-text-outline" />
      </v-col>
    </v-row>

    <input v-model="form.botcheck" type="checkbox" name="botcheck" class="d-none" tabindex="-1" autocomplete="off" aria-hidden="true" />

    <v-alert v-if="submitted" type="success" variant="tonal" class="mb-4">
      {{ t('forms.contactSuccess') }}
      <v-btn
        color="success"
        variant="flat"
        size="small"
        block
        prepend-icon="mdi-whatsapp"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener"
        class="mt-3"
      >
        {{ t('forms.continueWhatsapp') }}
      </v-btn>
    </v-alert>
    <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
      {{ t('forms.submitError') }}
      <v-btn
        color="success"
        variant="flat"
        size="small"
        block
        prepend-icon="mdi-whatsapp"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener"
        class="mt-3"
      >
        {{ t('forms.continueWhatsapp') }}
      </v-btn>
    </v-alert>

    <v-btn
      type="submit"
      color="secondary"
      size="large"
      block
      :loading="submitting"
      prepend-icon="mdi-send-outline"
    >
      {{ t('forms.sendMessage') }}
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ source?: string }>(), { source: 'contact-page' })

const formRef = ref()
const isValid = ref(false)
const { t } = useI18n()
const { services } = useLocalizedContent()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  botcheck: false,
})

const serviceOptions = computed(() => services.value.map((s) => ({ title: s.title, value: s.slug })))

const rules = {
  required: (v: string) => !!v || t('forms.fieldRequired'),
  phone: (v: string) => /^[6-9]\d{9}$/.test(v.replace(/\s+/g, '')) || t('forms.invalidPhone'),
  email: (v: string) => !v || /.+@.+\..+/.test(v) || t('forms.invalidEmail'),
}

const { submitting, submitted, error, whatsappUrl, submitLead } = useLeadSubmit()

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
    botcheck: form.botcheck,
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
