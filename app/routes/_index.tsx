import { internal } from "../server";
import type { Route } from "./+types/_index";

export function meta() {
	return [
		{ title: "New React Router App" },
		{ content: "Welcome to React Router!", name: "description" },
	];
}

export async function loader({ params }: Route.LoaderArgs) {
	console.log(params);
	const value = await internal.api.$get();

	return {
		foo: await value.json(),
	};
}

// biome-ignore lint/style/noDefaultExport: framework
export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<div className="p-4 font-bold text-amber-700">
			Home: loader from Hono = {loaderData.foo.message}
		</div>
	);
}
