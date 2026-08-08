import { createFileRoute, Link } from "@tanstack/react-router";
import { Animate } from "#/components/animation/Animate";
import { ContactCta } from "#/components/base/ContactCta";

interface IPostDetail {
	slug: string;
	title: string;
	publishedAt: string;
	category: string;
	author: string;
	content: string[];
	relatedPosts: {
		slug: string;
		title: string;
		publishedAt: string;
	}[];
}

// Dữ liệu mẫu chi tiết cho các bài viết
const mockPostDetails: Record<string, IPostDetail> = {
	"quy-trinh-ep-coc-be-tong-nha-dan": {
		slug: "quy-trinh-ep-coc-be-tong-nha-dan",
		title:
			"Quy trình ép cọc bê tông nhà dân chuẩn kỹ thuật tại Đồng Nai và Vũng Tàu",
		publishedAt: "10/06/2026",
		category: "Kỹ thuật thi công",
		author: "Kỹ sư Hùng Dũng",
		content: [
			"Ép cọc bê tông cốt thép là phương pháp gia cố nền móng phổ biến và hiệu quả nhất hiện nay đối với các công trình nhà dân, nhà phố, biệt thự tại các khu vực đất nền có địa chất phức tạp như Đồng Nai và Bà Rịa - Vũng Tàu. Để đảm bảo công trình không bị sụt lún hay nghiêng nứt theo thời gian, quy trình thi công đòi hỏi phải tuân thủ nghiêm ngặt các tiêu chuẩn kỹ thuật.",
			"Bước 1: Khảo sát địa chất và chuẩn bị mặt bằng. Trước khi đưa máy móc vào công trình, đội ngũ kỹ sư sẽ tiến hành kiểm tra lớp đất nền, khảo sát các công trình liền kề để lựa chọn phương án ép tải hay ép neo phù hợp, đồng thời san gạt mặt bằng tạo lối đi an toàn cho xe chở cọc.",
			"Bước 2: Định vị và ép cọc thử. Các kỹ sư tiến hành định vị chính xác vị trí tim cọc theo bản vẽ thiết kế kết cấu. Việc này giúp quá trình thi công diễn ra chuẩn xác tuyệt đối.",
			"Bước 3: Vận chuyển và cẩu cọc vào vị trí. Cọc bê tông cốt thép đạt chuẩn chất lượng sẽ được cẩu lên giàn ép. Kỹ thuật viên kiểm tra độ thẳng đứng của cọc trước khi bắt đầu ép.",
			"Bước 4: Tiến hành ép cọc âm. Dùng hệ thống thủy lực gia tải trọng từ từ để ép cọc xuống độ sâu thiết kế hoặc đạt đến lực ép theo yêu cầu của kỹ sư kết cấu.",
			"Bước 5: Nghiệm thu và bàn giao mặt bằng móng. Sau khi hoàn tất việc ép toàn bộ các tim cọc, đội ngũ tiến hành đo đạc độ sâu thực tế, lập biên bản nghiệm thu để chủ đầu tư yên tâm tiến hành các công đoạn đổ bê tông đài móng tiếp theo.",
		],
		relatedPosts: [
			{
				slug: "khi-nao-can-khoan-dan-truoc-khi-ep-coc",
				title:
					"Khi nào cần phải khoan mồi (khoan dẫn) trước khi ép cọc bê tông?",
				publishedAt: "05/06/2026",
			},
			{
				slug: "bao-gia-ep-coc-be-tong-moi-nhat",
				title:
					"Cập nhật bảng giá dịch vụ ép cọc bê tông trọn gói mới nhất năm 2026",
				publishedAt: "01/06/2026",
			},
		],
	},
	"khi-nao-can-khoan-dan-truoc-khi-ep-coc": {
		slug: "khi-nao-can-khoan-dan-truoc-khi-ep-coc",
		title: "Khi nào cần phải khoan mồi (khoan dẫn) trước khi ép cọc bê tông?",
		publishedAt: "05/06/2026",
		category: "Kiến thức chuyên ngành",
		author: "Kỹ sư Hùng Dũng",
		content: [
			"Phương pháp khoan dẫn (hay còn gọi là khoan mồi) là giải pháp kỹ thuật thường được áp dụng trước khi tiến hành ép cọc bê tông cốt thép tại những khu vực có tầng địa chất cứng hoặc khi thi công nhà liền kề đông dân cư.",
			"Tại sao cần phải khoan dẫn? Khi ép cọc trực tiếp xuống các lớp đất sét cứng đan xen hoặc gặp các lớp sỏi cuội, lực ép yêu cầu sẽ rất lớn, dễ dẫn đến hiện tượng gãy cọc hoặc từ chối cọc (cọc không xuống được độ sâu thiết kế). Hơn nữa, việc ép trực tiếp ở khu vực đô thị chật hẹp tại Biên Hòa hay Vũng Tàu dễ gây ra hiện tượng đùn đất, làm ảnh hưởng nghiêm trọng đến móng của các công trình bên cạnh.",
			"Khi nào bắt buộc phải khoan dẫn? 1. Khi lớp đất mặt quá cứng hoặc có tầng sét dẻo cứng dày. 2. Khi thi công chen chúc giữa các khu dân cư hiện hữu nhằm triệt tiêu lực ép ngang gây nứt nhà hàng xóm. 3. Khi thiết kế yêu cầu cọc phải xuyên qua các lớp địa chất đặc biệt.",
			"Ép cọc Hùng Dũng sở hữu hệ thống máy khoan dẫn chuyên dụng, kết hợp đồng bộ cùng giàn ép tải trọng lớn, giúp xử lý triệt để mọi điều kiện địa chất phức tạp một cách an toàn và nhanh chóng.",
		],
		relatedPosts: [
			{
				slug: "quy-trinh-ep-coc-be-tong-nha-dan",
				title:
					"Quy trình ép cọc bê tông nhà dân chuẩn kỹ thuật tại Đồng Nai và Vũng Tàu",
				publishedAt: "10/06/2026",
			},
			{
				slug: "bao-gia-ep-coc-be-tong-moi-nhat",
				title:
					"Cập nhật bảng giá dịch vụ ép cọc bê tông trọn gói mới nhất năm 2026",
				publishedAt: "01/06/2026",
			},
		],
	},
	"bao-gia-ep-coc-be-tong-moi-nhat": {
		slug: "bao-gia-ep-coc-be-tong-moi-nhat",
		title:
			"Cập nhật bảng giá dịch vụ ép cọc bê tông trọn gói mới nhất năm 2026",
		publishedAt: "01/06/2026",
		category: "Báo giá dịch vụ",
		author: "Bộ phận Kinh doanh Hùng Dũng",
		content: [
			"Công ty Ép cọc Bê tông Hùng Dũng xin gửi tới quý khách hàng bảng cập nhật chi phí dịch vụ thi công nền móng trọn gói tại khu vực Đồng Nai, Bà Rịa - Vũng Tàu và các vùng phụ cận.",
			"Các yếu tố ảnh hưởng đến báo giá ép cọc: 1. Phương pháp ép (Ép neo cho công trình hẻm nhỏ, nhà dân dụng; Ép tải cho công trình lớn, tải trọng cao). 2. Tiết diện cọc và chất lượng cốt thép (Cọc 200x200, 250x250, 300x300...). 3. Khối lượng mét cọc thi công thực tế và điều kiện mặt bằng thi công.",
			"Cam kết từ Hùng Dũng: Báo giá minh bạch, trọn gói không phát sinh chi phí ẩn, cấu kiện cọc sản xuất trực tiếp đạt chuẩn chất lượng kiểm định, thi công đúng tiến độ cam kết trong hợp đồng.",
			"Quý chủ đầu tư có nhu cầu nhận báo giá chi tiết theo bản vẽ kết cấu riêng cho công trình của mình, vui lòng liên hệ trực tiếp qua hotline hoặc trang liên hệ để được kỹ sư khảo sát và tư vấn hoàn toàn miễn phí.",
		],
		relatedPosts: [
			{
				slug: "quy-trinh-ep-coc-be-tong-nha-dan",
				title:
					"Quy trình ép cọc bê tông nhà dân chuẩn kỹ thuật tại Đồng Nai và Vũng Tàu",
				publishedAt: "10/06/2026",
			},
			{
				slug: "khi-nao-can-khoan-dan-truoc-khi-ep-coc",
				title:
					"Khi nào cần phải khoan mồi (khoan dẫn) trước khi ép cọc bê tông?",
				publishedAt: "05/06/2026",
			},
		],
	},
};

