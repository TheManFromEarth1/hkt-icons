import { mergeProps } from "solid-js"

const icon = (content) => {
  return (baseProps) => {
    const props = mergeProps(
      {
        fill: "currentColor",
        width: 40,
        height: 40,
        xmlns: "http://www.w3.org/2000/svg",
      },
      baseProps
    )
    return <svg {...props} innerHTML={content} />
  }
}

export default icon
