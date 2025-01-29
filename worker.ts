import handle from "hono-react-router-adapter/cloudflare-workers";
import app from "./app/server/index";
import { getLoadContext } from "./app/load-context";
// @ts-ignore-next-line
import * as build from "./build/server";

export default handle(build, app, { getLoadContext });
