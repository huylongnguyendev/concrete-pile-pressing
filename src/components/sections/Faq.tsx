import { QuestionIcon } from "@phosphor-icons/react";
import faqData from "#/data/json/contents/faq.json" with { type: "json" };
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";
import { TitleSection } from "./TitleSection";

export function Faq() {
	return (
		<Section
			className="py-20 bg-card border-y border-border/60"
			aria-description="Câu hỏi thường gặp về ép cọc bê tông"
		>
			<div className="max-w-4xl mx-auto px-4">
				<TitleSection
					title={faqData.title}
					label={{ content: faqData.subtitle }}
					subtitle={faqData.description}
				/>

				{/* Danh sách câu hỏi */}
				<div className="space-y-4">
					{faqData.questions.map((item, index) => {
						const key = `faq-item-${index}`;
						return (
							<Animate
								key={key}
								initial={{ opacity: 0, transform: "translateY(20px)" }}
								animate={{ opacity: 1, transform: "translateY(0)" }}
								transition={{
									duration: 0.7,
									delay: 0.1 * (index + 1),
									ease: "cubic-bezier(0.16, 1, 0.3, 1)",
								}}
							>
								<details className="group bg-muted/40 border border-border/85 rounded-2xl p-6 shadow-xs hover:border-primary/80 transition-all duration-300">
									<summary className="flex items-center justify-between gap-4 cursor-pointer font-bold font-heading text-lg text-foreground list-none select-none">
										<span className="flex items-center gap-3">
											<QuestionIcon
												size={22}
												weight="duotone"
												className="text-primary shrink-0"
											/>
											{item.q}
										</span>
										<span className="transition-transform duration-300 group-open:rotate-180 text-primary font-bold">
											▼
										</span>
									</summary>
									<p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4 pl-9 border-t border-border/60 pt-4">
										{item.a}
									</p>
								</details>
							</Animate>
						);
					})}
				</div>
			</div>
		</Section>
	);
}
