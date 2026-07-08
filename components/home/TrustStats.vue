<template>
  <section class="py-8 py-md-10" style="background: #0B1F3A">
    <v-container>
      <v-row justify="center">
        <v-col v-for="stat in trustStats" :key="stat.icon" cols="6" md="3" class="text-center">
          <v-icon :icon="stat.icon" color="accent" size="34" class="mb-2" />
          <div class="text-h4 font-weight-bold text-white">{{ stat.value }}</div>
          <div class="text-body-2 text-white opacity-70">{{ stat.label }}</div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { trustStats } = useLocalizedContent()
</script>
