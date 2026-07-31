import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/components/sections/Hero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<Hero />
			<div className="contain"></div>
		</>
	);
}
