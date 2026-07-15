<template>
  <section id="savings-calculator" class="section-py">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.calculatorEyebrow')"
        :title="t('sections.calculatorTitle')"
        :subtitle="t('sections.calculatorSubtitle')"
        center
        max-width="640px"
      />

      <v-row class="mt-8" justify="center">
        <v-col cols="12" md="11" lg="9">
          <v-card class="calculator-card pa-6 pa-md-10" elevation="0">
            <v-row align="center">
              <v-col cols="12" md="6">
                <p class="calculator-card__label mb-2">
                  {{ t('calculator.averageBill') }}
                </p>
                <div class="d-flex align-center ga-3 mb-2">
                  <v-icon icon="mdi-currency-inr" color="primary" size="30" />
                  <div class="calculator-card__amount">
                    {{ formatNumber(monthlyBill) }}
                  </div>
                </div>
                <v-slider
                  v-model="monthlyBill"
                  :min="500"
                  :max="10000"
                  :step="500"
                  color="primary"
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
                      <v-icon icon="mdi-solar-panel-large" color="primary" size="24" class="mb-1" />
                      <div class="result-tile__label">{{ t('calculator.suggestedSize') }}</div>
                      <div class="result-tile__value">
                        <span :key="systemSizeKw" class="result-tile__pop">{{ systemSizeKw }} kW</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-calendar-month-outline" color="secondary" size="24" class="mb-1" />
                      <div class="result-tile__label">{{ t('calculator.monthlySavings') }}</div>
                      <div class="result-tile__value result-tile__value--green">
                        <span :key="monthlySavings" class="result-tile__pop">₹{{ formatNumber(monthlySavings) }}</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-calendar-outline" color="secondary" size="24" class="mb-1" />
                      <div class="result-tile__label">{{ t('calculator.yearlySavings') }}</div>
                      <div class="result-tile__value result-tile__value--green">
                        <span :key="yearlySavings" class="result-tile__pop">₹{{ formatNumber(yearlySavings) }}</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="result-tile">
                      <v-icon icon="mdi-clock-fast" color="primary" size="24" class="mb-1" />
                      <div class="result-tile__label">{{ t('calculator.payback') }}</div>
                      <div class="result-tile__value">
                        <span :key="paybackYears" class="result-tile__pop">~{{ paybackYears }} {{ t('calculator.years') }}</span>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-divider class="my-6" />

            <div class="d-flex flex-column flex-sm-row justify-space-between align-center ga-4">
              <p class="calculator-card__note mb-0">
                {{ t('calculator.note') }}
              </p>
              <v-btn
                color="accent"
                size="large"
                variant="flat"
                prepend-icon="mdi-calendar-check-outline"
                :to="localePath('/contact')"
                class="flex-shrink-0"
              >
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
.calculator-card {
  border-radius: 24px;
  background: var(--surface-page);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-lg);

  &__label {
    color: var(--text-muted);
    font-size: 0.9rem;
    font-weight: 600;
  }

  &__amount {
    font-family: var(--font-heading);
    font-size: clamp(1.9rem, 3vw, 2.5rem);
    font-weight: 700;
    color: var(--color-navy);
    font-variant-numeric: tabular-nums;
  }

  &__note {
    color: var(--text-muted);
    font-size: 0.8rem;
    max-width: 420px;
  }
}

.result-tile {
  background: var(--surface-alt);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  padding: 16px;
  height: 100%;

  &__label {
    color: var(--text-muted);
    font-size: 0.78rem;
  }

  &__value {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-navy);
    font-variant-numeric: tabular-nums;

    &--green {
      color: var(--color-green-strong);
    }
  }

  // Keyed span re-mounts when the value changes, replaying the pop animation.
  &__pop {
    display: inline-block;
    animation: tile-pop 0.35s ease;
  }
}

@keyframes tile-pop {
  from {
    opacity: 0.25;
    transform: translateY(7px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .result-tile__pop {
    animation: none;
  }
}
</style>
