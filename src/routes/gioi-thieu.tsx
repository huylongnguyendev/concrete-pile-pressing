import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "#/components/animation/Animate";
import { ContactCta } from "#/components/base/ContactCta";
import { CountUp } from "#/components/base/CountUp";
import introduce from "#/data/json/introduce/content.json" with {
	type: "json",
};

export const Route = createFileRoute("/gioi-thieu")({
	component: RouteComponent,
});

function RouteComponent() {
	const data = introduce;

	const clients = data.khachHangTieuBieu || [];
	const duplicatedClients = [...clients, ...clients];

	return (
		<div className="max-w-4xl mx-auto px-4 py-8 font-sans text-accent-foreground overflow-hidden">
			{/* Tiêu đề chính & Slogan */}
			<Animate transition={{ duration: 0.6 }}>
				<div className="mb-6 border-b pb-4">
					<h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 capitalize">
						{data.title}
					</h1>
					{data.subTitle && (
						<p className="text-lg font-medium text-accent-foreground/85">
							{data.subTitle}
						</p>
					)}
					{data.tagline && (
						<p className="text-sm text-primary font-semibold mt-1 uppercase tracking-wide">
							{data.tagline}
						</p>
					)}
				</div>
			</Animate>

			{/* Thống kê nhanh (Stats) */}
			{data.stats && data.stats.length > 0 && (
				<Animate transition={{ duration: 0.6, delay: 0.2 }}>
					<div className="grid grid-cols-3 gap-4 mb-8 bg-primary/5 p-6 rounded-xl border border-primary/10 text-center">
						{data.stats.map((stat, index) => {
							const key = `stat-item-${index}`;
							return (
								<CountUp
									key={key}
									title={stat.label}
									number={Number(stat.value) ?? 0}
									prefix={stat.prefix}
									index={index}
								/>
							);
						})}
					</div>
				</Animate>
			)}

			{/* Hình ảnh tổng quan (nếu có) */}
			{data.mainImage?.url && (
				<Animate transition={{ duration: 0.7, delay: 0.3 }}>
					<div className="mb-8 rounded-xl overflow-hidden shadow-md">
						<img
							src={data.mainImage.url}
							alt={data.mainImage.alt}
							className="w-full h-auto object-cover max-h-100"
						/>
					</div>
				</Animate>
			)}

			{/* Các đoạn văn giới thiệu - Tích hợp định hướng trọng điểm Đồng Nai & Vũng Tàu */}
			<Animate transition={{ duration: 0.6, delay: 0.4 }}>
				<div className="space-y-4 text-lg leading-relaxed text-accent-foreground/90 mb-10">
					<p>
						Ép cọc bê tông Hùng Dũng là đơn vị chuyên cung cấp dịch vụ ép cọc bê
						tông cốt thép, khoan dẫn và vận chuyển cấu kiện cọc chuyên nghiệp.
						Với hơn 20 năm kinh nghiệm, chúng tôi tự hào là đối tác tin cậy thi
						công nền móng cho hàng loạt công trình dân dụng và công nghiệp trọng
						điểm, đặc biệt tập trung đẩy mạnh tại các khu vực phát triển sôi
						động như <strong>Đồng Nai</strong> (Biên Hòa, Long Thành, Nhơn
						Trạch) và <strong>Bà Rịa - Vũng Tàu</strong> (Phú Mỹ, Vũng Tàu, Bà
						Rịa).
					</p>
					<p>
						Chúng tôi sở hữu hệ thống giàn ép tải, ép neo và máy móc hiện đại,
						đáp ứng nhanh chóng mọi yêu cầu thi công trên mọi địa chất phức tạp.
						Cam kết mang lại nền móng vững chắc, an toàn tuyệt đối, tối ưu hóa
						chi phí và đảm bảo tiến độ chính xác cho mọi chủ đầu tư.
					</p>
				</div>
			</Animate>

			{/* Tầm nhìn & Sứ mệnh */}
			{data.tamNhinSuMenh && (
				<div className="grid md:grid-cols-2 gap-6 mb-12">
					<Animate
						initial={{ opacity: 0, transform: "translateX(-30px)" }}
						animate={{ opacity: 1, transform: "translateX(0)" }}
						transition={{ duration: 0.6 }}
					>
						<div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors shadow-sm h-full">
							<h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
								🎯 Tầm nhìn
							</h3>
							<p className="text-accent-foreground/85 leading-relaxed text-sm md:text-base">
								{data.tamNhinSuMenh.tamNhin}
							</p>
						</div>
					</Animate>

					<Animate
						initial={{ opacity: 0, transform: "translateX(30px)" }}
						animate={{ opacity: 1, transform: "translateX(0)" }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors shadow-sm h-full">
							<h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
								🚀 Sứ mệnh
							</h3>
							<p className="text-accent-foreground/85 leading-relaxed text-sm md:text-base">
								{data.tamNhinSuMenh.suMenh}
							</p>
						</div>
					</Animate>
				</div>
			)}

			{/* Lĩnh vực hoạt động */}
			<section className="mt-8 mb-12">
				<Animate transition={{ duration: 0.5 }}>
					<h2 className="text-2xl font-semibold text-primary mb-6">
						Lĩnh vực hoạt động
					</h2>
				</Animate>

				<div className="grid md:grid-cols-2 gap-6">
					{data.linhVucHoatDong.map((item, index) => (
						<Animate
							key={item.id}
							transition={{ duration: 0.6, delay: index * 0.15 }}
						>
							<div className="bg-background rounded-lg border border-border hover:border-primary shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all h-full">
								{item.image && (
									<div className="h-48 overflow-hidden bg-muted">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								)}
								<div className="p-5 flex-1 flex flex-col justify-between">
									<div>
										<h3 className="font-bold text-lg text-accent-foreground mb-2">
											{item.title}
										</h3>
										<p className="text-accent-foreground/75 text-sm leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						</Animate>
					))}
				</div>
			</section>

			{/* Quy trình thi công chuẩn */}
			{data.quyTrinhThiCong && (
				<section className="mt-8 mb-12">
					<Animate transition={{ duration: 0.5 }}>
						<h2 className="text-2xl font-semibold text-primary mb-6">
							Quy trình thi công chuẩn
						</h2>
					</Animate>

					<div className="grid md:grid-cols-1 gap-4">
						{data.quyTrinhThiCong.map((stepItem, index) => (
							<Animate
								key={stepItem.step}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="bg-background p-5 rounded-xl border border-border hover:border-primary shadow-sm flex items-start gap-4 transition-all">
									<span className="text-xl font-extrabold text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
										{stepItem.step}
									</span>
									<div>
										<h3 className="font-bold text-lg text-accent-foreground mb-1">
											{stepItem.title}
										</h3>
										<p className="text-accent-foreground/75 text-sm leading-relaxed">
											{stepItem.description}
										</p>
									</div>
								</div>
							</Animate>
						))}
					</div>
				</section>
			)}

			{/* Cam kết chất lượng */}
			{data.camKetChatLuong && (
				<section className="mt-8 mb-12">
					<Animate transition={{ duration: 0.5 }}>
						<h2 className="text-2xl font-semibold text-primary mb-6">
							Cam kết chất lượng từ Hùng Dũng
						</h2>
					</Animate>

					<div className="grid md:grid-cols-3 gap-4">
						{data.camKetChatLuong.map((item, index) => {
							const key = `cam-ket-item-${index}`;
							return (
								<Animate
									key={key}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
								>
									<div className="bg-background p-5 rounded-xl border border-border hover:border-primary shadow-sm h-full flex flex-col justify-between">
										<div>
											<h3 className="font-bold text-base text-primary mb-2">
												{item.title}
											</h3>
											<p className="text-accent-foreground/75 text-sm leading-relaxed">
												{item.description}
											</p>
										</div>
									</div>
								</Animate>
							);
						})}
					</div>
				</section>
			)}

			{/* Khu vực phục vụ - Làm nổi bật Đồng Nai & Vũng Tàu */}
			{data.khuVucPhucVu && (
				<section className="mt-8 mb-12">
					<Animate transition={{ duration: 0.5 }}>
						<div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
							<h2 className="text-xl font-semibold text-primary mb-3">
								📍 Trọng điểm thị trường thi công: Đồng Nai & Bà Rịa - Vũng Tàu
							</h2>
							<p className="text-accent-foreground/80 text-sm mb-4 leading-relaxed">
								Chúng tôi tập trung nguồn lực mạnh mẽ để đáp ứng nhanh chóng các
								yêu cầu ép cọc, khảo sát và vận chuyển cấu kiện cho các chủ đầu
								tư tại:
							</p>
							<div className="flex flex-wrap gap-2">
								{data.khuVucPhucVu.map((khuVuc: string) => (
									<span
										key={khuVuc}
										className={`px-3.5 py-2 rounded-lg border text-xs font-bold transition-all shadow-2xs ${
											khuVuc.includes("Đồng Nai") || khuVuc.includes("Bà Rịa")
												? "bg-primary text-primary-foreground border-primary"
												: "bg-background text-accent-foreground/90 border-border"
										}`}
									>
										{khuVuc}
									</span>
								))}
							</div>
						</div>
					</Animate>
				</section>
			)}

			{/* Khách hàng tiêu biểu - Kiểu Marquee chạy liên tục kèm MST & Mờ 2 bên */}
			{clients.length > 0 && (
				<section className="mt-12 overflow-hidden">
					<Animate transition={{ duration: 0.5 }}>
						<h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
							<span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
							Khách hàng & Đối tác tiêu biểu
						</h2>
					</Animate>

					<div className="relative w-full overflow-hidden py-2 mask-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)]">
						<div className="animate-marquee flex gap-5 py-2">
							{duplicatedClients.map((client, index) => {
								const key = `${client.id}-${client.taxCode}-${index}`;
								return (
									<div
										key={key}
										className="bg-background px-6 py-4 rounded-xl border border-border/80 hover:border-primary shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center shrink-0 min-w-70 transition-all duration-300 group cursor-pointer"
									>
										<div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<title>{client.name}</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
												></path>
											</svg>
										</div>
										<span className="text-sm font-bold text-accent-foreground/90 whitespace-nowrap mb-1 group-hover:text-primary transition-colors">
											{client.name}
										</span>
										{client.taxCode && (
											<span className="text-[11px] font-mono tracking-wide text-accent-foreground/50 bg-muted/60 px-2 py-0.5 rounded">
												MST: {client.taxCode}
											</span>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</section>
			)}
			<ContactCta />
		</div>
	);
}
