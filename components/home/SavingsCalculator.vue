<template>
  <section id="savings-calculator" class="section-py" style="background: #FFFFFF">
    <v-container>
      <CommonSectionHeading
        eyebrow="Savings Calculator"
        title="See How Much You Could Save"
        subtitle="Enter your average monthly electricity bill to get an instant estimate of your solar savings."
        center
        max-width="640px"
      />

      <v-row class="mt-8" justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="pa-6 pa-md-10" elevation="3" rounded="xl">
            <v-row align="center">
              <v-col cols="12" md="6">
                <p class="text-body-2 font-weight-medium mb-2" style="color: #616161">
                  Average Monthly Electricity Bill
                </p>
                <div class="d-flex align-center ga-4 mb-2">
                  <v-icon icon="mdi-currency-inr" color="secondary" />
                  <div class="text-h4 font-weight-bold" style="color: #0B1F3A">
                    {{ monthlyBill.toLocaleString('en-IN') }}
                  </div>
                </div>
                <v-slider
                  v-model="monthlyBill"
                  :min="500"
                  :max="100000"
                  :step="500"
                  color="secondary"
                  track-color="grey-lighten-2"
                  thumb-label
                />
                <v-text-field
                  v-model.number="monthlyBill"
                  type="number"
                  label="Or enter exact amount (₹)"
                  density="compact"
                  class="mt-2"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-row dense>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-solar-panel-large" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">Suggested System Size</div>
                      <div class="text-h6 font-weight-bold" style="color: #0B1F3A">{{ systemSizeKw }} kW</div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-calendar-month-outline" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">Monthly Savings</div>
                      <div class="text-h6 font-weight-bold" style="color: #43A047">₹{{ monthlySavings.toLocaleString('en-IN') }}</div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-calendar-outline" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">Yearly Savings</div>
                      <div class="text-h6 font-weight-bold" style="color: #43A047">₹{{ yearlySavings.toLocaleString('en-IN') }}</div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-clock-fast" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">Payback Period</div>
                      <div class="text-h6 font-weight-bold" style="color: #0B1F3A">~{{ paybackYears }} yrs</div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-divider class="my-6" />

            <div class="d-flex flex-column flex-sm-row justify-space-between align-center ga-4">
              <p class="text-caption mb-0" style="color: #9e9e9e; max-width: 420px">
                Estimates are indicative, based on average Nashik sun hours and tariff rates. Get a free
                site survey for an exact quotation.
              </p>
              <v-btn color="accent" size="large" class="text-deep-navy" prepend-icon="mdi-calendar-check-outline" to="/contact">
                Book Free Survey
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
// Assumptions used for indicative estimates (can be tuned as real tariff/generation data becomes available):
const UNITS_PER_KW_PER_MONTH = 120 // avg. units generated per kW installed per month in Nashik
const RATE_PER_UNIT = 8 // approx. blended electricity tariff (₹/unit)
const COST_PER_KW = 55000 // approx. installed cost per kW after subsidy (₹)

const monthlyBill = ref(3000)

const monthlyUnitsConsumed = computed(() => monthlyBill.value / RATE_PER_UNIT)

const systemSizeKw = computed(() => {
  const raw = monthlyUnitsConsumed.value / UNITS_PER_KW_PER_MONTH
  return Math.max(1, Math.round(raw * 2) / 2)
})

const monthlyGenerationUnits = computed(() => systemSizeKw.value * UNITS_PER_KW_PER_MONTH)

const monthlySavings = computed(() =>
  Math.round(Math.min(monthlyGenerationUnits.value * RATE_PER_UNIT, monthlyBill.value * 0.9))
)

const yearlySavings = computed(() => monthlySavings.value * 12)

const systemCost = computed(() => systemSizeKw.value * COST_PER_KW)

const paybackYears = computed(() => {
  if (yearlySavings.value <= 0) return '—'
  return Math.round((systemCost.value / yearlySavings.value) * 10) / 10
})
</script>

<style scoped lang="scss">
.result-tile {
  background: #F8F9FA;
  border-radius: 16px;
  padding: 16px;
  height: 100%;
}
</style>
