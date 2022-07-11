import { mergeProps } from "solid-js"
import h from "solid-js/h"

const icon = (content) => {
  return (baseProps) => {
    const props = mergeProps(
      {
        innerHTML: content,
        fill: "currentColor",
        width: 40,
        height: 40,
        xmlns: "http://www.w3.org/2000/svg",
      },
      baseProps
    )

    return h("svg", props)
  }
}

export default icon
