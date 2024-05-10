// Components
import { ListSection } from "./components"

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

  return <ListSection data={data} />
}
