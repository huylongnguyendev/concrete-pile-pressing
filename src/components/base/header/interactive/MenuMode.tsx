import { useAppStore } from "@lavaz/store";
import { ListIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";
import { useMobile } from "#/hooks/useMobile";
import { cn } from "#/lib/utils";
import { store } from "#/store/store";

export function MenuMode() {
	const [, { setOpenMenu }] = useAppStore(store.toggle, (s) => s.isOpenMenu);
	const { isMobile } = useMobile();
	return (
		<Button
			variant={"outline"}
			size={"icon"}
			onClick={setOpenMenu}
			className={cn(!isMobile && "hidden")}
		>
			<ListIcon />
		</Button>
	);
}
