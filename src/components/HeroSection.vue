<script setup>
import { ref } from 'vue'
import { profile } from '@/data/profile'
import { sortedExperience } from '@/data/experience'
import { publicUrl } from '@/utils/assets'
import BaseIcon from './BaseIcon.vue'

const currentRole = sortedExperience.find((job) => job.end === null)

// If the photo fails to load, drop it so the hero falls back to a single text column.
const showPhoto = ref(Boolean(profile.photo?.src))
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-heading">
    <div class="container hero__inner" :class="{ 'hero__inner--with-photo': showPhoto }">
      <div class="hero__content">
        <p class="hero__meta">
          <span class="hero__location">
            <BaseIcon name="location" :size="16" />
            {{ profile.location }}
          </span>
          <span v-if="currentRole" class="hero__current">
            <span class="hero__dot" aria-hidden="true"></span>
            {{ currentRole.role }} at {{ currentRole.company }}
          </span>
        </p>

        <h1 id="hero-heading" class="hero__title">
          {{ profile.name }}
          <span class="hero__headline">{{ profile.headline }}</span>
        </h1>

        <p class="hero__tagline">{{ profile.tagline }}</p>
        <p class="hero__intro">{{ profile.intro }}</p>

        <div class="hero__actions">
          <a v-if="profile.email" :href="`mailto:${profile.email}`" class="button button--primary">
            <BaseIcon name="mail" :size="16" />
            Contact me
          </a>
          <a
            v-if="profile.resumeUrl"
            :href="publicUrl(profile.resumeUrl)"
            class="button button--secondary"
            :download="profile.resumeFileName || ''"
            type="application/pdf"
          >
            <BaseIcon name="download" :size="16" />
            Download résumé
            <span class="visually-hidden">(PDF)</span>
          </a>
          <a
            href="#projects"
            class="button"
            :class="profile.email ? 'button--secondary' : 'button--primary'"
          >
            View projects
          </a>
          <a href="#experience" class="button button--secondary">Experience</a>
        </div>

        <ul role="list" class="hero__links" aria-label="Profiles">
          <li v-for="link in profile.links" :key="link.url">
            <a :href="link.url" class="hero__link" target="_blank" rel="noopener noreferrer">
              <BaseIcon :name="link.icon" :size="18" />
              <span>{{ link.label }}</span>
              <span class="visually-hidden">(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>

      <div v-if="showPhoto" class="hero__photo">
        <img
          :src="publicUrl(profile.photo.src)"
          :alt="profile.photo.alt"
          width="315"
          height="315"
          decoding="async"
          fetchpriority="high"
          @error="showPhoto = false"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(4rem, 2rem + 8vw, 8rem) clamp(4rem, 2rem + 6vw, 7rem);
  background:
    radial-gradient(60rem 30rem at 85% -10%, var(--color-accent-soft), transparent 70%),
    var(--color-bg);
}

.hero__inner {
  display: grid;
  gap: var(--space-7);
  max-width: var(--container-width);
}

.hero__content {
  min-width: 0;
}

/* Photo sits above the text on small screens; DOM order keeps the heading first for screen readers. */
.hero__photo {
  order: -1;
  width: clamp(7.5rem, 30vw, 10rem);
  aspect-ratio: 1;
}

.hero__photo img {
  width: 100%;
  height: 100%;
  border: 4px solid var(--color-surface);
  border-radius: 50%;
  background-color: var(--color-surface-muted);
  box-shadow:
    0 0 0 1px var(--color-border),
    var(--shadow-md);
  object-fit: cover;
  object-position: center top;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-5);
  margin-bottom: var(--space-6);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.hero__location,
.hero__current {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.hero__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-accent);
  box-shadow: 0 0 0 4px var(--color-accent-soft);
}

.hero__title {
  font-size: var(--text-display);
  font-weight: 700;
  letter-spacing: -0.03em;
}

.hero__headline {
  display: block;
  margin-top: var(--space-2);
  color: var(--color-text-subtle);
  font-weight: 600;
}

.hero__tagline {
  margin-top: var(--space-5);
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 500;
}

.hero__intro {
  max-width: 40rem;
  margin-top: var(--space-4);
  color: var(--color-text-muted);
  font-size: var(--text-lg);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  margin-top: var(--space-6);
}

.hero__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding-block: var(--space-1);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
}

.hero__link:hover {
  color: var(--color-text);
}

/* Side-by-side from tablet landscape upwards */
@media (min-width: 56rem) {
  .hero__inner--with-photo {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--space-8);
  }

  .hero__photo {
    order: 0;
    width: clamp(13rem, 10rem + 6vw, 17.5rem);
  }
}
</style>
