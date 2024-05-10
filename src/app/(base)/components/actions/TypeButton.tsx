// React
import { CSSProperties, PropsWithChildren } from "react"

export function TypeButton(params: PropsWithChildren<{
  className?: string
  style?: CSSProperties
}>) {
  return <button {...params} className={`py-1 px-3 rounded-full text-xs font-medium text-white ${params.className}`} />
}