import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tracks which page section is currently in view so the navigation
 * can highlight it. Returns a ref holding the active section id.
 */
export function useActiveSection(sectionIds) {
  const activeId = ref('')
  let observer

  onMounted(() => {
    if (!('IntersectionObserver' in window)) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeId.value = entry.target.id
        }
      },
      // A section counts as "active" when it crosses a band just below the header.
      { rootMargin: '-30% 0px -60% 0px' },
    )

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return activeId
}
