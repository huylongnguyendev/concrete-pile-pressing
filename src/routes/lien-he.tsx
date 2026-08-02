import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lien-he")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="py-4">Hello "/lien-he"!</div>;
}
