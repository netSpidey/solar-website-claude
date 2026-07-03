<template>
  <section class="section-py" style="background: #F8F9FA">
    <v-container>
      <CommonSectionHeading
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Quick answers to the questions we hear most often about going solar in Nashik."
        center
        max-width="640px"
      />

      <v-row justify="center" class="mt-6">
        <v-col cols="12" md="9" lg="8">
          <v-expansion-panels variant="accordion" class="faq-panels">
            <v-expansion-panel v-for="faq in previewFaqs" :key="faq.question" rounded="lg" class="mb-3">
              <v-expansion-panel-title class="font-weight-medium">{{ faq.question }}</v-expansion-panel-title>
              <v-expansion-panel-text style="color: #616161">{{ faq.answer }}</v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div class="text-center mt-6">
            <v-btn variant="text" color="secondary" append-icon="mdi-arrow-right" to="/faqs">
              View All FAQs
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faqs'

const previewFaqs = faqs.slice(0, 6)
</script>

<style scoped lang="scss">
.faq-panels :deep(.v-expansion-panel) {
  border: 1px solid rgba(11, 31, 58, 0.08) !important;
}
</style>
