export interface SuccessFetch<T> {
  data: {
    [K in keyof T]: T[K]
  }
}