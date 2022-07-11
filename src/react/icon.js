import { createElement } from "react"

const icon = (content) => {
  return ({ fill = "currentColor", width = 24, height = 24, ...rest }) => {
    return createElement("svg", {
      dangerouslySetInnerHTML: { __html: content },
      xmlns: "http://www.w3.org/2000/svg",
      fill: fill,
      width: width,
      height: height,
      ...rest,
    })
  }
}

export default icon
