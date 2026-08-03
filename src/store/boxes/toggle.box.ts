import { createBox } from "@lavaz/store";

interface ToggleState {
	isOpenMenu: boolean;
}

const initialState = { isOpenMenu: false } satisfies ToggleState as ToggleState;

export const toggleBox = createBox(initialState, (set) => ({
	setOpenMenu: () => set((prev) => ({ ...prev, isOpenMenu: true })),
	setCloseMenu: () => set((prev) => ({ ...prev, isOpenMenu: false })),
})).create();
