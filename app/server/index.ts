import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => c.text("Hello World"));

export default app;
