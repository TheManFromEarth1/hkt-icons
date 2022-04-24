import React from "react"

export function Play({ fill = "black" }) {
  return (
    <svg
      width="33"
      height="35"
      viewBox="0 0 33 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1365 20.1066L7.66137 32.5034C5.83887 33.5544 3.5 32.2818 3.5 30.1631V5.36939C3.5 3.254 5.8355 1.97805 7.66137 3.03239L29.1365 15.4292C29.5511 15.6647 29.8957 16.005 30.1354 16.4158C30.3751 16.8265 30.5013 17.293 30.5013 17.7679C30.5013 18.2428 30.3751 18.7093 30.1354 19.1201C29.8957 19.5308 29.5511 19.8711 29.1365 20.1066V20.1066Z"
        fill={fill}
      />
    </svg>
  )
}
