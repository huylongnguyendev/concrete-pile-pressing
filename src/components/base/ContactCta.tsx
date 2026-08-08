import { Button } from "#/components/ui/button";

interface IContactCta {
	title?: string;
	description?: string;
}

export function ContactCta({
	title = "Bạn cần tư vấn giải pháp ép cọc cho công trình?",
	description = "Đội ngũ kỹ thuật của Ép cọc bê tông Hùng Dũng luôn sẵn sàng hỗ trợ khảo sát và tư vấn miễn phí.",
}: IContactCta) {
	return (
		<section className="mt-12 text-center bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg">
			<h2 className="text-2xl font-bold mb-3">
				{title || "Cần thi công nền móng tại Đồng Nai & Vũng Tàu?"}
			</h2>
			<p className="text-primary-foreground/90 text-sm max-w-xl mx-auto mb-6">
				{description ||
					"Đội ngũ kỹ thuật của Ép cọc bê tông Hùng Dũng luôn sẵn sàng hỗ trợ khảo sát và tư vấn miễn phí."}
			</p>
			<Button asChild variant="secondary" size="lg" className="font-bold">
				<a href="/lien-he">Liên hệ tư vấn ngay</a>
			</Button>
		</section>
	);
}
