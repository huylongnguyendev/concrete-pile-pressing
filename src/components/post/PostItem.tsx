import { Link } from "@tanstack/react-router";
import { Animate } from "../animation/Animate";

export function PostItem() {
	return (
		<Animate key={post.id} transition={{ duration: 0.6, delay: index * 0.15 }}>
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
	);
}
