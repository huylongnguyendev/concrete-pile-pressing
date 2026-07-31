import { Link } from "@tanstack/react-router";
import type { IHeaderNav } from "#/components/data/header/header-nav.data";
import { cn } from "#/lib/utils";
import type React from "react";

export function NavItem({
	item,
	onCloseMenu,
	onKeyDownClose,
}: {
	item: IHeaderNav;
	onCloseMenu: () => void;
	onKeyDownClose: (e: React.KeyboardEvent) => void;
}) {
	const { label, title, href, icon, child } = item;
	const Icon = icon;
	return (
		<li
			aria-label="navigation-item"
			className="relative text-muted-foreground font-semibold capitalize hover:text-primary group transition-colors duration-300 max-lg:py-2 py-6"
			onClick={onCloseMenu}
			onKeyDown={onKeyDownClose}
		>
			{child ? (
				<div></div>
			) : (
				<Link to={href} title={title} className="flex">
					<span>{label}</span>
					{Icon ? <Icon /> : null}
				</Link>
			)}
			<div
				className={cn(
					"max-lg:hidden absolute bottom-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full",
				)}
			/>
		</li>
	);
}
