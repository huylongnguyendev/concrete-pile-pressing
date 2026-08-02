import {
	BuildingsIcon,
	CaretDoubleDownIcon,
	PhoneCallIcon,
	ShieldCheckIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";
import { Button } from "../ui/button";
import { quickStats } from "#/data/hero/quick-stats.data";
import { useCountUp } from "#/hooks/useCountUp";
import { CountUp } from "../base/CountUp";

export function Hero() {
	return (
		<Section
			isScreen={true}
			className="relative w-auto h-[calc(100dvh-120.8px)] overflow-hidden flex items-center justify-center"
		>
			{/* Hình nền */}
			<img
				src="./hero-1.jpg"
				alt="Ép Cọc Bê Tông Uy Tín Hùng Dũng tại Đồng Nai và Bà Rịa - Vũng Tàu"
				width={1280}
				height={592}
				loading="eager"
				className="absolute inset-0 w-full h-full z-0 object-cover scale-105 animate-subtle-zoom"
			/>
			<div className="absolute inset-0 bg-linear-to-t from-black/80 via-foreground-branding/60 to-black/40 z-10" />
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-10" />

			<div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 max-w-5xl mx-auto w-full pt-10">
				<Animate
					initial={{ opacity: 0, transform: "translateY(20px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{ duration: 0.6, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
				>
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-medium mb-6 text-primary-foreground shadow-lg">
						<ShieldCheckIcon size={18} weight="fill" className="text-primary" />
						<span>Đơn vị ép cọc bê tông uy tín số #1 khu vực miền Nam</span>
					</div>
				</Animate>

				<Animate
					initial={{ opacity: 0, transform: "translateY(25px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{
						duration: 0.7,
						delay: 0.15,
						ease: "cubic-bezier(0.16, 1, 0.3, 1)",
					}}
				>
					<h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 font-heading tracking-tight leading-tight">
						Vững Chãi Móng Nhà - <br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-400 to-amber-200">
							Bền Vững Tương Lai
						</span>
					</h1>
				</Animate>

				{/* 3. Đoạn mô tả */}
				<Animate
					initial={{ opacity: 0, transform: "translateY(25px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{
						duration: 0.7,
						delay: 0.3,
						ease: "cubic-bezier(0.16, 1, 0.3, 1)",
					}}
				>
					<p className="sm:text-lg md:text-xl max-w-3xl mb-8 text-zinc-300 text-balance leading-relaxed">
						Chuyên thi công ép cọc bê tông chất lượng cao, công nghệ hiện đại
						tại Đồng Nai và Bà Rịa - Vũng Tàu. Cam kết độ sâu chuẩn xác, an toàn
						tuyệt đối.
					</p>
				</Animate>

				{/* 4. Nhóm nút CTA */}
				<Animate
					initial={{ opacity: 0, transform: "translateY(25px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{
						duration: 0.7,
						delay: 0.45,
						ease: "cubic-bezier(0.16, 1, 0.3, 1)",
					}}
					className="flex max-md:flex-col items-center gap-4 w-full justify-center mb-10"
				>
					<Link
						to="/cong-trinh-xay-dung"
						className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold cta shadow-xl hover:scale-105 transition-all duration-300 px-6 py-3.5 rounded-full flex items-center gap-2"
					>
						<BuildingsIcon size={22} weight="bold" />
						<span>Xem công trình thực tế</span>
					</Link>
					<a
						href="tel:0967386080"
						className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-primary/25 hover:scale-105 cta flex items-center gap-2"
					>
						<PhoneCallIcon size={22} weight="bold" />
						<span>Nhận tư vấn & Báo giá ngay</span>
					</a>
				</Animate>

				{/* 5. Khối Thống Kê Nhanh (Quick Stats) tạo niềm tin */}
				<Animate
					initial={{ opacity: 0, transform: "translateY(20px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{
						duration: 0.7,
						delay: 0.6,
						ease: "cubic-bezier(0.16, 1, 0.3, 1)",
					}}
					className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl w-full text-center"
				>
					{quickStats.map((item, i) => {
						const key = `${item.title}-stats`;
						return (
							<CountUp
								key={key}
								index={i}
								number={item.number}
								prefix={item.prefix}
								title={item.title}
							/>
						);
					})}
				</Animate>

				{/* 6. Nút cuộn xuống */}
				<Animate
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.75, ease: "ease-out" }}
					className="absolute -bottom-4 right-4 z-20"
				>
					<Button
						className="animate-bounce rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20"
						size={"icon"}
						asChild
					>
						<a href="#about-us" aria-label="Cuộn xuống phần giới thiệu">
							<CaretDoubleDownIcon weight="bold" className="text-white" />
						</a>
					</Button>
				</Animate>
			</div>
		</Section>
	);
}
