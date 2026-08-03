import {
	ClockIcon,
	CurrencyDollarIcon,
	HeadsetIcon,
	type Icon,
	ShieldCheckIcon,
	UserCheckIcon,
	WrenchIcon,
} from "@phosphor-icons/react";
import featuresData from "#/data/json/contents/features.json" with {
	type: "json",
};
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";
import { TitleSection } from "./TitleSection";

const iconMap: Record<string, Icon> = {
	ShieldCheck: ShieldCheckIcon,
	Wrench: WrenchIcon,
	UserCheck: UserCheckIcon,
	CurrencyDollar: CurrencyDollarIcon,
	Clock: ClockIcon,
	HeadsetIcon: HeadsetIcon,
};

export function Features() {
	return (
		<Section className="py-20! space-y-16 bg-muted/30">
			{/* Tiêu đề chính */}
			<TitleSection
				title={featuresData.title}
				subtitle={featuresData.subtitle}
				label={{ content: featuresData.badge }}
			/>
			{/* Lưới card - Thêm pt-10 để chừa khoảng trống phía trên cho icon lòi ra ngoài */}
			<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 pt-8">
				{featuresData.features.map((item, index) => {
					const key = `feature-item-${index}`;
					const IconComponent = iconMap[item.icon] || ShieldCheckIcon;

					return (
						<Animate
							key={key}
							initial={{
								opacity: 0,
								transform: "translateY(30px)",
							}}
							animate={{
								opacity: 1,
								transform: "translateY(0)",
							}}
							transition={{
								duration: 0.7,
								delay: 0.1 * (index + 1),
								ease: "cubic-bezier(0.16, 1, 0.3, 1)",
							}}
							// Thêm relative để làm mốc định vị cho icon lòi ra ngoài
							className="group relative pt-12 pb-8 px-8 rounded-2xl bg-card border border-border/70 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-500 flex flex-col items-center text-center space-y-4"
						>
							{/* Icon căn giữa, lòi 1 nửa lên trên biên của Card */}
							<div className="absolute -top-7 left-1/2 -translate-x-1/2 size-16 rounded-full bg-card border border-border/80 shadow-md text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
								<IconComponent weight="duotone" className="size-8" />
							</div>

							<div className="space-y-2 pt-2">
								<h3 className="font-bold text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
									{item.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{item.description}
								</p>
							</div>
						</Animate>
					);
				})}
			</ul>
		</Section>
	);
}
