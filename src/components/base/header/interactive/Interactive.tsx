import { MagnifyingGlassIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";
import { useMobile } from "#/hooks/useMobile";

export function Interactive() {
	const { isMobile } = useMobile();
	return (
		<div className="flex items-center gap-2">
			<Button aria-label="Tìm kiếm" variant={"outline"} size={"icon"}>
				<MagnifyingGlassIcon />
			</Button>
			<Button size={isMobile ? "icon" : "default"} asChild>
				<a href="tel:0967386080">
					<PhoneCallIcon weight="fill" />
					<span className="max-lg:hidden uppercase">Hotline: 0967.386.080</span>
				</a>
			</Button>
		</div>
	);
}
