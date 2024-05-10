// Next
import Image from "next/image"

export function TypePokemon(params: {
  color: string
  image: string
  name: string
}) {
  return (
    <div
      className="rounded-lg"
      // style={{ backgroundColor: color_type[item.type.name].color }}
      style={{ backgroundColor: params.color }}
    >
      <div className="flex w-fit px-1 rounded-lg uppercase gap-1 type-background">
        <Image
          // src={color_type[item.type.name].image}
          src={params.image}
          alt="item.type.name"
          className="fit-contain"
          height={20}
          width={24}
        />

        {/* <div className="text-white">{item.type.name}</div> */}
        <div className="text-white">{params.name}</div>
      </div>
    </div>
  )
}