"use client"

// React
import { Fragment } from "react"

// Next
import Image from "next/image"
import Link from "next/link"

// Components
import { TypeButton } from "../actions"

// Utils
import { usePokemonForm } from "../../utils"

export function Pokemon(params: {
  name: string
  url: string
  id: number
  types: string[]
  search: string
}) {
  // Hooks
  const { data } = usePokemonForm(params.url)

  // Vars
  const image = data?.image ?? "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

  if (Boolean(params.search === "" && params.types.length === 0) || Boolean(params.name.match(params.search) && data?.types.find(item => params.types.includes(item.name)))) {
    return (
      <Link href={`/${params.id}`}>
        <div className="w-32">
          <div className="bg-white">
            <Image
              priority
              src={image}
              alt={params.name}
              className="size-32 object-contain"
              height={128}
              width={128}
            />
  
            <div className="capitalize">{params.name}</div>
          </div>
  
          <section className="flex justify-center">
            {data?.types.map((item, key) => (
              <TypeButton
                key={key}
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </TypeButton>
            ))}
          </section>
        </div>
      </Link>
    )
  }

  return <Fragment />
}