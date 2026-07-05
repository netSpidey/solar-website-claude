<template>
  <section id="savings-calculator" class="section-py" style="background: #FFFFFF">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.calculatorEyebrow')"
        :title="t('sections.calculatorTitle')"
        :subtitle="t('sections.calculatorSubtitle')"
        center
        max-width="640px"
      />

      <v-row class="mt-8" justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="pa-6 pa-md-10" elevation="3" rounded="xl">
            <v-row align="center">
              <v-col cols="12" md="6">
                <p class="text-body-2 font-weight-medium mb-2" style="color: #616161">
                  {{ t('calculator.averageBill') }}
                </p>
                <div class="d-flex align-center ga-4 mb-2">
                  <v-icon icon="mdi-currency-inr" color="secondary" />
                  <div class="text-h4 font-weight-bold" style="color: #0B1F3A">
                    {{ formatNumber(monthlyBill) }}
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
                  :label="t('calculator.exactAmount')"
                  density="compact"
                  class="mt-2"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-row dense>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-solar-panel-large" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">{{ t('calculator.suggestedSize') }}</div>
                      <div class="text-h6 font-weight-bold" style="color: #0B1F3A">{{ systemSizeKw }} kW</div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-calendar-month-outline" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">{{ t('calculator.monthlySavings') }}</div>
                      <div class="text-h6 font-weight-bold" style="color: #43A047">₹{{ formatNumber(monthlySavings) }}</div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-calendar-outline" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">{{ t('calculator.yearlySavings') }}</div>
                      <div class="text-h6 font-weight-bold" style="color: #43A047">₹{{ formatNumber(yearlySavings) }}</div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-clock-fast" color="secondary" size="24" class="mb-1" />
                      <div class="text-caption" style="color: #9e9e9e">{{ t('calculator.payback') }}</div>
                      <div class="text-h6 font-weight-bold" style="color: #0B1F3A">~{{ paybackYears }} {{ t('calculator.years') }}</div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-divider class="my-6" />

            <div class="d-flex flex-column flex-sm-row justify-space-between align-center ga-4">
              <p class="text-caption mb-0" style="color: #9e9e9e; max-width: 420px">
                {{ t('calculator.note') }}
              </p>
              <v-btn color="accent" size="large" class="text-deep-navy" prepend-icon="mdi-calendar-check-outline" :to="localePath('/contact')">
                {{ t('common.bookFreeSurvey') }}
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
const RATE_PER_UNIT = 8 // approx. blended electricity tariff (INR/unit)
const COST_PER_KW = 55000 // approx. installed cost per kW after subsidy (INR)

const { t, locale } = useI18n()
const localePath = useLocalePath()
const monthlyBill = ref(3000)
const numberLocale = computed(() => (locale.value === 'mr' ? 'mr-IN' : locale.value === 'hi' ? 'hi-IN' : 'en-IN'))

function formatNumber(value: number | Ref<number>) {
  return unref(value).toLocaleString(numberLocale.value)
}

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
  if (yearlySavings.value <= 0) return '-'
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
