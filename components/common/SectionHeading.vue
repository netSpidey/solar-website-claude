<template>
  <div class="section-heading" :class="{ 'text-center mx-auto': center }" :style="center ? `max-width: ${maxWidth}` : undefined">
    <span v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</span>
    <h2 class="section-heading__title text-h4 text-md-h3 font-weight-bold">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="section-heading__subtitle text-body-1 mt-3">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    center?: boolean
    maxWidth?: string
  }>(),
  {
    center: false,
    maxWidth: '680px',
  }
)
</script>

<style scoped lang="scss">
.section-heading__eyebrow {
  display: inline-block;
  padding: 5px 14px;
  margin-bottom: 14px;
  border-radius: var(--radius-pill);
  background: var(--color-amber-soft);
  color: var(--color-navy);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-heading__title {
  color: var(--text-strong);
  line-height: 1.2;
}

.section-heading__subtitle {
  color: var(--text-muted);
  line-height: 1.65;
}
</style>
