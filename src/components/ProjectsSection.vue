<script setup>
import { featuredProjects } from '@/data/projects'
import { profile } from '@/data/profile'
import PageSection from './PageSection.vue'
import ProjectCard from './ProjectCard.vue'
import BaseIcon from './BaseIcon.vue'
</script>

<template>
  <PageSection
    id="projects"
    eyebrow="Projects"
    title="Selected personal projects"
    description="Side projects built outside of work to practise and explore backend architecture, testing and new technologies. All source code is public on GitHub."
    muted
  >
    <ul role="list" class="projects">
      <li v-for="project in featuredProjects" :key="project.title">
        <ProjectCard :project="project" />
      </li>
    </ul>

    <p v-if="profile.repositoriesUrl" class="projects__more">
      <a :href="profile.repositoriesUrl" class="button button--secondary" target="_blank" rel="noopener noreferrer">
        <BaseIcon name="github" :size="16" />
        All repositories on GitHub
        <span class="visually-hidden">(opens in a new tab)</span>
      </a>
    </p>
  </PageSection>
</template>

<style scoped>
.projects {
  display: grid;
  gap: var(--space-5);
  margin: 0;
}

@media (min-width: 40rem) {
  .projects {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .projects {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.projects__more {
  margin-top: var(--space-6);
}
</style>
