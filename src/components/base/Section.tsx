import type React from "react";
import { cn } from "#/lib/utils";

export function Section({
	isScreen = false,
	className,
	...props
}: { isScreen?: boolean } & React.ComponentProps<"section">) {
	return (
		<section {...props} className={cn(!isScreen && "contain py-24!", className)} />
	);
}
