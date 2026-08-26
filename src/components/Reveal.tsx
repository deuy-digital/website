import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
}

export function Reveal({ children }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal${isVisible ? ' is-visible' : ''}`}>
      {children}
    </div>
  )
}

export default Reveal
