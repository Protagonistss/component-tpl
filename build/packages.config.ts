import baseConfig from './base.config'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, '../packages/components/index.ts'),
      name: 'HDC',
      formats: ['es', 'umd'],
      fileName: (format) => `hdc.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    ...(baseConfig as any).plugins,
    dts({
      outputDir: 'dist/types',
      include: ['packages', 'typings']
    })
  ]
})
