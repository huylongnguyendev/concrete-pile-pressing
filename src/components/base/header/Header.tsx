import { HeaderBot } from "./HeaderBot";
import { HeaderTop } from "./HeaderTop";

export function Header() {
	return (
		<header className="shadow-md bg-background sticky top-[-48.8px] left-0 w-full z-9999 transition-all duration-300">
			<HeaderTop />
			<HeaderBot />
		</header>
	);
}
