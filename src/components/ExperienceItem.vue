<script setup>
import { computed } from 'vue'
import { formatMonth } from '@/utils/dates'

const props = defineProps({
  job: { type: Object, required: true },
})

const isCurrent = computed(() => props.job.end === null)
const stackEntries = computed(() => Object.entries(props.job.techStack ?? {}))
</script>

<template>
  <article class="job">
    <div class="job__marker" :class="{ 'job__marker--current': isCurrent }" aria-hidden="true"></div>

    <header class="job__header">
      <div>
        <h3 class="job__role">{{ job.role }}</h3>
        <p class="job__company">{{ job.company }}</p>
      </div>
      <div class="job__meta">
        <p class="job__period">
          <time :datetime="job.start">{{ formatMonth(job.start) }}</time>
          –
          <time v-if="job.end" :datetime="job.end">{{ formatMonth(job.end) }}</time>
          <span v-else>Present</span>
        </p>
        <p v-if="job.employmentType" class="job__type">{{ job.employmentType }}</p>
      </div>
    </header>

    <ul class="job__highlights">
      <li v-for="(item, index) in job.highlights" :key="index">{{ item }}</li>
    </ul>

    <details v-if="stackEntries.length" class="job__stack">
      <summary>Tech stack</summary>
      <dl class="job__stack-list">
        <div v-for="[category, items] in stackEntries" :key="category" class="job__stack-row">
          <dt>{{ category }}</dt>
          <dd>{{ items.join(', ') }}</dd>
        </div>
      </dl>
    </details>
  </article>
</template>

<style scoped>
.job {
  position: relative;
  padding-left: var(--space-6);
}

.job__marker {
  position: absolute;
  left: -0.4375rem;
  top: 0.45rem;
  width: 0.875rem;
  height: 0.875rem;
  border: 2px solid var(--color-border-strong);
  border-radius: 50%;
  background-color: var(--color-bg);
}

.job__marker--current {
  border-color: var(--color-accent);
  background-color: var(--color-accent);
  box-shadow: 0 0 0 4px var(--color-accent-soft);
}

.job__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2) var(--space-5);
}

.job__role {
  font-size: var(--text-xl);
}

.job__company {
  margin-top: var(--space-1);
  color: var(--color-accent);
  font-weight: 600;
}

.job__meta {
  color: var(--color-text-subtle);
  font-size: var(--text-sm);
}

.job__period {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  white-space: nowrap;
}

.job__type {
  margin-top: var(--space-1);
}

.job__highlights {
  display: grid;
  gap: var(--space-2);
  max-width: 48rem;
  margin-top: var(--space-4);
  padding-left: 1.1rem;
  color: var(--color-text-muted);
}

.job__highlights li::marker {
  color: var(--color-text-subtle);
}

.job__stack {
  max-width: 48rem;
  margin-top: var(--space-4);
}

.job__stack summary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) 0;
  color: var(--color-text);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  list-style: none;
}

.job__stack summary::-webkit-details-marker {
  display: none;
}

.job__stack summary::before {
  content: '';
  width: 0.45rem;
  height: 0.45rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
  transition: transform var(--transition);
}

.job__stack[open] summary::before {
  transform: rotate(45deg);
}

.job__stack summary:hover {
  color: var(--color-accent);
}

.job__stack-list {
  display: grid;
  gap: var(--space-2);
  margin-top: var(--space-3);
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  font-size: var(--text-sm);
}

.job__stack-row {
  display: grid;
  gap: var(--space-1);
}

.job__stack-row dt {
  color: var(--color-text-subtle);
  font-weight: 600;
}

.job__stack-row dd {
  color: var(--color-text-muted);
}

@media (min-width: 40rem) {
  .job__stack-row {
    grid-template-columns: 10rem 1fr;
    gap: var(--space-4);
  }

  .job__meta {
    text-align: right;
  }
}
</style>
