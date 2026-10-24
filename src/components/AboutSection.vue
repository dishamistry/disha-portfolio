<script setup>
import { profile } from '@/data/profile'
import { sortedExperience } from '@/data/experience'
import { formatMonth } from '@/utils/dates'
import PageSection from './PageSection.vue'

const currentRole = sortedExperience.find((job) => job.end === null)
const firstRole = sortedExperience.at(-1)
</script>

<template>
  <PageSection id="about" eyebrow="About" title="Backend-focused, quality-minded">
    <div class="about">
      <div class="about__summary">
        <p v-for="(paragraph, index) in profile.summary" :key="index">{{ paragraph }}</p>
      </div>

      <aside class="about__facts card" aria-label="Quick facts">
        <dl class="facts">
          <div v-if="currentRole" class="facts__row">
            <dt>Current role</dt>
            <dd>{{ currentRole.role }}, {{ currentRole.company }}</dd>
          </div>
          <div class="facts__row">
            <dt>Location</dt>
            <dd>{{ profile.location }}</dd>
          </div>
          <div v-if="firstRole" class="facts__row">
            <dt>Working in software since</dt>
            <dd>{{ formatMonth(firstRole.start) }}</dd>
          </div>
        </dl>

        <h3 class="about__focus-title">Focus areas</h3>
        <ul role="list" class="about__focus">
          <li v-for="area in profile.focusAreas" :key="area">{{ area }}</li>
        </ul>
      </aside>
    </div>
  </PageSection>
</template>

<style scoped>
.about {
  display: grid;
  gap: var(--space-7);
}

.about__summary {
  display: grid;
  gap: var(--space-4);
  max-width: 40rem;
  color: var(--color-text-muted);
  font-size: var(--text-lg);
}

.about__summary p:first-child {
  color: var(--color-text);
}

.about__facts {
  align-self: start;
  padding: var(--space-5);
}

.facts {
  display: grid;
  gap: var(--space-4);
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--color-border);
}

.facts__row dt {
  color: var(--color-text-subtle);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.facts__row dd {
  margin-top: var(--space-1);
  font-weight: 500;
}

.about__focus-title {
  margin-top: var(--space-5);
  color: var(--color-text-subtle);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.about__focus {
  display: grid;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.about__focus li {
  position: relative;
  padding-left: var(--space-5);
  font-size: var(--text-sm);
}

.about__focus li::before {
  content: '';
  position: absolute;
  left: 0.25rem;
  top: 0.6em;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 2px;
  background-color: var(--color-accent);
}

@media (min-width: 60rem) {
  .about {
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
    gap: var(--space-8);
  }
}
</style>
