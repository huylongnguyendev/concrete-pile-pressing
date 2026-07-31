import { HeaderBot } from "./HeaderBot";
import { HeaderTop } from "./HeaderTop";

export function Header() {
	return (
		<header className="shadow-md bg-background sticky top-0 left-0 w-full z-9999">
			<HeaderTop />
			<HeaderBot />
		</header>
	);
}
