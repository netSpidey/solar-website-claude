<template>
  <section class="section-py">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img :src="service?.image" :alt="service?.title" rounded="xl" cover height="360" />
        </v-col>
        <v-col cols="12" md="6" class="pl-md-10 mt-8 mt-md-0">
          <h2 class="text-h4 font-weight-bold" style="color: #0B1F3A">{{ service?.title }}</h2>
          <p class="text-body-1 mt-4" style="color: #616161">{{ service?.shortDescription }}</p>
          <v-list class="mt-2 bg-transparent">
            <v-list-item v-for="feature in teaserFeatures" :key="feature" class="px-0">
              <template #prepend>
                <v-icon icon="mdi-check-circle" color="secondary" class="mr-2" />
              </template>
              <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-btn color="accent" size="large" class="text-deep-navy mt-4" :to="localePath('/auto-cleaning-system')" append-icon="mdi-arrow-right">
            {{ t('common.learnMore') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { getServiceBySlug } = useLocalizedContent()

const service = getServiceBySlug('auto-cleaning-system')
const teaserFeatures = computed(() => (service.value?.features ?? []).slice(0, 4))
</script>
