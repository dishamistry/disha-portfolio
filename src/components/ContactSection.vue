<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { profile } from '@/data/profile'
import PageSection from './PageSection.vue'
import BaseIcon from './BaseIcon.vue'

// '' | 'copied' | 'failed' — drives the button label and the screen-reader announcement.
const copyStatus = ref('')
let resetTimer

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copyStatus.value = 'copied'
  } catch {
    copyStatus.value = 'failed'
  }
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => (copyStatus.value = ''), 2500)
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<template>
  <PageSection
    id="contact"
    eyebrow="Contact"
    title="Let’s connect"
    :description="
      profile.email
        ? 'Email me directly, connect with me on LinkedIn, or browse my code on GitHub.'
        : 'Connect with me on LinkedIn or browse my code on GitHub.'
    "
    muted
  >
    <ul role="list" class="contact">
      <li v-if="profile.email">
        <div class="contact__item contact__item--email card">
          <span class="contact__icon"><BaseIcon name="mail" :size="20" /></span>
          <span class="contact__text">
            <span class="contact__label">Email</span>
            <a :href="`mailto:${profile.email}`" class="contact__value contact__email">{{ profile.email }}</a>
          </span>
          <button type="button" class="contact__copy" @click="copyEmail">
            <BaseIcon :name="copyStatus === 'copied' ? 'check' : 'copy'" :size="16" />
            <span>{{ copyStatus === 'copied' ? 'Copied' : 'Copy' }}</span>
            <span class="visually-hidden">email address</span>
          </button>
          <p class="visually-hidden" role="status" aria-live="polite">
            <template v-if="copyStatus === 'copied'">Email address copied to clipboard.</template>
            <template v-else-if="copyStatus === 'failed'">Couldn’t copy automatically. The email address is {{ profile.email }}.</template>
          </p>
        </div>
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

.contact__item--email:focus-within {
  border-color: var(--color-accent);
}

.contact__email {
  color: var(--color-accent);
  text-decoration: none;
}

.contact__email:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}

.contact__copy {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-1);
  min-height: 2.25rem;
  margin-left: auto;
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-pill);
  background-color: var(--color-surface);
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color var(--transition),
    color var(--transition);
}

.contact__copy:hover {
  border-color: var(--color-text-subtle);
  color: var(--color-text);
}

@media (min-width: 48rem) {
  .contact {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
