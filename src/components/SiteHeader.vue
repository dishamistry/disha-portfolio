<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '@/data/profile'
import { navigation } from '@/data/navigation'
import { useActiveSection } from '@/composables/useActiveSection'
import BaseIcon from './BaseIcon.vue'

const isMenuOpen = ref(false)
const menuButton = ref(null)
const activeId = useActiveSection(navigation.map((item) => item.id))

function closeMenu({ restoreFocus = false } = {}) {
  if (!isMenuOpen.value) return
  isMenuOpen.value = false
  if (restoreFocus) menuButton.value?.focus()
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu({ restoreFocus: true })
}

// Close the mobile menu if the viewport grows past the mobile breakpoint.
let mediaQuery
const onBreakpointChange = (event) => {
  if (event.matches) closeMenu()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  mediaQuery = window.matchMedia('(min-width: 48rem)')
  mediaQuery.addEventListener('change', onBreakpointChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  mediaQuery?.removeEventListener('change', onBreakpointChange)
})
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#top" class="header__brand" @click="closeMenu()">
        <span class="header__monogram" aria-hidden="true">
          {{ profile.name.split(' ').map((part) => part[0]).join('') }}
        </span>
        <span class="header__name">{{ profile.name }}</span>
      </a>

      <button
        ref="menuButton"
        type="button"
        class="header__toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <BaseIcon :name="isMenuOpen ? 'close' : 'menu'" :size="22" />
        <span class="visually-hidden">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
      </button>

      <nav id="primary-navigation" class="header__nav" :class="{ 'is-open': isMenuOpen }" aria-label="Primary">
        <ul role="list" class="header__list">
          <li v-for="item in navigation" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="header__link"
              :class="{ 'is-active': activeId === item.id }"
              :aria-current="activeId === item.id ? 'location' : undefined"
              @click="closeMenu()"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-header-bg);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  min-height: var(--header-height);
}

.header__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-text);
  font-weight: 650;
  text-decoration: none;
}

.header__brand:hover {
  color: var(--color-text);
}

.header__monogram {
  display: grid;
  place-items: center;
  width: 2.125rem;
  height: 2.125rem;
  border-radius: var(--radius-md);
  background-color: var(--color-accent);
  color: var(--color-accent-contrast);
  font-size: var(--text-sm);
  letter-spacing: 0.02em;
}

.header__toggle {
  display: inline-grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  cursor: pointer;
}

.header__nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: none;
  padding: var(--space-3) var(--container-padding) var(--space-5);
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
}

.header__nav.is-open {
  display: block;
}

.header__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin: 0;
}

.header__link {
  display: block;
  padding: var(--space-3) var(--space-3);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  font-size: var(--text-base);
  font-weight: 500;
  text-decoration: none;
  transition:
    color var(--transition),
    background-color var(--transition);
}

.header__link:hover,
.header__link.is-active {
  color: var(--color-text);
  background-color: var(--color-surface-muted);
}

@media (min-width: 48rem) {
  .header__toggle {
    display: none;
  }

  .header__nav {
    position: static;
    display: block;
    padding: 0;
    background: none;
    border: 0;
    box-shadow: none;
  }

  .header__list {
    flex-direction: row;
    gap: var(--space-1);
  }

  .header__link {
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
  }

  .header__link.is-active {
    color: var(--color-accent);
    background-color: var(--color-accent-soft);
  }
}
</style>
