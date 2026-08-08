import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools";
import {
	createRootRoute,
	HeadContent,
	Scripts,
	useMatches,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";
import { Footer } from "#/components/base/footer/Footer";
import { Header } from "#/components/base/header/Header";
import { ScrollToTop } from "#/components/base/ScrollToTop";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const showNavbar = useMatches({
		select: (matches) =>
			!matches.some((m) => m.staticData?.showNavbar === false),
	});
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{showNavbar ? <Header /> : null}
				<main>{children}</main>
				<ScrollToTop />
				{showNavbar ? <Footer /> : null}
				<Toaster richColors />
				<Scripts />
				<TanStackDevtools
					config={{
						position: "top-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						{
							name: "TanStack Form",
							render: <FormDevtoolsPanel />,
						},
					]}
				/>
			</body>
		</html>
	);
}
