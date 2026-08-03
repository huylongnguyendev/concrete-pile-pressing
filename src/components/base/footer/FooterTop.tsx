import {
	EnvelopeSimpleOpenIcon,
	PaperPlaneTiltIcon,
	PhoneCallIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";

export function FooterTop() {
	const [phone, setPhone] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert(
			`Đã nhận số điện thoại: ${phone}. Chúng tôi sẽ liên hệ lại sớm nhất!`,
		);
		setPhone("");
	};

	return (
		<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-6 border-b border-border/40">
			{/* Tiêu đề & Mô tả */}
			<div className="space-y-1.5 max-w-lg">
				<p className="text-xl font-heading font-bold text-primary">
					Đăng ký tư vấn miễn phí
				</p>
				<p className="text-sm text-zinc-400 font-normal leading-relaxed">
					Để lại số điện thoại để chúng tôi chủ động liên hệ hỗ trợ nhanh chóng,
					hoặc kết nối trực tiếp qua hotline và email bên dưới.
				</p>
			</div>

			{/* Khu vực tương tác (Form & Nút liên hệ nhanh) */}
			<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
				{/* Form để lại số điện thoại */}
				<form
					onSubmit={handleSubmit}
					className="flex items-center gap-2 bg-zinc-900/50 p-1.5 rounded-xl border border-border/80 shadow-inner"
				>
					<div className="relative flex-1 sm:w-60">
						<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 pointer-events-none z-10">
							<PhoneCallIcon weight="fill" className="size-4 text-primary" />
						</span>
						<Input
							type="tel"
							required
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder="Nhập số điện thoại..."
							className="pl-9 h-10 text-sm border-0 bg-transparent focus-visible:ring-0 shadow-none"
						/>
					</div>
					<Button
						type="submit"
						size="default"
						className="font-semibold shadow-md hover:scale-102 transition-all gap-1.5 shrink-0 h-10 px-4"
					>
						<PaperPlaneTiltIcon weight="bold" className="size-4" />
						<span>Gửi số</span>
					</Button>
				</form>

				{/* Nhóm gọi ngay & gửi email */}
				<div className="flex items-center gap-2.5">
					<Button
						size="default"
						asChild
						className="font-semibold shadow-md hover:scale-102 transition-all h-11 flex-1 sm:flex-initial"
					>
						<a
							href="tel:0967386080"
							className="flex items-center justify-center gap-2"
						>
							<PhoneCallIcon weight="fill" className="size-4" />
							<span>0967.386.080</span>
						</a>
					</Button>

					<Button
						variant="secondary"
						size="default"
						asChild
						className="font-semibold shadow-md hover:scale-102 transition-all h-11 flex-1 sm:flex-initial"
					>
						<a
							href="mailto:epcocbetonghungdung@gmail.com"
							className="flex items-center justify-center gap-2"
						>
							<EnvelopeSimpleOpenIcon weight="bold" className="size-4" />
							<span>Email</span>
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
}
