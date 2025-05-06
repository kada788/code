import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// 预先加载UI  组件库
import Components from 'unplugin-vue-components/vite'
// 引入vant组件  编译阶段 自动引入 快
import { VantResolver } from '@vant/auto-import-resolver'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith('wc-') }
      }
    }),
    Components({
      resolvers: [
        VantResolver()
      ]
    }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': resolve(__dirname, 'src')
    }
  }
})
