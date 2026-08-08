import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "#/components/base/ContactCta";

export const Route = createFileRoute("/dich-vu")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<ContactCta />
		</div>
	);
}
