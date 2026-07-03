<template>
  <v-card class="lead-form-card pa-6 pa-md-8" elevation="12">
    <div class="mb-5">
      <h3 class="text-h5 font-weight-bold" style="color: #0B1F3A">Get a Free Solar Quote</h3>
      <p class="text-body-2 mt-1" style="color: #616161">
        Share your details and our team will call you within 24 hours.
      </p>
    </div>

    <v-form ref="formRef" v-model="isValid" @submit.prevent="handleSubmit">
      <v-text-field v-model="form.name" label="Full Name" :rules="[rules.required]" prepend-inner-icon="mdi-account-outline" class="mb-1" />
      <v-text-field v-model="form.phone" label="Phone Number" :rules="[rules.required, rules.phone]" prepend-inner-icon="mdi-phone-outline" class="mb-1" />
      <v-text-field
        v-model="form.monthlyBill"
        label="Monthly Electricity Bill (₹)"
        type="number"
        prepend-inner-icon="mdi-currency-inr"
        class="mb-1"
      />
      <v-select
        v-model="form.propertyType"
        label="Property Type"
        :items="['Residential', 'Commercial', 'Industrial']"
        prepend-inner-icon="mdi-home-city-outline"
        class="mb-1"
      />
      <v-textarea v-model="form.message" label="Message (optional)" rows="3" prepend-inner-icon="mdi-message-text-outline" class="mb-2" />

      <v-alert v-if="submitted" type="success" variant="tonal" class="mb-4">
        Thanks {{ form.name || 'there' }}! We'll call you shortly.
      </v-alert>

      <v-btn type="submit" color="accent" size="large" block :loading="submitting" class="text-deep-navy">
        Get Free Quote
      </v-btn>

      <p class="text-caption text-center mt-3 mb-0" style="color: #9e9e9e">
        No spam. Your details are used only to contact you about solar options.
      </p>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
const formRef = ref()
const isValid = ref(false)

const form = reactive({
  name: '',
  phone: '',
  monthlyBill: '',
  propertyType: 'Residential',
  message: '',
})

const rules = {
  required: (v: string) => !!v || 'Required',
  phone: (v: string) => /^[6-9]\d{9}$/.test((v || '').replace(/\s+/g, '')) || 'Enter a valid 10-digit phone number',
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
