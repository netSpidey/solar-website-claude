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
      <ul v-if="subtitlePoints?.length" class="page-hero__subtitle-list mt-4" style="max-width: 640px">
        <li v-for="(point, index) in subtitlePoints" :key="index" class="text-body-1 text-md-h6 font-weight-regular text-white opacity-80">
          {{ point }}
        </li>
      </ul>
      <p v-else-if="subtitle" class="text-body-1 text-md-h6 font-weight-regular text-white opacity-80 mt-4" style="max-width: 640px">
        {{ subtitle }}
      </p>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  subtitlePoints?: string[]
}>()

const breadcrumbs = computed(() => [
  { title: t('common.home'), to: localePath('/') },
  { title: props.title, disabled: true },
])
const { t } = useI18n()
const localePath = useLocalePath()
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

  &__subtitle-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      padding-left: 26px;

      & + li {
        margin-top: 6px;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.6em;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--color-amber);
      }
    }
  }
}
</style>
