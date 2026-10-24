<script setup>
import { education, certifications } from '@/data/education'
import PageSection from './PageSection.vue'
</script>

<template>
  <PageSection
    v-if="education.length || certifications.length"
    id="education"
    eyebrow="Education"
    title="Education & courses"
  >
    <div class="education">
      <div v-if="education.length">
        <h3 class="education__heading">Degrees</h3>
        <ul role="list" class="education__list">
          <li v-for="item in education" :key="item.qualification" class="education__item card">
            <p class="education__title">{{ item.qualification }}</p>
            <p v-if="item.institution" class="education__detail">{{ item.institution }}</p>
            <p v-if="item.completed" class="education__date">Completed {{ item.completed }}</p>
          </li>
        </ul>
      </div>

      <div v-if="certifications.length">
        <h3 class="education__heading">Course certificates</h3>
        <ul role="list" class="education__list">
          <li v-for="item in certifications" :key="item.title" class="education__item card">
            <p class="education__title">
              <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">
                {{ item.title }}
                <span class="visually-hidden">(opens in a new tab)</span>
              </a>
              <template v-else>{{ item.title }}</template>
            </p>
            <p v-if="item.issuer" class="education__detail">{{ item.issuer }}</p>
            <p v-if="item.year" class="education__date">{{ item.year }}</p>
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
</template>

<style scoped>
.education {
  display: grid;
  gap: var(--space-7);
}

.education__heading {
  margin-bottom: var(--space-4);
  color: var(--color-text-subtle);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.education__list {
  display: grid;
  gap: var(--space-3);
  margin: 0;
}

.education__item {
  padding: var(--space-4) var(--space-5);
}

.education__title {
  font-weight: 600;
  line-height: var(--leading-snug);
}

.education__detail {
  margin-top: var(--space-1);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.education__date {
  margin-top: var(--space-2);
  color: var(--color-text-subtle);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

@media (min-width: 56rem) {
  .education {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
