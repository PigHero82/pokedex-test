// React
import { PropsWithChildren } from "react"

export function LocaleButton(params: PropsWithChildren<{ active?: boolean }>) {
  return (
    <button
      className={`px-2.5 border-2 border-black uppercase text-sm font-bold ${params.active && "bg-black text-primary"}`}
    >
      {params.children}
    </button>
  )
}