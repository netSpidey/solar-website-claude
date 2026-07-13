<template>
  <div class="scheme-badge" :class="{ 'scheme-badge--dark': dark }">
    <span class="scheme-badge__icon">
      <v-icon icon="mdi-white-balance-sunny" size="18" />
    </span>
    <span class="scheme-badge__text">
      <span class="scheme-badge__name">{{ t('subsidy.schemeName') }}</span>
      <span class="scheme-badge__sub">{{ subtitle || t('subsidy.schemeTag') }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
// The scheme has no official standalone logo (all government surfaces use a
// text lockup or the MNRE emblem, which private vendors may not reproduce),
// so this badge is deliberately a styled-text mark in the site's own design language.
withDefaults(defineProps<{ dark?: boolean; subtitle?: string }>(), {
  dark: false,
  subtitle: '',
})

const { t } = useI18n()
</script>

<style scoped lang="scss">
.scheme-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px 8px 10px;
  border-radius: var(--radius-pill);
  background: var(--surface-page);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);
  text-align: left;

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--color-amber-soft);
    color: var(--color-navy);
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-family: var(--font-heading);
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-navy);
  }

  &__sub {
    font-size: 0.72rem;
    font-weight: 500;
    line-height: 1.35;
    color: var(--text-muted);
  }

  &--dark {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow: none;

    .scheme-badge__icon {
      background: rgba(255, 193, 7, 0.18);
      color: var(--color-amber);
    }

    .scheme-badge__name {
      color: var(--text-on-dark);
    }

    .scheme-badge__sub {
      color: var(--text-on-dark-muted);
    }
  }
}
</style>
