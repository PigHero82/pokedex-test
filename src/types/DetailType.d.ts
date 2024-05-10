export interface DetailType {
  ability: {
    effect_entries: {
      effect: string
    }[]
  }
  height: number
  id: number
  name: string
  sprites: {
    front_default: string
    other: {
      showdown: {
        front_default: string
      }
    }
  }
  types: {
    type: {
      name: string
    }
  }[]
  weight: number
}