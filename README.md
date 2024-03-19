# unplugin-import-bin

Import binary file as array buffer.

## Usage

```ts
import buffer from './path/to/file?bin'
console.log(buffer) // => Uint8Array[...]
```

## Install

```bash
npm i unplugin-import-bin
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import ImportBin from 'unplugin-import-bin/vite'

export default defineConfig({
  plugins: [
    ImportBin({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import ImportBin from 'unplugin-import-bin/rollup'

export default {
  plugins: [
    ImportBin({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-import-bin/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-import-bin/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-import-bin/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import ImportBin from 'unplugin-import-bin/esbuild'

build({
  plugins: [ImportBin()],
})
```

<br></details>
