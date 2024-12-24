// electron.vite.config.ts
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from "electron-vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@store": resolve("src/renderer/src/store"),
        "@utils": resolve("src/renderer/src/utils"),
        "@components": resolve("src/renderer/src/components"),
        "@router": resolve("src/renderer/src/router"),
        "@views": resolve("src/renderer/src/views"),
        "@assets": resolve("src/renderer/src/assets"),
        "@styles": resolve("src/renderer/src/styles"),
        "@api": resolve("src/renderer/src/api"),
        "@hooks": resolve("src/renderer/src/hooks")
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://uat.crm.xuexiluxian.cn',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  }
});
export {
  electron_vite_config_default as default
};
