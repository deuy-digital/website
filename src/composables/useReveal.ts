import { onMounted, onUnmounted, ref, type ShallowRef } from 'vue'

interface RevealOptions {
  threshold?: number
  /** Shrinks the detection zone so a section must be scrolled meaningfully
   * into view before it reveals, instead of firing for a sliver that's
   * already visible on page load. */
  rootMargin?: string
}

export function useReveal(
  el: Readonly<ShallowRef<HTMLElement | null>>,
  { threshold = 0.2, rootMargin = '0px 0px -200px 0px' }: RevealOptions = {},
) {
  const isVisible = ref(false)
  let cleanup: (() => void) | undefined

  onMounted(() => {
    const target = el.value
    if (!target) return

    const reveal = () => {
      isVisible.value = true
      cleanup?.()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold, rootMargin },
    )
    observer.observe(target)

    // Fallback for fast/instant scrolls (scrollbar-drag, End key, jump
    // links) that can skip an element entirely without ever rendering a
    // frame where it was transitioning through the viewport — the only
    // case IntersectionObserver actually detects. If the element has
    // already been scrolled fully past, reveal it rather than leaving it
    // stuck invisible.
    let ticking = false
    const checkSkippedPast = () => {
      ticking = false
      if (target.getBoundingClientRect().bottom < 0) reveal()
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(checkSkippedPast)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    cleanup = () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  })

  onUnmounted(() => cleanup?.())

  return isVisible
}
