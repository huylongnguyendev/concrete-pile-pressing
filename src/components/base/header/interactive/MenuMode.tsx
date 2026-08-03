import { useAppStore } from "@lavaz/store";
import { ListIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";
import { store } from "#/store/store";

export function MenuMode() {
	const [, { setOpenMenu }] = useAppStore(store.toggle, (s) => s.isOpenMenu);

	return (
		<Button
			variant={"outline"}
			size={"icon"}
			onClick={setOpenMenu}
			className="lg:hidden"
		>
			<ListIcon />
		</Button>
	);
}
