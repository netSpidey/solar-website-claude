<template>
  <section class="section-py" style="background: #F8F9FA">
    <v-container>
      <CommonSectionHeading
        :eyebrow="t('systemTypes.eyebrow')"
        :title="t('systemTypes.title')"
        center
        max-width="620px"
      />
      <v-row class="mt-8">
        <v-col v-for="type in systemTypes" :key="type.icon" cols="12" md="4">
          <v-card class="pa-6 text-center h-100" elevation="0" rounded="xl" style="border: 1px solid rgba(11,31,58,0.08)">
            <v-icon :icon="type.icon" color="secondary" size="32" class="mb-3" />
            <h3 class="text-subtitle-1 font-weight-bold mb-2" style="color: #0B1F3A">{{ type.title }}</h3>
            <p class="text-body-2 mb-0" style="color: #616161">{{ type.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const systemTypes = computed(() => [
  { icon: 'mdi-transmission-tower-export', title: t('systemTypes.onGridTitle'), description: t('systemTypes.onGridDesc') },
  { icon: 'mdi-battery-charging-outline', title: t('systemTypes.offGridTitle'), description: t('systemTypes.offGridDesc') },
  { icon: 'mdi-sync', title: t('systemTypes.hybridTitle'), description: t('systemTypes.hybridDesc') },
])
</script>
