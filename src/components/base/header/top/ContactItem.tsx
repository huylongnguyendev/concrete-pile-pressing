import type { IHeaderContact } from "#/components/data/header/header-contact.data";
import { cn } from "#/lib/utils";

export function ContactItem({
	item,
	index,
}: {
	item: IHeaderContact;
	index: number;
}) {
	const { title, value, href, icon } = item;
	const Icon = icon;

	return (
		<li
			className={cn(
				"flex items-center gap-2 text-primary py-2 font-semibold",
				index === 1 && "px-2 border-x",
				index === 0 && "pr-2",
				index === 2 && "pl-2",
			)}
		>
			<Icon size={24} weight={"bold"} />
			<div className="flex flex-col">
				<p className="text-xs leading-3">{title}</p>
				<a
					href={href}
					className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
				>
					{value}
				</a>
			</div>
		</li>
	);
}
