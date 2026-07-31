import { Logo } from "#/components/brand/Logo";
import { Interactive } from "./interactive/Interactive";
import { MenuMode } from "./interactive/MenuMode";
import { NavList } from "./navigation/NavList";

export function HeaderBot() {
	return (
		<div className="contain flex justify-between items-center max-lg:py-4!">
			<MenuMode />
			<Logo />
			<NavList />
			<Interactive />
		</div>
	);
}
