// React
import { useState } from "react"

export function useFilter() {
  // Hooks
  const [search, setSearch] = useState("")
  const [types, setTypes] = useState<string[]>([])

  const onChangeTypes = (value: string[]): void => {
    setTypes(value)
  }

  const onChangeSearch = (value: string): void => {
    setSearch(value)
  }

  return { search, types, onChangeSearch, onChangeTypes }
}