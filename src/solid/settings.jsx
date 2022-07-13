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

import AddContent from "/icons/settings/Add.svg"
export const Add = icon(AddContent)
import CopyContent from "/icons/settings/Add.svg"
export const Copy = icon(CopyContent)
import DeleteContent from "/icons/settings/Copy.svg"
export const Delete = icon(DeleteContent)
import GridContent from "/icons/settings/Delete.svg"
export const Grid = icon(GridContent)
import ListContent from "/icons/settings/Grid.svg"
export const List = icon(ListContent)
import OpenAllContent from "/icons/settings/List.svg"
export const OpenAll = icon(OpenAllContent)
import SettingsContent from "/icons/settings/OpenAll.svg"
export const Settings = icon(SettingsContent)
