# hkt-icons
This is the package for HKT icons, for installing it:
```sh
npm install git+ssh://git@github.com/TheManFromEarth1/hkt-icons.git
```
(note: the user that is installing it must have access to this repository)

If you are adding a new icon don't forget to export it in its respective `index.js` file.
```js
export { ReactComponent as IconName } from "./IconName.svg"
```
