export interface PokemonListType {
  name: string
  url: string
}

export interface FetchListType {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListType[]
}