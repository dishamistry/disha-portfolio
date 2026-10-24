<script setup>
import { skillGroups } from '@/data/skills'
import PageSection from './PageSection.vue'
</script>

<template>
  <PageSection
    id="skills"
    eyebrow="Skills"
    title="Technical skills"
    description="Tools and technologies I use in my work, plus what I’m currently learning through personal projects."
  >
    <div class="skills">
      <section
        v-for="group in skillGroups"
        :key="group.category"
        class="skills__group"
        :class="{ 'skills__group--learning': group.context === 'learning' }"
        :aria-label="group.category"
      >
        <h3 class="skills__title">
          {{ group.category }}
          <span v-if="group.context === 'learning'" class="badge">In progress</span>
        </h3>
        <p v-if="group.note" class="skills__note">{{ group.note }}</p>
        <ul class="tag-list">
          <li v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</li>
        </ul>
      </section>
    </div>
  </PageSection>
</template>

<style scoped>
.skills {
  display: grid;
  gap: var(--space-6) var(--space-7);
}

.skills__group {
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.skills__group--learning {
  padding: var(--space-5);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-lg);
}

.skills__title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2) var(--space-3);
  margin-bottom: var(--space-4);
  font-size: var(--text-base);
}

.skills__note {
  margin: calc(-1 * var(--space-2)) 0 var(--space-4);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.skills .tag {
  font-size: var(--text-sm);
  white-space: normal;
}

@media (min-width: 48rem) {
  .skills {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
