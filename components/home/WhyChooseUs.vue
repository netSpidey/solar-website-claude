<template>
  <section class="section-py bg-section-alt">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.whyEyebrow')"
        :title="t('sections.whyTitle')"
        :subtitle="t('sections.whySubtitle')"
        center
        max-width="640px"
      />

      <v-row class="mt-8">
        <v-col v-for="(item, i) in whyChooseUs" :key="item.icon" cols="12" sm="6" md="3">
          <CommonRevealOnScroll :delay="i * 70">
            <v-card class="why-card pa-6 h-100 hover-lift" elevation="0">
              <div class="why-card__icon mb-4">
                <v-icon :icon="item.icon" size="26" />
              </div>
              <h3 class="why-card__title text-subtitle-1 font-weight-bold mb-2">{{ item.title }}</h3>
              <p class="why-card__desc text-body-2 mb-0">{{ item.description }}</p>
            </v-card>
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { whyChooseUs } = useLocalizedContent()
</script>

<style scoped lang="scss">
.why-card {
  border-radius: var(--radius-xl);
  background: var(--surface-page);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--color-amber-soft);
    color: var(--color-navy);
  }

  &__title {
    color: var(--text-strong);
    line-height: 1.35;
  }

  &__desc {
    color: var(--text-muted);
  }
}
</style>
