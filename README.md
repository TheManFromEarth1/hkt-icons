# hkt-icons

This is the package for HKT icons, for installing it:

```sh
npm install github:TheManFromEarth1/hkt-icons
```

## Icons

Here is our current list of icons:
https://github.com/TheManFromEarth1/hkt-icons/blob/e9a86eeca1ba6172f20990ccfe739519ae0407c3/default/index.js#L1-L57

## Getting started with React

To use any icon you just need to do the following:

```jsx
import { IconName } from "hkt-icons"

const App = () => {
  return <IconName />
}
```

## Getting started with SolidJS

To use any icon you just need to do the following:

```jsx
import { IconName } from "hkt-icons/solid-js"

const App = () => {
  return <IconName />
}
```

## For developers

If you are adding a new icon don't forget to export it in its respective React and SolidJS `index.js` files.

```js
// In the React file:
export { ReactComponent as IconName } from "./IconName.svg"
// In the SolidJS file:
import IconNameSVG from "bundle-text:./IconName.svg"
export const IconName = (props) =>
  h("span", {
    style: { color: props.color ?? "#000" },
    innerHTML: IconNameSVG,
  })
```

The `index.d.ts` files are updated with a pre-commit hook.
