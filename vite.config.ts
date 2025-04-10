import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// biome-ignore lint/style/noDefaultExport: framework
export default defineConfig(({ mode }) => ({
	plugins: [
		tailwindcss(),
		reactRouter(),
		// 現状、@cloudflare/vite-pluginはvitest環境では動作しないっぽい？
		mode !== "test"
			? cloudflare({ viteEnvironment: { name: "ssr" } })
			: undefined,
	],
}));
