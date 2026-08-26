import { useEffect, useRef, useState } from 'react'

interface RevealOptions {
  threshold?: number
  /** Shrinks the detection zone so a section must be scrolled meaningfully
   * into view before it reveals, instead of firing for a sliver that's
   * already visible on page load. */
  rootMargin?: string
}

export function useReveal<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px 0px -200px 0px',
}: RevealOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      setIsVisible(true)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold, rootMargin },
    )
    observer.observe(el)

    // Fallback for fast/instant scrolls (scrollbar-drag, End key, jump
    // links) that can skip an element entirely without ever rendering a
    // frame where it was transitioning through the viewport — the only
    // case IntersectionObserver actually detects. If the element has
    // already been scrolled fully past, reveal it rather than leaving it
    // stuck invisible.
    let ticking = false
    const checkSkippedPast = () => {
      ticking = false
      if (el.getBoundingClientRect().bottom < 0) reveal()
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(checkSkippedPast)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { ref, isVisible }
}
