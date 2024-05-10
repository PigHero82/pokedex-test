// React
import { useState } from "react"

// Types
import type { DetailType, SuccessFetch } from "@/types"

// Utils
import { getApi } from "@/utils"

export function useDetailPokemon() {
  // Hooks
  const [data, setData] = useState<DetailType | null>(null)

  const fetchPokemon = (id: number): void => {
    setData(null)

    getApi().get(`/pokemon/${id}`).then((res: SuccessFetch<DetailType>) => {
      setData(res.data)
    })
  }

  return { data, fetchPokemon }
}