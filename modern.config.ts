import appTools, { defineConfig } from '@modern-js/app-tools';
import garfishPlugin from '@modern-js/plugin-garfish';
import tailwindcssPlugin from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  tools: {
    devServer: {
      proxy: {
        '/api': {
          pathRewrite: {
            '^/api': '',
          },
          target: process.env.WP_URL,
          changeOrigin: true,
        },
      },
    },
  },
  dev: {
    port: 8081,
  },
  runtime: {
    router: true,
    state: true,
  },
  deploy: {
    microFrontend: true,
  },
  plugins: [appTools(), garfishPlugin(), tailwindcssPlugin()],
});
