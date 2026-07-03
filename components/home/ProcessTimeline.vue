<template>
  <section class="section-py" style="background: #FFFFFF">
    <v-container>
      <CommonSectionHeading
        eyebrow="How It Works"
        title="Your Solar Installation Journey"
        subtitle="A simple, guided process from first call to full power generation."
        center
        max-width="640px"
      />

      <v-row class="mt-10">
        <v-col v-for="(step, i) in processSteps" :key="step.step" cols="6" sm="4" md="3">
          <CommonRevealOnScroll :delay="i * 60">
            <div class="timeline-step text-center">
              <div class="timeline-step__circle mx-auto mb-3">
                <v-icon :icon="step.icon" color="deep-navy" size="26" />
              </div>
              <div class="text-caption font-weight-bold mb-1" style="color: #FFC107">STEP {{ step.step }}</div>
              <h3 class="text-body-1 font-weight-bold mb-1" style="color: #0B1F3A">{{ step.title }}</h3>
              <p class="text-caption mb-0" style="color: #616161">{{ step.description }}</p>
            </div>
          </CommonRevealOnScroll>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/process'
</script>

<style scoped lang="scss">
.timeline-step {
  padding: 8px;

  &__circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(255, 193, 7, 0.16);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
