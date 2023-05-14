// vite.config.ts
import { resolve } from "node:path";
import { defineConfig } from "file:///C:/Users/Iridescent/Desktop/%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%AE%9E%E6%88%98/sparkle-recognition/node_modules/.pnpm/vite@4.3.2_@types+node@18.15.11/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Iridescent/Desktop/%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%AE%9E%E6%88%98/sparkle-recognition/node_modules/.pnpm/@vitejs+plugin-react-swc@3.0.0_vite@4.3.2/node_modules/@vitejs/plugin-react-swc/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Iridescent\\Desktop\\\u8F6F\u4EF6\u5DE5\u7A0B\\\u673A\u5668\u5B66\u4E60\u5B9E\u6218\\sparkle-recognition\\packages\\web";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxJcmlkZXNjZW50XFxcXERlc2t0b3BcXFxcXHU4RjZGXHU0RUY2XHU1REU1XHU3QTBCXFxcXFx1NjczQVx1NTY2OFx1NUI2Nlx1NEU2MFx1NUI5RVx1NjIxOFxcXFxzcGFya2xlLXJlY29nbml0aW9uXFxcXHBhY2thZ2VzXFxcXHdlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSXJpZGVzY2VudFxcXFxEZXNrdG9wXFxcXFx1OEY2Rlx1NEVGNlx1NURFNVx1N0EwQlxcXFxcdTY3M0FcdTU2NjhcdTVCNjZcdTRFNjBcdTVCOUVcdTYyMThcXFxcc3BhcmtsZS1yZWNvZ25pdGlvblxcXFxwYWNrYWdlc1xcXFx3ZWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0lyaWRlc2NlbnQvRGVza3RvcC8lRTglQkQlQUYlRTQlQkIlQjYlRTUlQjclQTUlRTclQTglOEIvJUU2JTlDJUJBJUU1JTk5JUE4JUU1JUFEJUE2JUU0JUI5JUEwJUU1JUFFJTlFJUU2JTg4JTk4L3NwYXJrbGUtcmVjb2duaXRpb24vcGFja2FnZXMvd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAvLyByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRlLFNBQVMsZUFBZTtBQUNwZ0IsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsTUFFaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
