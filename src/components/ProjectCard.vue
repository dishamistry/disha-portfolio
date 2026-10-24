<script setup>
import { projectTypeLabels } from '@/data/projects'
import BaseIcon from './BaseIcon.vue'

defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="project card">
    <div class="project__top">
      <span class="badge" :class="{ 'badge--neutral': project.type !== 'learning' }">
        {{ projectTypeLabels[project.type] ?? project.type }}
      </span>
    </div>

    <h3 class="project__title">
      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        class="project__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ project.title }}
        <span class="visually-hidden">(GitHub repository, opens in a new tab)</span>
      </a>
      <template v-else>{{ project.title }}</template>
    </h3>

    <p class="project__description">{{ project.description }}</p>

    <ul class="tag-list project__tags" aria-label="Technologies">
      <li v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</li>
    </ul>

    <p v-if="project.repoUrl" class="project__footer" aria-hidden="true">
      <BaseIcon name="github" :size="16" />
      View repository
      <BaseIcon name="arrow" :size="14" class="project__arrow" />
    </p>
  </article>
</template>

<style scoped>
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  height: 100%;
  padding: var(--space-5);
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    transform var(--transition);
}

.project:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.project:focus-within {
  border-color: var(--color-accent);
}

.project__title {
  font-size: var(--text-lg);
  line-height: var(--leading-snug);
}

.project__link {
  color: var(--color-text);
  text-decoration: none;
}

/* Make the whole card clickable while keeping a single, accessible link. */
.project__link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.project__link:focus-visible {
  outline: none;
}

.project__link:focus-visible::after {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
  border-radius: var(--radius-lg);
}

.project__description {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.project__tags {
  margin-top: auto;
  padding-top: var(--space-2);
}

.project__footer {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
  color: var(--color-accent);
  font-size: var(--text-sm);
  font-weight: 600;
}

.project__arrow {
  transition: transform var(--transition);
}

.project:hover .project__arrow {
  transform: translate(2px, -2px);
}
</style>
