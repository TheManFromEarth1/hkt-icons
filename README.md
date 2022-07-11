# hkt-icons

This is the package for HKT icons, for installing it:

```sh
npm install github:TheManFromEarth1/hkt-icons
```

## Icons

Here is our current list of icons:
https://github.com/TheManFromEarth1/hkt-icons/blob/33e0547f9b59739a8091e195c6a1a7781e3de860/lib/solid/index.d.ts#L5-L61
https://github.com/TheManFromEarth1/hkt-icons/blob/33e0547f9b59739a8091e195c6a1a7781e3de860/lib/solid/settings.d.ts#L5-L11
https://github.com/TheManFromEarth1/hkt-icons/blob/33e0547f9b59739a8091e195c6a1a7781e3de860/lib/solid/widgets.d.ts#L5-L12

## Getting started with React

To use any icon you just need to do the following:

```jsx
import { IconName } from "hkt-icons/react"

const App = () => {
  return <IconName />
}
```

## Getting started with SolidJS

To use any icon you just need to do the following:

```jsx
import { IconName } from "hkt-icons/solid"

const App = () => {
  return <IconName />
}
```

## For developers

If you are adding a new icon don't forget to export it in its respective React and SolidJS files files.

```js
// In the React file:
import IconNameContent from "/icons/path/IconName.svg"
export const IconName = icon(IconNameContent)
// In the SolidJS file:
import IconNameContent from "/icons/path/IconName.svg"
export const IconName = icon(IconNameContent)
// In the React .d.ts file:
export const IconName: Icon
// In the SolidJS .d.ts file:
export const IconName: Icon
```
