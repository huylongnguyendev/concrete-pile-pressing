import { EnvelopeSimpleOpenIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";

export function FooterTop() {
	return (
		<div className="space-y-6 flex max-lg:flex-col md:justify-between">
			<div className="font-semibold">
				<p className="text-lg">Liên hệ chúng tôi</p>
				<p className="text-sm text-zinc-400">
					Tư vấn miễn phí và mọi thông tin chi tiết thông qua:
				</p>
			</div>
			<div className="flex max-md:flex-col md:items-center gap-4 text-center">
				<Button size={"lg"} asChild>
					<a href="tel:0967386080">
						<PhoneCallIcon weight="fill" />
						<span>Hotline: 0967.386.080</span>
					</a>
				</Button>
				<p className="text-sm text-zinc-400">Hoặc gửi qua Email</p>
				<Button variant={"secondary"} size={"lg"} asChild>
					<a href="mailto:epcocbetonghungdung@gmail.com">
						<EnvelopeSimpleOpenIcon weight="bold" />
						<span>epcocbetonghungdung@gmail.com</span>
					</a>
				</Button>
			</div>
		</div>
	);
}
