import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "#/components/base/sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "#/components/ui/sidebar";

export const Route = createFileRoute("/admin/(app)")({
	staticData: { showNavbar: false },
	ssr: false,
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<div className="flex flex-col flex-1">
				<div className="sticky top-0 z-9999 bg-accent/40 px-1">
					<SidebarTrigger />
				</div>
				<div className="px-4">
					<Outlet />
				</div>
			</div>
		</SidebarProvider>
	);
}
