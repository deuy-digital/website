import type { SVGProps } from 'react'

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 480 400" role="img" aria-labelledby="deuyDigitalMarkTitle" {...props}>
      <title id="deuyDigitalMarkTitle">Deuy Digital</title>
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M70,90 L125,90 A115,115 0 0 1 125,320 L70,320 Z
           M94,114 L125,114 A91,91 0 0 1 125,296 L94,296 Z"
      />
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M175,90 L230,90 A115,115 0 0 1 230,320 L175,320 Z
           M199,114 L230,114 A91,91 0 0 1 230,296 L199,296 Z"
      />
      <g fill="currentColor">
        <line x1="150" y1="300" x2="366" y2="84" stroke="currentColor" strokeWidth="24" strokeLinecap="square" />
        <polygon points="408,42 388.2,107.0 343.0,61.8" />
      </g>
    </svg>
  )
}

export default LogoMark
