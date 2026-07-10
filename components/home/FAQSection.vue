<template>
  <section class="section-py">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.faqEyebrow')"
        :title="t('sections.faqTitle')"
        :subtitle="t('sections.faqSubtitle')"
        center
        max-width="640px"
      />

      <v-row justify="center" class="mt-6">
        <v-col cols="12" md="9" lg="8">
          <v-expansion-panels variant="accordion" class="faq-panels" flat>
            <v-expansion-panel
              v-for="faq in previewFaqs"
              :key="faq.question"
              class="faq-panel mb-3"
            >
              <v-expansion-panel-title
                class="faq-panel__title"
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
              >
                {{ faq.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="faq-panel__text">{{ faq.answer }}</v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div class="text-center mt-6">
            <v-btn variant="outlined" color="primary" append-icon="mdi-arrow-right" :to="localePath('/faqs')">
              {{ t('common.viewAllFaqs') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { faqs } = useLocalizedContent()

const previewFaqs = computed(() => faqs.value.slice(0, 6))
</script>

<style scoped lang="scss">
.faq-panel {
  border: 1px solid var(--border-soft) !important;
  border-radius: var(--radius-lg) !important;
  background: var(--surface-page);
  overflow: hidden;

  &::after {
    display: none; // remove Vuetify's divider line between accordion panels
  }

  &__title {
    font-weight: 600;
    font-size: 0.98rem;
    color: var(--text-strong);
    min-height: 60px;

    :deep(.v-expansion-panel-title__icon .v-icon) {
      color: var(--color-navy);
    }
  }

  &__text {
    color: var(--text-muted);
    line-height: 1.7;
  }
}
</style>
