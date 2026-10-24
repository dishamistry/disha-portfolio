<script setup>
/** Shared wrapper giving every content section the same spacing and heading style. */
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  muted: { type: Boolean, default: false },
})

const headingId = computed(() => `${props.id}-heading`)
</script>

<template>
  <section :id="id" class="section" :class="{ 'section--muted': muted }" :aria-labelledby="headingId">
    <div class="container">
      <header class="section__header">
        <p v-if="eyebrow" class="section__eyebrow">{{ eyebrow }}</p>
        <h2 :id="headingId" class="section__title">{{ title }}</h2>
        <p v-if="description" class="section__description">{{ description }}</p>
      </header>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-block: var(--space-section);
  border-top: 1px solid var(--color-border);
}

.section--muted {
  background-color: var(--color-surface-muted);
}

.section__header {
  max-width: 42rem;
  margin-bottom: var(--space-7);
}

.section__eyebrow {
  margin-bottom: var(--space-3);
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section__title {
  font-size: var(--text-3xl);
}

.section__description {
  margin-top: var(--space-4);
  color: var(--color-text-muted);
  font-size: var(--text-lg);
}
</style>
