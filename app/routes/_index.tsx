import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({
  params,
}: Route.LoaderArgs) {
  console.log(params);

  return {
    foo: "bar"
  };
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {
  return <div>Home: loader foo = {loaderData.foo}</div>;
}

