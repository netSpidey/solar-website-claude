<template>
  <div>
    <CommonPageHero
      title="Frequently Asked Questions"
      subtitle="Answers to common questions about solar installation, subsidy, financing, and maintenance in Nashik."
    />

    <section class="section-py">
      <v-container>
        <div class="d-flex flex-wrap justify-center ga-2 mb-8">
          <v-chip
            v-for="category in categories"
            :key="category"
            :color="activeCategory === category ? 'accent' : undefined"
            :variant="activeCategory === category ? 'flat' : 'outlined'"
            class="font-weight-medium"
            @click="activeCategory = category"
          >
            {{ category }}
          </v-chip>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="9" lg="8">
            <v-expansion-panels variant="accordion" class="faq-panels">
              <v-expansion-panel v-for="faq in filteredFaqs" :key="faq.question" rounded="lg" class="mb-3">
                <v-expansion-panel-title class="font-weight-medium">{{ faq.question }}</v-expansion-panel-title>
                <v-expansion-panel-text style="color: #616161">{{ faq.answer }}</v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faqs'

const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category || 'General')))]
const activeCategory = ref('All')

const filteredFaqs = computed(() =>
  activeCategory.value === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory.value)
)

useSeoMeta({
  title: 'Solar FAQs — Nashik Installation, Subsidy & Maintenance',
  description:
    'Find answers to frequently asked questions about rooftop solar installation, government subsidy, net metering, financing, and maintenance in Nashik.',
  ogTitle: 'Solar FAQs — Nashik',
  ogDescription: 'Common questions about solar installation and subsidy in Nashik, answered.',
  keywords: 'solar FAQ Nashik, solar subsidy questions, net metering FAQ, solar installation questions Maharashtra',
})
</script>

<style scoped lang="scss">
.faq-panels :deep(.v-expansion-panel) {
  border: 1px solid rgba(11, 31, 58, 0.08) !important;
}
</style>
