import type React from "react";

export function BotList({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="font-semibold space-y-6">
			<p className="capitalize">{title}</p>
			<ul className="flex flex-col gap-4 text-sm text-zinc-400 [&_li]:inline-flex [&_li]:items-center [&_li]:gap-1">
				{children}
			</ul>
		</div>
	);
}
