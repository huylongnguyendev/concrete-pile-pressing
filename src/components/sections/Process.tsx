import {
	CalculatorIcon,
	CheckSquareOffsetIcon,
	ClipboardTextIcon,
	CraneTowerIcon,
	type Icon,
} from "@phosphor-icons/react";
import processData from "#/data/json/contents/process.json" with {
	type: "json",
};
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";

// Map icon tương ứng cho từng bước quy trình
const processIcons: Icon[] = [
	ClipboardTextIcon,
	CalculatorIcon,
	CraneTowerIcon,
	CheckSquareOffsetIcon,
];

export function Process() {
	return (
		<Section
			className="py-20 bg-card border-y border-border/60"
			aria-description="Quy trình thi công ép cọc bê tông"
		>
			<div className="max-w-7xl mx-auto px-4">
				{/* Tiêu đề Section chuẩn phong cách */}
				<Animate
					initial={{ opacity: 0, transform: "translateY(25px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{
						duration: 0.7,
						ease: "cubic-bezier(0.16, 1, 0.3, 1)",
					}}
					className="text-center space-y-3 max-w-3xl mx-auto mb-16"
				>
					<span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
						{processData.subtitle}
					</span>
					<h2 className="text-3xl lg:text-4xl font-bold font-heading">
						{processData.title}
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto rounded-full mt-2" />
					<p className="text-muted-foreground text-base md:text-lg pt-2">
						{processData.description}
					</p>
				</Animate>

				{/* Các bước quy trình (Grid 4 cột) */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{processData.steps.map((item, index) => {
						const key = `process-step-${index}`;
						const CurrentIcon = processIcons[index % processIcons.length];

						return (
							<Animate
								key={key}
								initial={{ opacity: 0, transform: "translateY(25px)" }}
								animate={{ opacity: 1, transform: "translateY(0)" }}
								transition={{
									duration: 0.7,
									delay: 0.15 * (index + 1),
									ease: "cubic-bezier(0.16, 1, 0.3, 1)",
								}}
								className="relative bg-muted/40 border border-border/80 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/80 transition-all duration-300 group shadow-sm hover:shadow-lg"
							>
								<div>
									{/* Số thứ tự & Icon */}
									<div className="flex items-center justify-between mb-6">
										<span className="text-3xl font-extrabold font-heading text-primary/40 group-hover:text-primary transition-colors">
											{item.step}
										</span>
										<div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
											<CurrentIcon size={24} weight="duotone" />
										</div>
									</div>

									<h3 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
										{item.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{item.description}
									</p>
								</div>

								{/* Đường line trang trí nhỏ ở dưới */}
								<div className="w-full h-1 bg-border/60 rounded-full mt-6 overflow-hidden">
									<div className="w-0 h-full bg-primary group-hover:w-full transition-all duration-500" />
								</div>
							</Animate>
						);
					})}
				</div>
			</div>
		</Section>
	);
}
