// React
import { Fragment } from "react"

// Next
import Image from "next/image"

// Components
import { TypePokemon } from "@/components"
import { ComparisonModal } from ".."

// Icons
import { TbGitCompare } from "react-icons/tb"

// Third-Party Libraries
import ReactSelect from "react-select"

// Types
import type { PokemonListType } from "../../types"

// Utils
import { color_type, getHeight, getWeight, useToggle } from "@/utils"
import { useDetailPokemon } from "../../utils"

export function ComparePokemon(params: {
  list: PokemonListType[]
}) {
  // Hooks
  const firstPokemon = useDetailPokemon()
  const secondPokemon = useDetailPokemon()
  const { isActive, toggle } = useToggle(false)

  return (
    <Fragment>
      <div className="fixed bottom-0 right-0">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center m-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          title="Compare Pokémon"
          onClick={toggle}
        >
          <TbGitCompare className="size-8" />
          <span className="sr-only">Compare Pokémon</span>
        </button>
      </div>

      {isActive && (
        <ComparisonModal show={isActive} onClose={toggle}>
          <div className="text-xl text-center font-bold mb-3">Comparison</div>

          <div className="flex justify-center">
            <div className="w-full mx-auto">
              <table className="w-full text-center font-bold">
                <tbody>
                  <tr>
                    <td className="!w-[200px]"></td>
                    <td className="!w-[400px]">
                      <ReactSelect
                        placeholder="Select Pokemon..."
                        options={params.list.map((item, key) => {
                          return {
                            label: item.name,
                            value: key + 1
                          }
                        })}
                        onChange={e => firstPokemon.fetchPokemon(e!.value)}
                      />
                    </td>
                    <td className="!w-[400px]">
                      <ReactSelect
                        placeholder="Select Pokemon..."
                        options={params.list.map((item, key) => {
                          return {
                            label: item.name,
                            value: key + 1
                          }
                        })}
                        onChange={e => secondPokemon.fetchPokemon(e!.value)}
                      />
                    </td>
                  </tr>
                  <tr className="!min-h-[200px]">
                    <td></td>
                    <td>
                      <div className="flex justify-center">
                        {firstPokemon.data && (
                          <Image
                            src={firstPokemon.data.sprites.other.showdown.front_default}
                            alt={firstPokemon.data.name}
                            width={300}
                            height={300}
                            className="fit-contain"
                          />
                        )}
                      </div>
                    </td>
                    <td className="flex justify-center">
                      {secondPokemon.data && (
                        <Image
                          src={secondPokemon.data.sprites.other.showdown.front_default}
                          alt={secondPokemon.data.name}
                          width={300}
                          height={300}
                          className="fit-contain"
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>
                      <div className="flex flex-wrap justify-center gap-1">
                        {firstPokemon.data && firstPokemon.data.types.map((item, key) => (
                          <TypePokemon
                            key={key}
                            color={color_type[item.type.name].color}
                            image={color_type[item.type.name].image}
                            name={item.type.name}
                          />
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-wrap justify-center gap-1">
                        {secondPokemon.data && secondPokemon.data.types.map((item, key) => (
                          <TypePokemon
                            key={key}
                            color={color_type[item.type.name].color}
                            image={color_type[item.type.name].image}
                            name={item.type.name}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{getHeight(firstPokemon.data?.height ?? 0)}</td>
                    <td>{getHeight(secondPokemon.data?.height ?? 0)}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{getWeight(firstPokemon.data?.weight ?? 0)}</td>
                    <td>{getWeight(secondPokemon.data?.weight ?? 0)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ComparisonModal>
      )}
    </Fragment>
  )
}