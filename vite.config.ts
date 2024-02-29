import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'
import react from '@vitejs/plugin-react-swc'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { name, version } from './package.json'
import tsconfigPaths from 'vite-tsconfig-paths' // Áp dụng 'paths' trong tsconfig

const require = createRequire(import.meta.url)
const cwd = process.cwd()

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, cwd, '') }

  return {
    plugins: [react(), ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }), tsconfigPaths()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'react-base-ui',
        fileName: 'index',
      },
      outDir: './lib',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    define: {
      pkgJson: { name, version },
    },
  }
})
