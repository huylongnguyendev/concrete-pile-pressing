import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider } from "#/components/ui/sidebar";
import { AppSidebar } from "#/components/base/sidebar/AppSidebar";

export const Route = createFileRoute("/admin/(app)/")({
	staticData: { showNavbar: false },
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="py-4">
			<SidebarProvider>
				<AppSidebar />
				<Outlet />
			</SidebarProvider>
		</div>
	);
}
