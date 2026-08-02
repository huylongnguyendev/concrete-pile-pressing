import type { IQuickStat } from "#/data/hero/quick-stats.data";
import { useCountUp } from "#/hooks/useCountUp";

export function CountUp({
	number,
	prefix,
	title,
	index,
}: IQuickStat & { index: number }) {
	const { count, setElementRef } = useCountUp({
		value: number,
		delay: index * 100 + 0.3,
	});

	return (
		<div ref={setElementRef} className="flex flex-col items-center">
			<p className="text-xl md:text-2xl font-bold text-primary">
				<span>{count}</span> <span>{prefix}</span>
			</p>
			<span className="text-xs md:text-sm text-zinc-400">{title}</span>
		</div>
	);
}