export const Route = createFileRoute("/tin-tuc/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	const { slug } = Route.useParams();

	// Lấy bài viết theo slug, fallback về bài đầu tiên nếu không tìm thấy
	const post =
		mockPostDetails[slug] ||
		mockPostDetails["quy-trinh-ep-coc-be-tong-nha-dan"];

	return (
		<div className="max-w-4xl mx-auto px-4 py-8 font-sans text-accent-foreground overflow-hidden">
			{/* Nút quay lại danh sách */}
			<Animate transition={{ duration: 0.4 }}>
				<div className="mb-6">
					<Link
						to="/tin-tuc"
						className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1.5"
					>
						&larr; Quay lại danh sách tin tức
					</Link>
				</div>
			</Animate>

			{/* Tiêu đề & Thông tin bài viết */}
			<Animate transition={{ duration: 0.6 }}>
				<div className="mb-8 border-b pb-6">
					<div className="flex items-center gap-3 mb-3 flex-wrap">
						<span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-md">
							{post.category}
						</span>
						<span className="text-xs text-accent-foreground/60">
							Ngày đăng: {post.publishedAt}
						</span>
						<span className="text-xs text-accent-foreground/60">
							• Tác giả: {post.author}
						</span>
					</div>
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
						{post.title}
					</h1>
				</div>
			</Animate>

			{/* Ảnh minh họa bài viết */}
			<Animate transition={{ duration: 0.6, delay: 0.2 }}>
				<div className="mb-8 h-64 md:h-96 bg-primary/5 rounded-xl border border-border flex items-center justify-center text-primary/70 font-semibold overflow-hidden shadow-sm">
					<span className="text-sm md:text-base text-center p-4">
						[Hình ảnh minh họa chi tiết cho: {post.title}]
					</span>
				</div>
			</Animate>

			{/* Nội dung bài viết */}
			<Animate transition={{ duration: 0.6, delay: 0.3 }}>
				<div className="space-y-6 text-base md:text-lg leading-relaxed text-accent-foreground/90 mb-12 bg-background p-6 md:p-8 rounded-xl border border-border shadow-sm">
					{post.content.map((paragraph, index) => {
						const isHeading =
							paragraph.startsWith("Bước") ||
							paragraph.startsWith("Tại sao") ||
							paragraph.startsWith("Khi nào") ||
							paragraph.startsWith("Các yếu tố") ||
							paragraph.startsWith("Cam kết");

						if (isHeading) {
							return (
								<p
									key={`p-${index}`}
									className="font-bold text-primary text-lg md:text-xl pt-2"
								>
									{paragraph}
								</p>
							);
						}
						return (
							<p key={`p-${index}`} className="text-accent-foreground/85">
								{paragraph}
							</p>
						);
					})}
				</div>
			</Animate>

			{/* Bài viết liên quan */}
			{post.relatedPosts && post.relatedPosts.length > 0 && (
				<section className="mt-8 mb-12">
					<Animate transition={{ duration: 0.5 }}>
						<h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
							<span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
							Bài viết liên quan
						</h2>
					</Animate>

					<div className="grid md:grid-cols-2 gap-6">
						{post.relatedPosts.map((item, index) => (
							<Animate
								key={item.slug}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="bg-background rounded-xl border border-border hover:border-primary shadow-sm p-5 flex flex-col justify-between transition-all h-full group">
									<div>
										<span className="text-xs text-accent-foreground/60 block mb-2">
											{item.publishedAt}
										</span>
										<Link to="/tin-tuc/$slug" params={{ slug: item.slug }}>
											<h3 className="font-bold text-base text-accent-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
												{item.title}
											</h3>
										</Link>
									</div>
									<div className="pt-3 border-t border-border/60 mt-4">
										<Link
											to="/tin-tuc/$slug"
											params={{ slug: item.slug }}
											className="text-primary font-bold text-xs hover:underline flex items-center gap-1"
										>
											Đọc tiếp &rarr;
										</Link>
									</div>
								</div>
							</Animate>
						))}
					</div>
				</section>
			)}

			{/* Call to Action chung */}
			<ContactCta />
		</div>
	);
}
