"use client"

// React
import { useState } from "react"

export function useToggle(defaultValue: boolean) {
  // Hooks
  const [isActive, setActive] = useState(defaultValue)

  const toggle = (): void => {
    setActive(prev => !prev)
  }

  return { isActive, toggle }
}