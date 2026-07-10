<template>
  <section class="stats-band bg-navy-gradient py-10 py-md-14">
    <v-container>
      <v-row>
        <v-col
          v-for="stat in trustStats"
          :key="stat.icon"
          cols="6"
          md="3"
          class="text-center stats-band__col"
        >
          <div class="stats-band__icon mx-auto mb-3">
            <v-icon :icon="stat.icon" color="accent" size="26" />
          </div>
          <div class="stats-band__value">
            <CommonCountUp :text="stat.value" />
          </div>
          <div class="stats-band__label mt-1">{{ stat.label }}</div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { trustStats } = useLocalizedContent()
</script>

<style scoped lang="scss">
.stats-band__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(255, 193, 7, 0.14);
}

.stats-band__value {
  font-family: var(--font-heading);
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--text-on-dark);
  font-variant-numeric: tabular-nums;
}

.stats-band__label {
  color: var(--text-on-dark-muted);
  font-size: 0.95rem;
}

@media (min-width: 960px) {
  .stats-band__col + .stats-band__col {
    border-left: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
