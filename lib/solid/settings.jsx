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

/* babel-plugin-inline-import '../../icons/settings/Add.svg' */
const AddContent =
  '<rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#090909"/><path fill="#090909" d="M12 6h1v13h-1z"/><path fill="#090909" d="M6 13v-1h13v1z"/>'
export const Add = icon(AddContent)

/* babel-plugin-inline-import '../../icons/settings/Add.svg' */
const CopyContent =
  '<rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#090909"/><path fill="#090909" d="M12 6h1v13h-1z"/><path fill="#090909" d="M6 13v-1h13v1z"/>'
export const Copy = icon(CopyContent)

/* babel-plugin-inline-import '../../icons/settings/Copy.svg' */
const DeleteContent =
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4h9a1 1 0 0 1 1 1v1h1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" fill="currentColor"/><rect x="8.5" y="8.5" width="12" height="12" rx="1.5" stroke="currentColor"/>'
export const Delete = icon(DeleteContent)

/* babel-plugin-inline-import '../../icons/settings/Delete.svg' */
const GridContent =
  '<path d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12ZM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6Zm12-1V5h-4l-1-1h-3L9 5H5v1h13ZM8 9h1v10H8V9Zm6 0h1v10h-1V9Z" fill="currentColor"/>'
export const Grid = icon(GridContent)

/* babel-plugin-inline-import '../../icons/settings/Grid.svg' */
const ListContent =
  '<g opacity=".5"><path d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM6 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm12 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" fill="#090909"/></g>'
export const List = icon(ListContent)

/* babel-plugin-inline-import '../../icons/settings/List.svg' */
const OpenAllContent =
  '<path d="M6 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" fill="#090909"/><rect x="10" y="4" width="10" height="4" rx="2" fill="#090909"/><rect x="10" y="10" width="10" height="4" rx="2" fill="#090909"/><rect x="10" y="16" width="10" height="4" rx="2" fill="#090909"/>'
export const OpenAll = icon(OpenAllContent)

/* babel-plugin-inline-import '../../icons/settings/OpenAll.svg' */
const SettingsContent =
  '<path d="M6 7h4v1H7.707l6.718 6.717-.708.708L7 8.707V11H6V7Zm14 14H8v-9l1 1v7h10V10h-7l-1-1h9v12ZM3 16V4h12v3h-1V5H4v10h2v1H3Z" fill="#090909"/>'
export const Settings = icon(SettingsContent)
