// Types
import Image from "next/image"
import type { DetailType } from "./types"
import { LocaleButton } from "./components"
import { TriangleArrow } from "@/components"

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
  const locale_list = [
    {
      name: "chs",
      is_active: false,
    },
    {
      name: "cht",
      is_active: false,
    },
    {
      name: "eng",
      is_active: true,
    },
    {
      name: "fra",
      is_active: false,
    },
    {
      name: "ger",
      is_active: false,
    },
    {
      name: "ita",
      is_active: false,
    },
    {
      name: "jpn",
      is_active: false,
    },
    {
      name: "kor",
      is_active: false,
    },
    {
      name: "spa",
      is_active: false,
    },
  ]

  return (
    <div className="container pt-3 flex flex-col gap-3">
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

      <div className="flex justify-end gap-20">
        <Image src={data.sprites.other.showdown.front_default} alt={data.name} height={300} width={300} />

        <div className="flex justify-end items-center w-full max-w-[500px]">
          <div className="flex flex-col w-full">
            <TriangleArrow className="self-center size-6" />

            <div className="flex">
              <TriangleArrow className="self-center size-6 -rotate-90" />

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

              <TriangleArrow className="self-center size-6 rotate-90" />
            </div>

            <TriangleArrow className="self-center size-6 rotate-180" />
          </div>
        </div>
      </div>
    </div>
  )
}