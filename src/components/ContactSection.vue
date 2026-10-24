<script setup>
import { profile } from '@/data/profile'
import PageSection from './PageSection.vue'
import BaseIcon from './BaseIcon.vue'
</script>

<template>
  <PageSection
    id="contact"
    eyebrow="Contact"
    title="Let’s connect"
    description="Connect with me on LinkedIn or browse my code on GitHub."
    muted
  >
    <ul role="list" class="contact">
      <li v-if="profile.email">
        <a :href="`mailto:${profile.email}`" class="contact__item card">
          <span class="contact__icon"><BaseIcon name="mail" :size="20" /></span>
          <span class="contact__text">
            <span class="contact__label">Email</span>
            <span class="contact__value">{{ profile.email }}</span>
          </span>
        </a>
      </li>
      <li v-for="link in profile.links" :key="link.url">
        <a :href="link.url" class="contact__item card" target="_blank" rel="noopener noreferrer">
          <span class="contact__icon"><BaseIcon :name="link.icon" :size="20" /></span>
          <span class="contact__text">
            <span class="contact__label">{{ link.label }}</span>
            <span class="contact__value">{{ link.display }}</span>
          </span>
          <BaseIcon name="arrow" :size="16" class="contact__arrow" />
          <span class="visually-hidden">(opens in a new tab)</span>
        </a>
      </li>
      <li>
        <div class="contact__item contact__item--static card">
          <span class="contact__icon"><BaseIcon name="location" :size="20" /></span>
          <span class="contact__text">
            <span class="contact__label">Location</span>
            <span class="contact__value">{{ profile.location }}</span>
          </span>
        </div>
      </li>
    </ul>
  </PageSection>
</template>

<style scoped>
.contact {
  display: grid;
  gap: var(--space-4);
  margin: 0;
}

.contact__item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  height: 100%;
  padding: var(--space-4) var(--space-5);
  color: var(--color-text);
  text-decoration: none;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}

a.contact__item:hover {
  color: var(--color-text);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-md);
}

.contact__icon {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-md);
  background-color: var(--color-accent-soft);
  color: var(--color-accent);
}

.contact__text {
  display: grid;
  min-width: 0;
}

.contact__label {
  font-weight: 600;
}

.contact__value {
  overflow: hidden;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact__arrow {
  flex-shrink: 0;
  margin-left: auto;
  color: var(--color-text-subtle);
  transition: transform var(--transition);
}

a.contact__item:hover .contact__arrow {
  color: var(--color-accent);
  transform: translate(2px, -2px);
}

@media (min-width: 48rem) {
  .contact {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
}
</style>
