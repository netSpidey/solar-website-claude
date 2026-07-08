<template>
  <v-card class="lead-form-card pa-6 pa-md-8" elevation="12">
    <div class="mb-5">
      <h3 class="text-h5 font-weight-bold" style="color: #0B1F3A">{{ t('forms.quoteTitle') }}</h3>
      <p class="text-body-2 mt-1" style="color: #616161">
        {{ t('forms.quoteSubtitle') }}
      </p>
    </div>

    <v-form ref="formRef" v-model="isValid" @submit.prevent="handleSubmit">
      <v-text-field v-model="form.name" :label="t('forms.fullName')" :rules="[rules.required]" prepend-inner-icon="mdi-account-outline" class="mb-1" />
      <v-text-field v-model="form.phone" :label="t('forms.phoneNumber')" :rules="[rules.required, rules.phone]" prepend-inner-icon="mdi-phone-outline" class="mb-1" />
      <v-text-field
        v-model="form.monthlyBill"
        :label="t('forms.monthlyBill')"
        type="number"
        prepend-inner-icon="mdi-currency-inr"
        class="mb-1"
      />
      <v-select
        v-model="form.propertyType"
        :label="t('forms.propertyType')"
        :items="propertyOptions"
        item-title="title"
        item-value="value"
        prepend-inner-icon="mdi-home-city-outline"
        class="mb-1"
      />
      <v-textarea v-model="form.message" :label="t('forms.optionalMessage')" rows="3" prepend-inner-icon="mdi-message-text-outline" class="mb-2" />

      <v-alert v-if="submitted" type="success" variant="tonal" class="mb-4">
        {{ t('forms.quoteSuccess', { name: form.name || t('forms.there') }) }}
      </v-alert>

      <v-btn type="submit" color="accent" size="large" block :loading="submitting" class="text-deep-navy">
        {{ t('forms.submitQuote') }}
      </v-btn>

      <p class="text-caption text-center mt-3 mb-0" style="color: #9e9e9e">
        {{ t('forms.privacy') }}
      </p>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
const formRef = ref()
const isValid = ref(false)
const { t, tm } = useI18n()

const form = reactive({
  name: '',
  phone: '',
  monthlyBill: '',
  propertyType: 'Residential',
  message: '',
})

const propertyOptionLabels = computed(() => tm('forms.propertyOptions') as string[])
const propertyOptions = computed(() =>
  ['Residential', 'Commercial'].map((value, index) => ({
    value,
    title: propertyOptionLabels.value[index] || value,
  }))
)

const rules = {
  required: (v: string) => !!v || t('forms.required'),
  phone: (v: string) => /^[6-9]\d{9}$/.test((v || '').replace(/\s+/g, '')) || t('forms.invalidPhone'),
}

const { submitting, submitted, submitLead } = useLeadSubmit()

async function handleSubmit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  await submitLead({
    name: form.name,
    phone: form.phone,
    monthlyBill: form.monthlyBill,
    propertyType: form.propertyType,
    message: form.message,
    source: 'homepage-lead-form',
  })
}
</script>

<style scoped lang="scss">
.lead-form-card {
  border-radius: 24px;
  background: #ffffff;
}
</style>
