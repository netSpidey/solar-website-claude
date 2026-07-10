<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()

const { el, display } = useCountUp(() => props.text)
</script>
