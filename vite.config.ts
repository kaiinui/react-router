import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import serverAdapter from "hono-react-router-adapter/vite";
import adapter from "@hono/vite-dev-server/cloudflare";
import { getLoadContext } from "./app/load-context";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    serverAdapter({
      adapter,
      getLoadContext,
      entry: "./app/server/index.ts",
    }),
  ],
});
