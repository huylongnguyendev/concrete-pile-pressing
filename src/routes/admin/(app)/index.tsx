import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/(app)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>dashboard</div>;
}
