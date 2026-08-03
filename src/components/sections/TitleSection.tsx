import type { Icon } from "@phosphor-icons/react";
import { Animate } from "../animation/Animate";

interface TitleSectionProps {
	title: string;
	label?: {
		content: string;
		icon?: Icon;
	};
	subtitle?: string;
}

export function TitleSection({ title, subtitle, label }: TitleSectionProps) {
	return (
		<div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
			<Animate
				initial={{ opacity: 0, transform: "translateY(25px)" }}
				animate={{ opacity: 1, transform: "translateY(0)" }}
				transition={{
					duration: 0.7,
					ease: "cubic-bezier(0.16, 1, 0.3, 1)",
				}}
			>
				{label ? (
					<span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
						{label.icon ? (
							<label.icon
								size={16}
								weight="bold"
								className="inline-block mr-1.5 -mt-0.5"
							/>
						) : null}
						{label.content}
					</span>
				) : null}
			</Animate>

			<Animate
				initial={{ opacity: 0, transform: "translateY(25px)" }}
				animate={{ opacity: 1, transform: "translateY(0)" }}
				transition={{
					duration: 0.7,
					delay: 0.1,
					ease: "cubic-bezier(0.16, 1, 0.3, 1)",
				}}
			>
				<h2 className="text-3xl lg:text-4xl font-bold font-heading">{title}</h2>
			</Animate>

			<Animate
				initial={{ opacity: 0, transform: "translateY(25px)" }}
				animate={{ opacity: 1, transform: "translateY(0)" }}
				transition={{
					duration: 0.7,
					delay: 0.2,
					ease: "cubic-bezier(0.16, 1, 0.3, 1)",
				}}
			>
				<div className="w-20 h-1 bg-primary mx-auto rounded-full mt-2" />
			</Animate>

			{subtitle ? (
				<Animate
					initial={{ opacity: 0, transform: "translateY(25px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{
						duration: 0.7,
						delay: 0.3,
						ease: "cubic-bezier(0.16, 1, 0.3, 1)",
					}}
				>
					<p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg pt-2">
						{subtitle}
					</p>
				</Animate>
			) : null}
		</div>
	);
}
