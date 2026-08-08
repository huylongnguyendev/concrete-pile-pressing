import { useAppStore } from "@lavaz/store";
import { XIcon } from "@phosphor-icons/react";
import type React from "react";
import { useRef } from "react";
import { Logo } from "#/components/brand/Logo";
import { Button } from "#/components/ui/button";
import { headerNavList } from "#/data/header/header-nav.data";
import { useClickOutside } from "#/hooks/useClickOutside";
import { cn } from "#/lib/utils";
import { store } from "#/store/store";
import { NavItem } from "./NavItem";

export function NavList() {
	const [isOpenMenu, { setCloseMenu }] = useAppStore(
		store.toggle,
		(s) => s.isOpenMenu,
	);
	const ref = useRef<HTMLElement | null>(null);

	useClickOutside(ref, isOpenMenu, setCloseMenu);

	const handleClose = (e: React.KeyboardEvent) => {
		if (e.key === "Esc") setCloseMenu();
	};

	return (
		<nav
			ref={ref}
			className={cn(
				"max-lg:absolute top-0 -left-full max-lg:bg-background max-lg:shadow-lg max-lg:w-10/12 max-lg:h-dvh max-lg:p-4 transition-all duration-300 z-9999",
				isOpenMenu && "left-0",
			)}
		>
			<ul
				aria-label="navigation-list"
				className="flex max-lg:flex-col lg:items-center gap-x-4"
			>
				<li className="max-lg:flex hidden justify-between items-center border-b border-accent pb-4">
					<Logo />
					<Button
						variant={"ghost"}
						size={"icon"}
						className="text-destructive hover:text-destructive"
						onClick={setCloseMenu}
					>
						<XIcon />
					</Button>
				</li>
				{headerNavList.map((item) => (
					<NavItem
						key={item.key}
						item={item}
						onCloseMenu={setCloseMenu}
						onKeyDownClose={handleClose}
					/>
				))}
			</ul>
		</nav>
	);
}
