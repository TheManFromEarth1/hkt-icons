import type { FC, SVGProps } from "react"

type Icon = FC<SVGProps<SVGSVGElement>>

declare const icon: (content: string) => Icon

export default icon
