import { CheckCircleIcon, QuotesIcon, StarIcon } from "@phosphor-icons/react";
import testimonialsData from "#/data/json/contents/testimonials.json" with {
	type: "json",
};
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";
import { TitleSection } from "./TitleSection";

export function Testimonials() {
	return (
		<Section
			className="py-20 bg-muted/30"
			aria-description="Đánh giá và phản hồi từ khách hàng"
		>
			<div className="max-w-7xl mx-auto px-4">
				<TitleSection
					title={testimonialsData.title}
					label={{ content: testimonialsData.subtitle }}
					subtitle={testimonialsData.description}
				/>

				{/* Lưới đánh giá khách hàng */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonialsData.reviews.map((item, index) => {
						const key = `testimonial-item-${index}`;
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
								className="relative bg-card border border-border/85 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-primary/80"
							>
								<div>
									{/* Icon trích dẫn & Số sao */}
									<div className="flex items-center justify-between mb-6">
										<div className="flex items-center gap-1 text-amber-500">
											{[...Array(item.rating)].map((_, i) => {
												const key = `start-item-${i}`;
												return <StarIcon key={key} size={18} weight="fill" />;
											})}
										</div>
										<QuotesIcon
											size={32}
											weight="duotone"
											className="text-primary/30 group-hover:text-primary transition-colors"
										/>
									</div>

									{/* Nội dung đánh giá */}
									<p className="text-muted-foreground text-sm md:text-base leading-relaxed italic mb-6">
										"{item.content}"
									</p>
								</div>

								{/* Thông tin khách hàng */}
								<div className="flex items-center gap-3 pt-4 border-t border-border/60">
									<div className="size-11 rounded-full bg-primary/10 text-primary font-bold font-heading flex items-center justify-center shrink-0">
										{item.name.charAt(item.name.lastIndexOf(" ") + 1)}
									</div>
									<div>
										<h3 className="font-bold text-base font-heading text-foreground flex items-center gap-1">
											{item.name}
											<CheckCircleIcon
												size={16}
												weight="fill"
												className="text-primary"
											/>
										</h3>
										<p className="text-xs text-muted-foreground font-medium">
											{item.role}
										</p>
									</div>
								</div>
							</Animate>
						);
					})}
				</div>
			</div>
		</Section>
	);
}
