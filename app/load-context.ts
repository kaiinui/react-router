import type { Context } from "hono";
import type { PlatformProxy } from "wrangler";

type HonoEnv = {
	Bindings: Env;
};

type GetLoadContextArgs = {
	request: Request;
	context: {
		cloudflare: Omit<
			PlatformProxy<HonoEnv["Bindings"]>,
			"dispose" | "caches" | "cf"
		> & {
			caches: PlatformProxy<HonoEnv>["caches"] | CacheStorage;
			// @ts-expect-error
			cf: Request["cf"];
		};
		hono: {
			context: Context<HonoEnv>;
		};
	};
};

declare module "react-router" {
	interface AppLoadContext extends ReturnType<typeof getLoadContext> {
		hono: {
			context: Context<HonoEnv>;
		};
	}
}

export function getLoadContext({ context }: GetLoadContextArgs) {
	return {
		...context,
	};
}
