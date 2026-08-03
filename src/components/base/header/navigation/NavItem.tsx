import { Link } from "@tanstack/react-router";
import type React from "react";
import type { IHeaderNav } from "#/data/header/header-nav.data";
import { cn } from "#/lib/utils";

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
	const Icon = icon || (() => null);
	return (
		<li
			aria-label="navigation-item"
			className="relative text-muted-foreground font-semibold capitalize hover:text-primary group transition-colors duration-300"
			onClick={onCloseMenu}
			onKeyDown={onKeyDownClose}
		>
			{child ? (
				<div className="max-lg:px-4 max-lg:py-2 py-6 group">
					<Link
						to={href}
						title={title}
						className="flex items-center justify-between gap-1"
					>
						<span>{label}</span>
						<Icon weight="bold" />
					</Link>
					<div className="lg:absolute lg:bg-background lg:shadow-md rounded-md top-[calc(100%+0.25rem)] lg:min-w-50 lg:w-max lg:h-0 overflow-hidden lg:group-hover:h-auto lg:group-hover:py-2 transition-all duration-300">
						{child.map((subItem) => (
							<Link
								key={subItem.key}
								to={subItem.href}
								title={subItem.title}
								className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 max-lg:hover:bg-primary/10 max-lg:rounded-lg"
							>
								{subItem.label}
							</Link>
						))}
					</div>
				</div>
			) : (
				<Link
					to={href}
					title={title}
					className="flex max-lg:hover:bg-primary/10 max-lg:px-4 max-lg:rounded-lg max-lg:py-2 py-6"
					activeProps={{ className: "text-primary" }}
				>
					<span>{label}</span>
					<Icon weight="bold" />
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
