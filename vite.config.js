import { defineConfig } from 'vite'
import solid from 'solid-start'
import WindiCSS from 'vite-plugin-windicss'

const STATIC = process.env['STATIC'] === 'true' || false

export default defineConfig({
  plugins: [
    solid({
      adapter: `solid-start-${STATIC ? 'static' : 'node'}`,
      ssr: true,
      preferStreaming: false,
      prerenderRoutes: [],
    }),
    WindiCSS.default({
      scan: {
        dirs: ['./src'],
        fileExtensions: ['html', 'js', 'ts', 'jsx', 'tsx'],
      },
    }),
  ],
})
