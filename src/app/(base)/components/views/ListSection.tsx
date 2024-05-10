"use client"

// React
import { useEffect } from "react"

// Components
import { Pokemon } from "../displays"
import { ComparePokemon } from "./ComparePokemon"

// Third-Party Libraries
import ReactSelect from "react-select"

// Types
import type { FetchListType } from "../../types"

// Utils
import { type_option, useFilter, usePokemonList, useScrollPosition } from "../../utils"

export function ListSection(params: { data: FetchListType }) {
  // Hooks
  const scrollPosition = useScrollPosition()
  const { isLoading, state, fetchMoreData } = usePokemonList(params.data)
  const { search, types, onChangeSearch, onChangeTypes } = useFilter()

  useEffect(() => {
    if (scrollPosition === 100 || document.documentElement.scrollHeight === document.documentElement.clientHeight) {
      fetchMoreData()
    }
  }, [scrollPosition])

  return (
    <div>
      <div className="container my-2 flex flex-col gap-1">
        <ReactSelect
          isMulti
          placeholder="Select Type..."
          options={type_option}
          onChange={e => onChangeTypes(e?.map(e => e.value) ?? [])}
        />

        <input
          className="input"
          placeholder="Search..."
          defaultValue={search}
          onChange={e => onChangeSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-1">
        {state.data.map((item, key) => (
          <Pokemon
            key={key}
            id={key + 1}
            name={item.name}
            search={search}
            types={types}
            url={item.url}
          />
        ))}
      </div>

      {state.more && (
        <div className="flex justify-center mt-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            disabled={isLoading}
            onClick={fetchMoreData}
          >
            Load More
          </button>
        </div>
      )}

      <ComparePokemon list={state.data} />
    </div>
  )
}