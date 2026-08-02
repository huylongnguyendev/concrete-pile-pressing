import {
	ArrowCounterClockwiseIcon,
	GlobeSimpleXIcon,
	HouseIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export function NotFound() {
	return (
		<div className="w-full h-[calc(100dvh-120.8px)] flex flex-col items-center justify-center gap-6">
			<GlobeSimpleXIcon
				size={96}
				weight="bold"
				className="text-primary animate-pulse"
			/>
			<div className="text-center">
				<h2 className="text-2xl lg:text-3xl font-bold text-primary">
					404 - Page Not Found
				</h2>
				<p className="lg:text-lg text-muted-foreground capitalize font-semibold tracking-tight">
					Không tìm thấy trang yêu cầu
				</p>
			</div>
			<div className="flex max-lg:flex-col items-center justify-center gap-4">
				<Link
					to="/"
					className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold cta"
				>
					<HouseIcon size={16} weight="bold" />
					<span>Quay về trang chủ</span>
				</Link>
				<button
					type="button"
					className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all cta"
					onClick={() => window.history.back()}
				>
					<ArrowCounterClockwiseIcon size={16} weight="bold" />
					<span>Quay về trang trước</span>
				</button>
			</div>
		</div>
	);
}
