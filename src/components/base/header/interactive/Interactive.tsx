import { MagnifyingGlassIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";

export function Interactive() {
	return (
		<div className="flex items-center gap-2">
			<Button aria-label="Tìm kiếm" variant={"outline"} size={"icon"}>
				<MagnifyingGlassIcon />
			</Button>
			<Button
				className="max-lg:size-10 max-lg:p-0 max-lg:justify-center"
				asChild
			>
				<a href="tel:0967386080">
					<PhoneCallIcon weight="fill" />
					<span className="max-lg:hidden uppercase">Hotline: 0967.386.080</span>
				</a>
			</Button>
		</div>
	);
}
