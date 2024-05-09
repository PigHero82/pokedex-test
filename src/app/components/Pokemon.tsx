"use client"

// Next
import Image from "next/image"

// Components
import { TypeButton } from "@/app/components"

// Utils
import { usePokemonForm } from "../utils"

export function Pokemon(params: {
  name: string
  url: string
}) {
  // Hooks
  const { data } = usePokemonForm(params.url)

  // Vars
  const image = data?.image ?? "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

  return (
    <div className="w-32">
      <div className="bg-white">
        <Image
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
  )
}