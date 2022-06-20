# hkt-icons

This is the package for HKT icons, for installing it:

```sh
npm install github:TheManFromEarth1/hkt-icons
```

If you are adding a new icon don't forget to export it in its respective `index.js` file.

```js
export { ReactComponent as IconName } from "./IconName.svg"
```

The `index.d.ts` files are updated with a pre-commit hook.

Here is our current list of icons:
https://github.com/TheManFromEarth1/hkt-icons/blob/e9a86eeca1ba6172f20990ccfe739519ae0407c3/default/index.js#L1-L57

To use any of them you just need to do:

```jsx
import { IconName } from "hkt-icons"

const App = () => {
  return (
    <IconName />
  )
}
```
