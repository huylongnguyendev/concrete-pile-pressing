import { EnvelopeSimpleOpenIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";

export function FooterTop() {
	return (
		<div className="space-y-6 flex max-lg:flex-col lg:items-center lg:justify-between">
			<div className="font-semibold space-y-1">
				<p className="text-xl font-heading">Liên hệ chúng tôi</p>
				<p className="text-sm text-zinc-400 font-normal">
					Tư vấn miễn phí và mọi thông tin chi tiết thông qua:
				</p>
			</div>
			<div className="flex max-md:flex-col md:items-center gap-4 text-center">
				<Button
					size={"lg"}
					asChild
					className="font-semibold shadow-md hover:scale-105 transition-all"
				>
					<a href="tel:0967386080" className="flex items-center gap-2">
						<PhoneCallIcon weight="fill" className="size-5" />
						<span>Hotline: 0967.386.080</span>
					</a>
				</Button>
				<span className="text-sm text-zinc-400 font-medium hidden md:inline">
					Hoặc
				</span>
				<Button
					variant={"secondary"}
					size={"lg"}
					asChild
					className="font-semibold shadow-md hover:scale-105 transition-all"
				>
					<a
						href="mailto:epcocbetonghungdung@gmail.com"
						className="flex items-center gap-2"
					>
						<EnvelopeSimpleOpenIcon weight="bold" className="size-5" />
						<span>epcocbetonghungdung@gmail.com</span>
					</a>
				</Button>
			</div>
		</div>
	);
}