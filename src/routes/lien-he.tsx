import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
// Import các icon từ Phosphor Icons (đảm bảo package @phosphor-icons/react đã được cài đặt trong project)
import {
	PhoneCall,
	EnvelopeSimple,
	MapPin,
	Clock,
} from "@phosphor-icons/react";
import { Animate } from "#/components/animation/Animate";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { ContactCta } from "#/components/base/ContactCta";

export const Route = createFileRoute("/lien-he")({
	component: RouteComponent,
});

function RouteComponent() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Xử lý logic gửi form tại đây
		setIsSubmitted(true);
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-8 font-sans text-accent-foreground overflow-hidden">
			{/* Tiêu đề chính & Slogan */}
			<Animate transition={{ duration: 0.6 }}>
				<div className="mb-8 border-b pb-4 text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 capitalize">
						Liên hệ với chúng tôi
					</h1>
					<p className="text-lg font-medium text-accent-foreground/85">
						Ép cọc bê tông Hùng Dũng - Nền móng vững chắc cho mọi công trình
					</p>
					<p className="text-sm text-primary font-semibold mt-1 uppercase tracking-wide">
						Tư vấn khảo sát & Báo giá nhanh chóng tại Đồng Nai & Vũng Tàu
					</p>
				</div>
			</Animate>

			<div className="grid md:grid-cols-3 gap-8 mb-12">
				{/* Thông tin liên hệ bên trái với Phosphor Icons */}
				<Animate
					transition={{ duration: 0.6, delay: 0.2 }}
					className="md:col-span-1"
				>
					<div className="bg-primary/5 p-6 rounded-xl border border-primary/10 h-full flex flex-col justify-between space-y-6">
						<div>
							<h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
								<MapPin size={22} weight="fill" className="text-primary" />{" "}
								Thông tin liên hệ
							</h2>

							<ul className="space-y-4 text-sm text-accent-foreground/85">
								<li className="flex items-start gap-3">
									<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
										<PhoneCall size={18} weight="bold" />
									</div>
									<div>
										<strong className="block text-accent-foreground">
											Hotline / Zalo:
										</strong>
										<a
											href="tel:0912345678"
											className="text-primary font-semibold hover:underline"
										>
											0912 345 678
										</a>
									</div>
								</li>

								<li className="flex items-start gap-3">
									<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
										<EnvelopeSimple size={18} weight="bold" />
									</div>
									<div>
										<strong className="block text-accent-foreground">
											Email:
										</strong>
										<span className="text-accent-foreground/75">
											epcochungdung@gmail.com
										</span>
									</div>
								</li>

								<li className="flex items-start gap-3">
									<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
										<MapPin size={18} weight="bold" />
									</div>
									<div>
										<strong className="block text-accent-foreground">
											Văn phòng & Xưởng:
										</strong>
										<span className="text-accent-foreground/75 leading-relaxed">
											phường Long Bình, Thành phố Đồng Nai
										</span>
									</div>
								</li>

								<li className="flex items-start gap-3">
									<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
										<Clock size={18} weight="bold" />
									</div>
									<div>
										<strong className="block text-accent-foreground">
											Giờ làm việc:
										</strong>
										<span className="text-accent-foreground/75">
											Thứ 2 - Chủ Nhật: 7:00 - 18:00
										</span>
									</div>
								</li>
							</ul>
						</div>

						<div className="pt-4 border-t border-primary/10">
							<p className="text-xs text-accent-foreground/70 italic">
								* Hỗ trợ khảo sát thực tế tận chân công trình miễn phí trong khu
								vực trọng điểm.
							</p>
						</div>
					</div>
				</Animate>

				{/* Form gửi yêu cầu sử dụng Shadcn Label & Input */}
				<Animate
					transition={{ duration: 0.6, delay: 0.3 }}
					className="md:col-span-2"
				>
					<div className="bg-background p-6 md:p-8 rounded-xl border border-border shadow-sm">
						<h2 className="text-xl font-bold text-primary mb-2">
							Gửi yêu cầu tư vấn & báo giá
						</h2>
						<p className="text-sm text-accent-foreground/75 mb-6">
							Điền thông tin bên dưới, kỹ thuật viên của chúng tôi sẽ liên hệ
							lại ngay lập tức.
						</p>

						{isSubmitted ? (
							<div className="bg-primary/10 border border-primary/20 p-6 rounded-xl text-center space-y-3">
								<div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
									✓
								</div>
								<h3 className="text-lg font-bold text-primary">
									Gửi yêu cầu thành công!
								</h3>
								<p className="text-sm text-accent-foreground/80 max-w-md mx-auto">
									Cảm ơn bạn đã tin tưởng Ép cọc bê tông Hùng Dũng. Chúng tôi sẽ
									gọi lại cho bạn trong thời gian sớm nhất.
								</p>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setIsSubmitted(false)}
									className="mt-2"
								>
									Gửi yêu cầu khác
								</Button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="fullName">
											Họ và tên <span className="text-red-500">*</span>
										</Label>
										<Input
											id="fullName"
											type="text"
											required
											placeholder="Nhập họ và tên của bạn"
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="phone">
											Số điện thoại <span className="text-red-500">*</span>
										</Label>
										<Input
											id="phone"
											type="tel"
											required
											placeholder="Nhập số điện thoại liên hệ"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="region">
										Khu vực công trình <span className="text-red-500">*</span>
									</Label>
									<select
										id="region"
										required
										className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									>
										<option value="" className="bg-background">
											-- Chọn khu vực thi công --
										</option>
										<option value="bien-hoa" className="bg-background">
											Biên Hòa (Đồng Nai)
										</option>
										<option value="long-thanh" className="bg-background">
											Long Thành (Đồng Nai)
										</option>
										<option value="nhon-trach" className="bg-background">
											Nhơn Trạch (Đồng Nai)
										</option>
										<option value="phu-my" className="bg-background">
											Phú Mỹ (Bà Rịa - Vũng Tàu)
										</option>
										<option value="vung-tau" className="bg-background">
											TP. Vũng Tàu (Bà Rịa - Vũng Tàu)
										</option>
										<option value="ba-ria" className="bg-background">
											TP. Bà Rịa (Bà Rịa - Vũng Tàu)
										</option>
										<option value="khac" className="bg-background">
											Khu vực khác thuộc Đồng Nai / Vũng Tàu
										</option>
									</select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">
										Nội dung yêu cầu / Ghi chú công trình
									</Label>
									<textarea
										id="message"
										rows={4}
										placeholder="VD: Thi công ép cọc nhà phố 3 tầng, diện tích 100m2 tại Long Thành..."
										className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
									></textarea>
								</div>

								<Button
									type="submit"
									size="lg"
									className="w-full font-bold mt-2"
								>
									Gửi yêu cầu tư vấn ngay
								</Button>
							</form>
						)}
					</div>
				</Animate>
			</div>

			{/* Vùng mạng lưới phục vụ */}
			<section className="mb-12">
				<Animate transition={{ duration: 0.5 }}>
					<div className="bg-primary/5 p-6 rounded-xl border border-primary/15 text-center">
						<h2 className="text-xl font-semibold text-primary mb-2 flex items-center justify-center gap-2">
							<MapPin size={20} weight="fill" className="text-primary" /> Mạng
							lưới thi công rộng khắp
						</h2>
						<p className="text-accent-foreground/80 text-sm max-w-2xl mx-auto mb-4">
							Với các đội máy ép tải, ép neo cùng xe vận chuyển cọc chuyên dụng
							luôn túc trực, chúng tôi đảm bảo thời gian triển khai thi công
							nhanh chóng tại mọi huyện, thành phố thuộc Đồng Nai và Bà Rịa -
							Vũng Tàu.
						</p>
					</div>
				</Animate>
			</section>
			<ContactCta />
		</div>
	);
}