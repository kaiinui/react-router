import { env } from "cloudflare:workers";
import { Hono } from "hono";
import { hc } from "hono/client";

const app = new Hono();

const router = app.get("/api", (c) => {
	return c.json({
		message: "Hello World",
	});
});

export type Router = typeof router;
export const internal = hc<Router>("http://localhost", {
	// note: SELF.fetchはthisに依存しているため、bindする必要がある
	fetch: env.SELF.fetch.bind(env.SELF),
});
// biome-ignore lint/style/noDefaultExport: framework
export default app;
