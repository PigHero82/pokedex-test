// React
import { PropsWithChildren } from "react"

export function TypeCard(params: PropsWithChildren<{
  brightness: "darker" | "lighter"
  clasName?: string
  textAlign: "center" | "left"
}>) {
  // Vars
  const brightness = {
    darker: "bg-gray-200",
    lighter: "bg-gray-100"
  }
  const textAlign = {
    center: "text-center",
    left: "text-left"
  }

  return (
    <div
      className={`${params.clasName} p-1 font-bold ${brightness[params.brightness]} ${textAlign[params.textAlign]}`}
    >
      {params.children}
    </div>)
}