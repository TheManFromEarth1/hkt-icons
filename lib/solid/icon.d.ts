import type { Component, JSX } from "solid-js"

type Icon = Component<JSX.IntrinsicElements["svg"]>

declare const icon: (content: string) => Icon

export default icon
