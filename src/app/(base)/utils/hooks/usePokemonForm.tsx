// React
import { useEffect, useState } from "react"

// Utils
import { color_type, getApi } from "@/utils"

export function usePokemonForm(url: string) {
  // Hooks
  const [data, setData] = useState<null | {
    image: string
    types: {
      name: string
      color: string
    }[]
  }>(null)

  useEffect(() => {
    getApi().get(url).then(res => {
      // Vars
      const data: {
        sprites: {
          front_default: string
        }
        types: {
          type: {
            name: string
          }
        }[]
      } = res.data

      setData({
        image: data.sprites.front_default,
        types: data.types.map(item => {
          // Vars
          const name = item.type.name

          return {
            name,
            color: color_type[name].color
          }
        })
      })
    }).catch(() => {
      setData(null)
    })

    return () => {
      setData(null)
    }
  }, [])

  return { data }
}