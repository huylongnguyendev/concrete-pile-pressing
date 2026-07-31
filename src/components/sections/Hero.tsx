import {
	BuildingsIcon,
	CaretDoubleDownIcon,
	PhoneCallIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Section } from "../base/Section";
import { Button } from "../ui/button";

export function Hero() {
	return (
		<Section className="relative w-auto h-[calc(100dvh-120.8px)] overflow-hidden">
			<img
				src="./hero-1.jpg"
				alt="Ép Cọc Bê Tông Uy Tín Hùng Dũng tại Đồng Nai và Bà Rịa - Vũng Tàu"
				width={1280}
				height={592}
				className="absolute inset-0 w-full h-[calc(100dvh-120.8px)] z-0 object-cover"
			/>
			<div className="absolute inset-0 bg-foreground-branding/60 z-10" />

			<div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-7xl mx-auto">
				<h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-primary">
					Ép Cọc Bê Tông Uy Tín Hùng Dũng
				</h1>
				<p className="text-lg md:text-xl max-w-2xl mb-8 text-zinc-300 text-balance">
					Chuyên thi công ép cọc bê tông chất lượng cao tại Đồng Nai và Bà Rịa -
					Vũng Tàu
				</p>
				<div className="flex items-center gap-4">
					<Link
						to="/cong-trinh-xay-dung"
						className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold cta"
					>
						<BuildingsIcon size={24} weight="bold" />
						<span>Công trình xây dựng</span>
					</Link>
					<a
						href="tel:0967386080"
						className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all cta"
					>
						<PhoneCallIcon size={24} weight="bold" />
						<span>Nhận Tư Vấn Ngay</span>
					</a>
				</div>
				<Button className="absolute bottom-6" size={"icon"} asChild>
					<a href="#about-us">
						<CaretDoubleDownIcon weight="bold" />
					</a>
				</Button>
			</div>
		</Section>
	);
}
