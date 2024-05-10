// React
import { useReducer, useState } from "react"

// Types
import type { SuccessFetch } from "@/types"
import type { FetchListType, PokemonListType } from "../../types"

// Utils
import { getApi } from "@/utils"

interface PayloadType {
  count: number
  data: PokemonListType[]
  more: boolean
}

interface Action {
  type: "add_data" | "no_data"
  payload: PokemonListType[]
}

type State = PayloadType

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add_data":
      return {
        count: state.count + action.payload.length,
        more: action.payload.length === 100,
        data: [
          ...state.data,
          ...action.payload
        ]
      }

    case "no_data":
      return {
        ...state,
        more: false
      }
  
    default:
      return state;
  }
}

export function usePokemonList(defaultList: FetchListType) {
  // Hooks
  const [state, dispatch] = useReducer(reducer, {
    more: true,
    count: defaultList.results.length,
    data: defaultList.results
  })
  const [isLoading, setLoading] = useState(false)

  const fetchMoreData = (): void => {
    setLoading(true)

    if (state.more) {
      getApi().get("https://pokeapi.co/api/v2/pokemon", {
        params: {
          limit: 100,
          offset: state.count
        }
      }).then((res: SuccessFetch<{
        results: PokemonListType[]
      }>) => {
        dispatch({
          type: "add_data",
          payload: res.data.results
        })
      }).catch(() => {
        dispatch({
          type: "no_data",
          payload: []
        })
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  return { isLoading, state, fetchMoreData }
}