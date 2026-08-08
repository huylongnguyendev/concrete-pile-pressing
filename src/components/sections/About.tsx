import about from "#/data/json/contents/about.json" with { type: "json" };
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";

export function About() {
	return (
		<Section id="about-us" aria-description="Giới thiệu về Công ty Ép cọc bê tông Hùng Dũng">
			<div className="flex max-xl:flex-col justify-between items-center gap-12">
				{/* CỘT ẢNH BÊN TRÁI */}
				<Animate
					initial={{ opacity: 0, transform: "translateX(-30px)" }}
					animate={{ opacity: 1, transform: "translateX(0)" }}
					transition={{ duration: 0.7, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
					className="relative w-full max-w-xl lg:max-w-2xl aspect-3/2 overflow-hidden rounded-2xl shadow-xl shrink-0"
				>
					<img
						src="./about.webp"
						width={1200}
						height={800}
						alt="Đội ngũ Hùng Dũng - Ép cọc bê tông Đồng Nai & Vũng Tàu"
						loading="eager"
						className="absolute inset-0 w-full h-full object-cover animate-right-to-left"
					/>
					<div className="absolute top-0 left-0 bg-background/90 dark:bg-background/90 p-3 pb-3 pe-3 rounded-br-3xl backdrop-blur-sm shadow-lg">
						<div className="w-36 h-36 lg:w-44 lg:h-44 bg-primary text-primary-foreground flex flex-col items-center justify-center text-center p-4 rounded-2xl shadow-inner">
							<span className="text-4xl lg:text-5xl font-black font-heading leading-none">
								20+
							</span>
							<span className="text-sm lg:text-base font-bold tracking-wider uppercase mt-1">
								Năm
							</span>
							<span className="text-xs lg:text-sm font-medium tracking-wide uppercase opacity-90">
								Kinh Nghiệm
							</span>
						</div>
					</div>
				</Animate>
				<div className="space-y-6 w-full">
					<Animate
						initial={{ opacity: 0, transform: "translateY(20px)" }}
						animate={{ opacity: 1, transform: "translateY(0)" }}
						transition={{
							duration: 0.6,
							ease: "cubic-bezier(0.16, 1, 0.3, 1)",
						}}
						className="border-l-4 border-primary ps-4"
					>
						<p className="font-semibold text-primary uppercase tracking-wider text-sm mb-1">
							{about.badge}
						</p>
						<h2 className="heading-2">{about.title}</h2>
					</Animate>
					<div className="text-muted-foreground space-y-4 text-base">
						{about.paragraphs.map((text, index) => {
							const key = `about-paragraph-${index}`;
							return (
								<Animate
									key={key}
									initial={{ opacity: 0, transform: "translateY(20px)" }}
									animate={{ opacity: 1, transform: "translateY(0)" }}
									transition={{
										duration: 0.6,
										delay: 0.15 * (index + 1),
										ease: "cubic-bezier(0.16, 1, 0.3, 1)",
									}}
								>
									<p>{text}</p>
								</Animate>
							);
						})}
					</div>
					<Animate
						initial={{ opacity: 0, transform: "translateY(20px)" }}
						animate={{ opacity: 1, transform: "translateY(0)" }}
						transition={{
							duration: 0.6,
							delay: 0.45,
							ease: "cubic-bezier(0.16, 1, 0.3, 1)",
						}}
						className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-border/60"
					>
						{about.features.map((feature, index) => {
							const key = `about-feature-${index}`;
							return (
								<div key={key} className="flex items-center gap-3">
									<div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
										{feature.icon}
									</div>
									<div>
										<h3 className="font-bold text-foreground text-sm">
											{feature.title}
										</h3>
										<p className="text-xs text-muted-foreground">
											{feature.description}
										</p>
									</div>
								</div>
							);
						})}
					</Animate>
				</div>
			</div>
		</Section>
	);
}
