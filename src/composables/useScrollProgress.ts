import { onMounted, onUnmounted, type ShallowRef } from 'vue'

/**
 * Writes how far an element has travelled through the viewport to its `--p`
 * custom property (0 → 1), so CSS can drive scroll-linked effects from it.
 * 0 is when the element's top reaches 85% of the viewport height, 1 when its
 * bottom reaches 55%.
 *
 * Without JS, and with reduced motion, `--p` keeps its CSS default.
 */
export function useScrollProgress(el: Readonly<ShallowRef<HTMLElement | null>>) {
  let cleanup: (() => void) | undefined

  onMounted(() => {
    const target = el.value
    if (!target) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    const update = () => {
      ticking = false
      const rect = target.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.3)
      target.style.setProperty('--p', Math.min(1, Math.max(0, progress)).toFixed(3))
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    cleanup = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  })

  onUnmounted(() => cleanup?.())
}
