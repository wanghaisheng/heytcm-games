"use client"

import { useEffect, useRef } from "react"

interface ParticlesProps {
  count?: number
  type?: "metal" | "wood" | "water" | "fire" | "earth" | "all"
}

export function Particles({ count = 50, type = "all" }: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    container.innerHTML = ""

    const types = type === "all" ? ["metal", "wood", "water", "fire", "earth"] : [type]

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div")
      const size = Math.random() * 8 + 2
      const selectedType = types[Math.floor(Math.random() * types.length)]

      particle.className = `particle particle-${selectedType}`
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 5}s`
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`

      container.appendChild(particle)
    }
  }, [count, type])

  return <div ref={containerRef} className="particles-container" />
}

