// vite.config.js
import vue from "file:///C:/Users/bobwo/source/codeworks/boiseCodeWorks/Week6/blogger/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/bobwo/source/codeworks/boiseCodeWorks/Week6/blogger/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [vue()],
  build: {
    outDir: "docs",
    sourcemap: false
  },
  server: {
    port: 8080
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxib2J3b1xcXFxzb3VyY2VcXFxcY29kZXdvcmtzXFxcXGJvaXNlQ29kZVdvcmtzXFxcXFdlZWs2XFxcXGJsb2dnZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGJvYndvXFxcXHNvdXJjZVxcXFxjb2Rld29ya3NcXFxcYm9pc2VDb2RlV29ya3NcXFxcV2VlazZcXFxcYmxvZ2dlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYm9id28vc291cmNlL2NvZGV3b3Jrcy9ib2lzZUNvZGVXb3Jrcy9XZWVrNi9ibG9nZ2VyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJ2RvY3MnLFxyXG4gICAgc291cmNlbWFwOiBmYWxzZVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA4MDgwXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNYLE9BQU8sU0FBUztBQUN0WSxTQUFTLG9CQUFvQjtBQUc3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=