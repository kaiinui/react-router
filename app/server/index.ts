import { Hono } from "hono";
import { hc } from "hono/client";

const app = new Hono();

const router = app.get("/api", (c) => {
	return c.json({
		message: "Hello World",
	});
});

const selfFetch: typeof fetch = async (input, init) => {
	const request = new Request(input, init);
	return await app.fetch(request);
};
export const internal = hc<typeof router>("http://localhost.internal", {
	fetch: selfFetch,
});
// biome-ignore lint/style/noDefaultExport: framework
export default app;
