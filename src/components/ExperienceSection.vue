<script setup>
import { sortedExperience } from '@/data/experience'
import PageSection from './PageSection.vue'
import ExperienceItem from './ExperienceItem.vue'
</script>

<template>
  <PageSection id="experience" eyebrow="Experience" title="Employment history" muted>
    <ol role="list" class="timeline">
      <li v-for="job in sortedExperience" :key="`${job.company}-${job.startDate}`">
        <ExperienceItem :job="job" />
      </li>
    </ol>
  </PageSection>
</template>

<style scoped>
.timeline {
  display: grid;
  gap: var(--space-7);
  margin: 0 0 0 0.4375rem;
  border-left: 1px solid var(--color-border-strong);
}
</style>
