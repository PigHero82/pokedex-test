// Next
import Image from "next/image"
import Link from "next/link"

// Components
import { TypePokemon } from "@/components"
import { LocaleButton, TriangleArrow, TypeCard } from "./components"

// Types
import type { DetailType } from "@/types"

// Utils
import { color_type, getHeight, getWeight } from "@/utils"
import { locale_list } from "./utils"

async function getData(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Detail(query: { params: { id: string } }) {
  // Functions
  const data: DetailType = await getData(query.params.id)

  // Vars
  const effect = "Vivamus sit amet libero id tortor malesuada dapibus. Sed volutpat sed risus sit amet pulvinar. Donec ut metus non tellus finibus rhoncus quis a est. Donec nibh arcu, auctor vel imperdiet vel, ullamcorper consectetur enim. Cras lorem dolor, posuere sit amet tellus quis, vestibulum rhoncus magna. Proin et congue lectus. Vivamus augue lacus, commodo quis augue eu, aliquam finibus lectus."
  const id = data.id

  return (
    <div className="container py-3 flex flex-col gap-3">
      <div className="flex flex-wrap justify-end gap-2">
        {locale_list.map((item, key) => (
          <LocaleButton
            key={key}
            active={item.is_active}
          >
            {item.name}
          </LocaleButton>
        ))}
      </div>

      <div className="flex md:flex-row flex-col md:justify-center items-center gap-20">
        <Image unoptimized src={data.sprites.other.showdown.front_default} alt={data.name} height={300} width={300} />

        <div className="w-full max-w-[500px]">
          <div className="flex flex-col w-full">
            <Link href={`/${id - 1}`} className="self-center">
              <TriangleArrow className="size-6" />
            </Link>

            <div className="flex">
              <Link href={`/${id - 1}`} className="self-center">
                <TriangleArrow className="size-6 -rotate-90" />
              </Link>

              <section className="flex flex-col w-full">
                <div className="flex items-center bg-black pokemon-list-background px-1 text-white text-lg font-bold">
                  <Image src={data.sprites.front_default} alt={data.name} width={40} height={40} />
                  <div className="w-[105px]">No. {query.params.id}</div>
                  <div className="capitalize">{data.name}</div>

                  <div className="ml-auto">
                    <Image src="/images/pokeball.webp" alt={data.name} width={20} height={20} />
                  </div>
                </div>
              </section>

              <Link href={`/${id + 1}`} className="self-center">
                <TriangleArrow className="size-6 rotate-90" />
              </Link>
            </div>

            <Link href={`/${id + 1}`} className="self-center">
              <TriangleArrow className="size-6 rotate-180" />
            </Link>
          </div>

          <div className="flex flex-col text-lg gap-1 mx-8">
            <TypeCard
              brightness="darker"
              textAlign="center"
            >
              Evolution Pokémon
            </TypeCard>

            <div className="grid grid-cols-2">
              <TypeCard
                brightness="darker"
                textAlign="center"
              >
                Type
              </TypeCard>

              <TypeCard
                brightness="lighter"
                textAlign="left"
              >
                <div className="flex flex-wrap gap-1">
                  {data.types.map((item, key) => (
                    <TypePokemon
                      key={key}
                      color={color_type[item.type.name].color}
                      image={color_type[item.type.name].image}
                      name={item.type.name}
                    />
                  ))}
                </div>
              </TypeCard>

              <TypeCard
                brightness="darker"
                textAlign="center"
              >
                Height
              </TypeCard>

              <TypeCard
                brightness="lighter"
                textAlign="left"
              >
                {getHeight(data.height)}
              </TypeCard>

              <TypeCard
                brightness="darker"
                textAlign="center"
              >
                Weight
              </TypeCard>

              <TypeCard
                brightness="lighter"
                textAlign="left"
              >
                {getWeight(data.weight)}
              </TypeCard>

              <TypeCard
                brightness="darker"
                textAlign="center"
              >
                Number Battled
              </TypeCard>

              <TypeCard
                brightness="lighter"
                textAlign="left"
              >
                0
              </TypeCard>
            </div>

            <TypeCard
              brightness="lighter"
              textAlign="left"
              clasName="py-5 px-3"
            >
              {effect}
            </TypeCard>
          </div>
        </div>
      </div>
    </div>
  )
}