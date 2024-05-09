// Components
import { Pokemon } from "./components"

// Types
import { FetchListType } from "@/app/(base)/types"

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data: FetchListType = await getData()

  return (
    <div className="flex flex-wrap justify-center gap-1">
      {data.results.map((item, key) => (
        <Pokemon
          key={key}
          id={key + 1}
          name={item.name}
          url={item.url}
        />
      ))}
    </div>
  )
}
