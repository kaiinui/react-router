// @ts-nocheck

import { createRequestHandler } from "react-router";
import app from "./app/server";

declare module "react-router" {
	export interface AppLoadContext {
		cloudflare: {
			env: Env;
			ctx: ExecutionContext;
		};
	}
}

const requestHandler = createRequestHandler(
	() => import("virtual:react-router/server-build"),
	import.meta.env.MODE,
);

// biome-ignore lint/style/noDefaultExport: framework
export default {
	async fetch(request, env, ctx) {
		const honoResponse = await app.fetch(request, env, ctx);
		if (honoResponse.ok) {
			return honoResponse;
		}

		return requestHandler(request, {
			cloudflare: { ctx, env },
		});
	},
} satisfies ExportedHandler<Env>;
