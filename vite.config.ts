import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'
import react from '@vitejs/plugin-react-swc'
import { createRequire } from 'node:module'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths' // Áp dụng 'paths' trong tsconfig

const require = createRequire(import.meta.url)
const cwd = process.cwd()

export default defineConfig(async ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, cwd, '') }

  // https://vitejs.dev/config/
  return {
    plugins: [react(), ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'happy-dom',
      reporters: ['default', 'html'],
    },
    envPrefix: process.env.APP_ENV_PREFIX,
    assetsInclude: ['**/*.xlsx'],
    build: {
      outDir: process.env.APP_BUILD_OUT_DIR, // Default 'dist'
    },
    base: process.env.APP_BASE,
    publicDir: process.env.APP_PUBLIC_DIR,
    define: {
      __APP_RUN_COMMAND__: JSON.stringify(process.env.APP_RUN_COMMAND),
      __APP_VERSION__: JSON.stringify(process.env.APP_VERSION),
      __APP_BUILT_AT__: JSON.stringify(process.env.APP_BUILT_AT),
      __APP_BUILT_BY_NAME__: JSON.stringify(process.env.APP_BUILT_BY_NAME),
      __APP_BUILT_BY_EMAIL__: JSON.stringify(process.env.APP_BUILT_BY_EMAIL),
      __APP_ENV__: JSON.stringify(process.env.APP_ENV),
      __APP_ENV_ACRONYMS__: JSON.stringify(process.env.APP_ENV_ACRONYMS),
      __APP_ENV_PREFIX__: JSON.stringify(process.env.APP_ENV_PREFIX),
      __APP_PUBLIC_DIR__: JSON.stringify(process.env.APP_PUBLIC_DIR),
      __APP_BASE__: JSON.stringify(process.env.APP_BASE),
      __APP_BUILD_OUT_DIR__: JSON.stringify(process.env.APP_BUILD_OUT_DIR),
      __APP_URL_PREFIX__: JSON.stringify(process.env.APP_URL_PREFIX),
      __APP_SERVER_PORT__: process.env.APP_SERVER_PORT,
      __APP_PREVIEW_PORT__: process.env.APP_PREVIEW_PORT,
    },
  }
})
