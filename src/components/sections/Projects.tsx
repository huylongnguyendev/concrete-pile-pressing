import {
	ArrowRightIcon,
	BuildingsIcon,
	MapPinIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Animate } from "../animation/Animate";
import { Section } from "../base/Section";
import { Button } from "../ui/button";
import { TitleSection } from "./TitleSection";

// Dữ liệu mẫu các công trình tiêu biểu
const featuredProjects = [
	{
		id: 1,
		title: "Thi công ép cọc nhà phố 3 tầng",
		location: "Biên Hòa, Đồng Nai",
		category: "Nhà dân dụng",
		image: "./project-1.jpg",
		specs: "Cọc vuông 250x250mm, Chiều sâu 18m",
	},
	{
		id: 2,
		title: "Ép cọc móng biệt thự sân vườn",
		location: "Nhơn Trạch, Đồng Nai",
		category: "Biệt thự cao cấp",
		image: "./project-2.jpg",
		specs: "Cọc tải sắt, Sức chịu tải cao",
	},
	{
		id: 3,
		title: "Ép cọc công trình nhà xưởng sản xuất",
		location: "TP. Vũng Tàu, Bà Rịa - Vũng Tàu",
		category: "Công nghiệp",
		image: "./project-3.jpg",
		specs: "Ép cọc đại trà, Máy ép thủy lực lớn",
	},
];

export function Projects() {
	return (
		<Section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Tiêu đề phần (Có đường border ngắn ngắn chuẩn mẫu cũ) */}
				<TitleSection
					title="Dự Án Đã Thi Công Thực Tế"
					subtitle="Hàng trăm công trình nhà dân, biệt thự và nhà xưởng được Hùng Dũng thi
					công móng vững chắc tại Đồng Nai & Vũng Tàu."
					label={{ icon: BuildingsIcon, content: "Công trình tiêu biểu" }}
				/>
				{/* Lưới danh sách dự án */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{featuredProjects.map((project, index) => (
						<Animate
							key={project.id}
							initial={{ opacity: 0, transform: "translateY(25px)" }}
							animate={{ opacity: 1, transform: "translateY(0)" }}
							transition={{
								duration: 0.7,
								delay: 0.15 * (index + 1),
								ease: "cubic-bezier(0.16, 1, 0.3, 1)",
							}}
							className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700 flex flex-col justify-between"
						>
							{/* Hình ảnh dự án */}
							<div className="relative h-60 overflow-hidden bg-zinc-200 dark:bg-zinc-700">
								<img
									src={project.image}
									alt={project.title}
									width={600}
									height={400}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
									{project.category}
								</span>
							</div>

							{/* Nội dung chi tiết */}
							<div className="p-6 flex flex-col grow justify-between">
								<div>
									<div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-2">
										<MapPinIcon size={16} weight="fill" />
										<span>{project.location}</span>
									</div>
									<h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
										{project.specs}
									</p>
								</div>

								<Link
									to="/cong-trinh-xay-dung"
									className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-700/60"
								>
									<span>Xem chi tiết công trình</span>
									<ArrowRightIcon size={16} weight="bold" />
								</Link>
							</div>
						</Animate>
					))}
				</div>
				{/* Nút xem tất cả công trình */}
				<div className="text-center">
					<Animate
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.6, ease: "ease-out" }}
					>
						<Button
							asChild
							size="lg"
							className="rounded-full px-8 font-semibold shadow-lg hover:scale-105 transition-all"
						>
							<Link
								to="/cong-trinh-xay-dung"
								className="flex items-center gap-2"
							>
								<span>Xem tất cả công trình</span>
								<ArrowRightIcon size={18} weight="bold" />
							</Link>
						</Button>
					</Animate>
				</div>
			</div>
		</Section>
	);
}
