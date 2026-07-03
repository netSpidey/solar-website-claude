<template>
  <v-app>
    <LayoutAppHeader />
    <v-main>
      <slot />
    </v-main>
    <LayoutAppFooter />
    <LayoutFloatingContactButtons />
  </v-app>
</template>

<script setup lang="ts">
</script>
