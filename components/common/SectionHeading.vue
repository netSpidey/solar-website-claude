<template>
  <div class="section-heading" :class="{ 'text-center mx-auto': center }" :style="center ? `max-width: ${maxWidth}` : undefined">
    <v-chip v-if="eyebrow" color="accent" variant="flat" size="small" class="mb-3 font-weight-bold">
      {{ eyebrow }}
    </v-chip>
    <h2 class="text-h4 text-md-h3 font-weight-bold" style="color: #0B1F3A">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-body-1 mt-3" style="color: #616161">
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
