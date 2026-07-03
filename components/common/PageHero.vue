<template>
  <section class="page-hero bg-navy-gradient">
    <v-container class="py-12 py-md-16">
      <v-breadcrumbs :items="breadcrumbs" class="pl-0 mb-4 page-hero__breadcrumbs">
        <template #divider>
          <v-icon icon="mdi-chevron-right" size="16" color="white" />
        </template>
      </v-breadcrumbs>
      <h1 class="text-h3 text-md-h2 font-weight-bold text-white" style="max-width: 780px">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-body-1 text-md-h6 font-weight-regular text-white opacity-80 mt-4" style="max-width: 640px">
        {{ subtitle }}
      </p>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
}>()

const breadcrumbs = computed(() => [
  { title: 'Home', to: '/' },
  { title: props.title, disabled: true },
])
</script>

<style scoped lang="scss">
.page-hero {
  position: relative;

  &__breadcrumbs :deep(.v-breadcrumbs-item) {
    color: rgba(255, 255, 255, 0.75);
  }

  &__breadcrumbs :deep(.v-breadcrumbs-item--disabled) {
    color: #FFC107;
    opacity: 1;
  }
}
</style>
