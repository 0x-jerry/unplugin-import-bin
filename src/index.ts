import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import fsp from 'node:fs/promises'

const binRE = /\?bin$/

const HelperModuleID = 'virtual:unplugin-import-bin/helper.ts'

export const unpluginFactory: UnpluginFactory<Options | undefined> = options => {
  const publicDir: string[] = []

  return {
    name: 'unplugin-starter',
    vite: {
      configResolved(config) {
        publicDir.push(config.publicDir)
      },
    },
    enforce: 'pre',
    resolveId(id, importer, options) {
      if (id === HelperModuleID) return HelperModuleID
    },
    loadInclude(id) {
      return binRE.test(id) || id === HelperModuleID
    },
    async load(id) {
      if (id === HelperModuleID) {
        return `
          export function base64ToBuffer(b64) {
            return Uint8Array.from(atob(b64), c => c.charCodeAt(0))
          }
        `
      }

      const filePath = id.slice(0, -4)

      this.addWatchFile(filePath)
      const file = await fsp.readFile(filePath)

      const base64 = file.toString('base64')

      return `
      import { base64ToBuffer } from '${HelperModuleID}'

      const b64 = ${JSON.stringify(base64)};
      const buffer = base64ToBuffer(b64)

      export default buffer;
    `
    },
  }
}


export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
