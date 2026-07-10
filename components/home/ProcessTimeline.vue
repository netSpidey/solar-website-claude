<template>
  <section class="section-py bg-section-alt">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('sections.processEyebrow')"
        :title="t('sections.processTitle')"
        :subtitle="t('sections.processSubtitle')"
        center
        max-width="640px"
      />

      <ol class="timeline mt-10 mt-md-14">
        <li v-for="(step, i) in processSteps" :key="step.step" class="timeline__item">
          <CommonRevealOnScroll :delay="i * 60" class="timeline__inner">
            <div class="timeline__node">
              <v-icon :icon="step.icon" size="22" />
              <span class="timeline__number" aria-hidden="true">{{ step.step }}</span>
            </div>
            <div class="timeline__content">
              <div class="timeline__step-label">{{ t('common.step') }} {{ step.step }}</div>
              <h3 class="timeline__title">{{ step.title }}</h3>
              <p class="timeline__desc">{{ step.description }}</p>
            </div>
          </CommonRevealOnScroll>
        </li>
      </ol>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { processSteps } = useLocalizedContent()
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 8px;

  // Horizontal connector through the node centers (desktop)
  &::before {
    content: '';
    position: absolute;
    top: 27px;
    left: calc(100% / 14);
    right: calc(100% / 14);
    height: 2px;
    background: var(--border-strong);
  }

  &__item {
    flex: 1 1 0;
    position: relative;
    z-index: 1;
    text-align: center;
  }

  &__node {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin: 0 auto;
    border-radius: 50%;
    background: var(--surface-page);
    border: 2px solid var(--color-amber);
    color: var(--color-navy);
    box-shadow: var(--shadow-sm);
  }

  &__number {
    position: absolute;
    top: -6px;
    right: -6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-amber);
    color: var(--color-navy);
    font-family: var(--font-heading);
    font-size: 0.72rem;
    font-weight: 700;
  }

  &__content {
    margin-top: 14px;
    padding: 0 4px;
  }

  &__step-label {
    color: var(--color-amber-strong);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.98rem;
    font-weight: 600;
    color: var(--text-strong);
    line-height: 1.35;
    margin-bottom: 4px;
  }

  &__desc {
    color: var(--text-muted);
    font-size: 0.8rem;
    line-height: 1.55;
    margin-bottom: 0;
  }
}

// Vertical timeline on mobile / small tablets
@media (max-width: 959.98px) {
  .timeline {
    flex-direction: column;
    gap: 0;

    &::before {
      top: 28px;
      bottom: 28px;
      left: 27px;
      right: auto;
      width: 2px;
      height: auto;
    }

    &__item {
      text-align: left;
    }

    &__inner {
      display: flex;
      gap: 18px;
      padding-bottom: 28px;
    }

    &__node {
      flex-shrink: 0;
      margin: 0;
    }

    &__content {
      margin-top: 4px;
    }

    &__item:last-child .timeline__inner {
      padding-bottom: 0;
    }
  }
}
</style>
