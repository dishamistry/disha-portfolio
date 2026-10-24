<script setup>
import { profile } from '@/data/profile'
import BaseIcon from './BaseIcon.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© {{ year }} {{ profile.name }}. Built with Vue 3 and Vite.</p>
      <ul role="list" class="footer__links" aria-label="Profiles">
        <li v-for="link in profile.links" :key="link.url">
          <a :href="link.url" class="footer__link" target="_blank" rel="noopener noreferrer">
            <BaseIcon :name="link.icon" :size="18" />
            <span class="visually-hidden">{{ link.label }} (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href="#top" class="footer__link footer__top">Back to top</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--space-6);
  border-top: 1px solid var(--color-border);
  color: var(--color-text-subtle);
  font-size: var(--text-sm);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.footer__links {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
}

.footer__link {
  display: inline-grid;
  place-items: center;
  min-width: 2.5rem;
  min-height: 2.5rem;
  border-radius: var(--radius-sm);
  color: var(--color-text-subtle);
  text-decoration: none;
}

.footer__link:hover {
  color: var(--color-text);
}

.footer__top {
  padding-inline: var(--space-2);
}
</style>
