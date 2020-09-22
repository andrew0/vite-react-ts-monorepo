import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'
import path from 'path'

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  optimizeDeps: {
    link: ['vite-react-ts-components'],
  },
  alias: {
    'vite-react-ts-components': '/@linked/vite-react-ts-components/index.tsx',
    '/@linked/vite-react-ts-components/': path.resolve(require.resolve('vite-react-ts-components/package.json'), '../src')
  }
}

export default config
