// import icon from "./icon.jsx"
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

import CryptoContent from "/icons/widgets/Crypto.svg"
export const Crypto = icon(CryptoContent)
import MysteryCubeContent from "/icons/widgets/MysteryCube.svg"
export const MysteryCube = icon(MysteryCubeContent)
import OverviewContent from "/icons/widgets/Overview.svg"
export const Overview = icon(OverviewContent)
import QuoteContent from "/icons/widgets/Quote.svg"
export const Quote = icon(QuoteContent)
import RadioContent from "/icons/widgets/Radio.svg"
export const Radio = icon(RadioContent)
import TilContent from "/icons/widgets/Til.svg"
export const Til = icon(TilContent)
import TimerContent from "/icons/widgets/Timer.svg"
export const Timer = icon(TimerContent)
import TvContent from "/icons/widgets/Tv.svg"
export const Tv = icon(TvContent)
