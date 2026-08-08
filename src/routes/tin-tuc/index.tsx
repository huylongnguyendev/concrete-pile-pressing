import { createFileRoute, Link } from "@tanstack/react-router";
import { Animate } from "#/components/animation/Animate";
import { ContactCta } from "#/components/base/ContactCta";

interface IPost {
	id: string;
	title: string;
	description: string;
	slug: string;
	thumbnail?: string;
	publishedAt: string;
	category: string;
}

const mockPosts: IPost[] = [
	{
		id: "1",
		title:
			"Quy trình ép cọc bê tông nhà dân chuẩn kỹ thuật tại Đồng Nai và Vũng Tàu",
		description:
			"Tìm hiểu chi tiết các bước trong quy trình ép cọc bê tông cốt thép cho nhà phố, nhà dân dụng đảm bảo độ bền vững, chống lún nứt cho móng công trình.",
		slug: "quy-trinh-ep-coc-be-tong-nha-dan",
		publishedAt: "10/06/2026",
		category: "Kỹ thuật thi công",
	},
	{
		id: "2",
		title: "Khi nào cần phải khoan mồi (khoan dẫn) trước khi ép cọc bê tông?",
		description:
			"Phương pháp khoan dẫn giúp giảm áp lực đất nền, tránh hiện tượng đùn đất sang các công trình liền kề khi thi công ở khu vực đô thị đông dân cư.",
		slug: "khi-nao-can-khoan-dan-truoc-khi-ep-coc",
		publishedAt: "05/06/2026",
		category: "Kiến thức chuyên ngành",
	},
];

export const Route = createFileRoute("/tin-tuc/")({
	component: RouteComponent,
});

function RouteComponent() {
	const featuredPost = mockPosts[0];
	const otherPosts = mockPosts.slice(1);

	return (
		<div className="max-w-4xl mx-auto px-4 py-8 font-sans text-accent-foreground overflow-hidden">
			{/* Tiêu đề chính & Slogan */}
			<Animate transition={{ duration: 0.6 }}>
				<div className="mb-8 border-b pb-4">
					<h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 capitalize">
						Tin Tức & Kiến Thức Xây Dựng
					</h1>
					<p className="text-lg font-medium text-accent-foreground/85">
						Cập nhật kiến thức kỹ thuật móng cọc và các thông tin hoạt động từ
						Ép cọc Hùng Dũng
					</p>
					<p className="text-sm text-primary font-semibold mt-1 uppercase tracking-wide">
						Chuyên gia nền móng tại Đồng Nai & Bà Rịa - Vũng Tàu
					</p>
				</div>
			</Animate>

			{/* Bài viết nổi bật (Featured Post) */}
			{featuredPost && (
				<Animate transition={{ duration: 0.6, delay: 0.2 }}>
					<div className="mb-12 bg-background rounded-xl border border-border hover:border-primary transition-all shadow-sm overflow-hidden group">
						<div className="grid md:grid-cols-2 gap-0">
							<div className="h-64 md:h-auto bg-primary/10 flex items-center justify-center text-primary font-semibold relative overflow-hidden">
								<div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors flex items-center justify-center p-6 text-center">
									<span className="text-sm text-primary font-bold">
										[Hình ảnh: {featuredPost.title}]
									</span>
								</div>
							</div>
							<div className="p-6 md:p-8 flex flex-col justify-between">
								<div>
									<span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-md mb-3">
										{featuredPost.category}
									</span>
									<Link
										to={"/tin-tuc/$slug"}
										params={{ slug: featuredPost.slug }}
									>
										<h2 className="text-xl md:text-2xl font-bold text-accent-foreground group-hover:text-primary transition-colors mb-3">
											{featuredPost.title}
										</h2>
									</Link>
									<p className="text-accent-foreground/75 text-sm md:text-base leading-relaxed mb-6">
										{featuredPost.description}
									</p>
								</div>
								<div className="flex items-center justify-between text-xs text-accent-foreground/65 pt-4 border-t border-border">
									<span>Ngày đăng: {featuredPost.publishedAt}</span>
									<Link
										to={"/tin-tuc/$slug"}
										params={{ slug: featuredPost.slug }}
										className="text-primary font-bold hover:underline flex items-center gap-1"
									>
										Xem chi tiết &rarr;
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Animate>
			)}

			{/* Danh sách bài viết khác */}
			<section className="mt-8 mb-12">
				<Animate transition={{ duration: 0.5 }}>
					<h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
						<span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
						Bài viết mới nhất & Kỹ thuật thi công
					</h2>
				</Animate>

				<div className="grid md:grid-cols-2 gap-6">
					{otherPosts.map((post, index) => (
						<Animate
							key={post.id}
							transition={{ duration: 0.6, delay: index * 0.15 }}
						>
							<div className="bg-background rounded-xl border border-border hover:border-primary shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all h-full group">
								<div>
									<div className="h-48 bg-primary/5 flex items-center justify-center text-primary/70 relative overflow-hidden">
										<span className="text-xs font-semibold p-4 text-center">
											[Hình ảnh: {post.title}]
										</span>
									</div>
									<div className="p-5">
										<span className="inline-block bg-muted text-accent-foreground/80 text-xs font-bold px-2.5 py-1 rounded mb-3">
											{post.category}
										</span>
										<Link to={"/tin-tuc/$slug"} params={{ slug: post.slug }}>
											<h3 className="font-bold text-lg text-accent-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
												{post.title}
											</h3>
										</Link>
										<p className="text-accent-foreground/75 text-sm leading-relaxed line-clamp-3">
											{post.description}
										</p>
									</div>
								</div>
								<div className="px-5 pb-5 flex items-center justify-between text-xs text-accent-foreground/60 border-t border-border/60 pt-4 mt-2">
									<span>{post.publishedAt}</span>
									<Link
										to={"/tin-tuc/$slug"}
										params={{ slug: post.slug }}
										className="text-primary font-bold hover:underline"
									>
										Đọc tiếp &rarr;
									</Link>
								</div>
							</div>
						</Animate>
					))}
				</div>
			</section>
			<ContactCta />
		</div>
	);
}
