import {
	ArrowUpRightIcon,
	GearSixIcon,
	type Icon,
	TruckIcon,
	WrenchIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import service from "#/data/json/contents/services.json" with { type: "json" };
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";
import { Button } from "../ui/button";

// Map icon tương ứng cho từng dịch vụ
const serviceIcons: Icon[] = [WrenchIcon, TruckIcon, GearSixIcon];

export function Services() {
	return (
		<Section
			className="py-16! bg-muted/50"
			aria-description="Các dịch vụ của Ép Cọc Hùng Dũng"
		>
			<div className="space-y-12 lg:px-11">
				{/* Tiêu đề Section chuẩn phong cách Features */}
				<Animate
					initial={{ opacity: 0, transform: "translateY(25px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{
						duration: 0.7,
						ease: "cubic-bezier(0.16, 1, 0.3, 1)",
					}}
					className="text-center space-y-3 max-w-3xl mx-auto"
				>
					<span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
						Giải pháp toàn diện
					</span>
					<h2 className="text-3xl lg:text-4xl font-bold font-heading">
						{service.title}
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto rounded-full mt-2" />
				</Animate>

				<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{service.services.map((item, index) => {
						const key = `service-item-${index}`;
						const translateYOffset = index % 2 !== 0 ? 15 : -15;

						const hasImage =
							item.img && item.img.trim() !== "" && item.img !== "./";
						const CurrentIcon = serviceIcons[index % serviceIcons.length];

						return (
							<Animate
								key={key}
								initial={{
									opacity: 0,
									transform: `translateY(${20 + index * 10}px)`,
								}}
								animate={{
									opacity: 1,
									transform: `translateY(${translateYOffset}px)`,
								}}
								transition={{
									duration: 0.7,
									delay: 0.15 * (index + 1),
									ease: "cubic-bezier(0.16, 1, 0.3, 1)",
								}}
								className="group relative rounded-2xl overflow-hidden bg-card border border-border/85 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:border-primary/80"
							>
								{hasImage ? (
									/* Trường hợp CÓ hình ảnh */
									<div className="relative w-full h-72 overflow-hidden">
										<img
											src={item.img}
											alt={item.title}
											className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
										/>

										{/* Lớp overlay đen xanh */}
										<div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />

										{/* Icon nằm cố định ở góc trên bên phải (thay thế số thứ tự) */}
										<div className="absolute top-4 right-4 size-12 rounded-xl bg-card/90 backdrop-blur-md text-primary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
											<CurrentIcon weight="duotone" className="size-6" />
										</div>
									</div>
								) : (
									/* Trường hợp CHƯA CÓ hình ảnh: Giữ khung trống có chiều cao hợp lý và đặt Icon ở góc trên tương tự */
									<div className="relative w-full h-32 bg-slate-950/5 flex items-start justify-end p-4 border-b border-border/60 group-hover:bg-slate-950/10 transition-colors duration-500">
										<div className="size-12 rounded-xl bg-card border border-border/80 shadow-md text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
											<CurrentIcon weight="duotone" className="size-6" />
										</div>
									</div>
								)}

								<div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-card">
									<div className="space-y-2">
										<h3 className="font-bold text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
											{item.title}
										</h3>
										<p className="text-muted-foreground text-sm font-medium line-clamp-2 leading-relaxed">
											{item.description}
										</p>
									</div>
									<div className="pt-2 flex items-center">
										<Button
											size="lg"
											asChild
											className="w-full sm:w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 font-semibold shadow-sm group-hover:translate-x-1"
										>
											<Link
												to={"/dich-vu"}
												className="flex items-center justify-center gap-2"
											>
												<span>Xem chi tiết</span>
												<ArrowUpRightIcon
													weight="bold"
													className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
												/>
											</Link>
										</Button>
									</div>
								</div>
							</Animate>
						);
					})}
				</ul>
			</div>
		</Section>
	);
}
