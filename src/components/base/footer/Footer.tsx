import { FooterBot } from "./FooterBot";
import { FooterTop } from "./FooterTop";

export function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-foreground-branding text-zinc-100">
			<div className="contain py-8! space-y-8">
				<FooterTop />
				<FooterBot />
			</div>
			<div className="border-t border-primary py-4">
				<p className="text-center text-sm font-semibold">
					&copy; {currentYear}{" "}
					<span className="text-primary">Ép Cọc Bê Tông Hùng Dũng</span>. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
}
