import { Link } from "@tanstack/react-router";

export function Logo({
	isSidebar = false,
	isSidebarOpen,
}: {
	isSidebar?: boolean;
	isSidebarOpen?: boolean;
}) {
	if (isSidebar) {
		if (isSidebarOpen)
			return (
				<div className="logo flex items-center font-heading uppercase text-center text-primary">
					<Link to="/">
						<p className="font-bold text-lg md:text-xl leading-8">HÙNG DŨNG</p>
						<p className="font-semibold tracking-widest text-xs flex items-center justify-between">
							<span>É</span>
							<span>p</span>
							<span>c</span>
							<span>ọ</span>
							<span>c</span>
							<span>b</span>
							<span>ê</span>
							<span>t</span>
							<span>ô</span>
							<span>n</span>
							<span>g</span>
							<span>u</span>
							<span>y</span>
							<span>t</span>
							<span>í</span>
							<span>n</span>
						</p>
					</Link>
				</div>
			);
		else
			return (
				<div className="font-heading uppercase text-center text-primary">
					<Link to="/" >
						HD
					</Link>
				</div>
			);
	}

	return (
		<div className="logo flex items-center font-heading uppercase text-center text-primary">
			<Link to="/">
				<p className="font-bold text-2xl md:text-3xl leading-8">HÙNG DŨNG</p>
				<p className="font-semibold tracking-widest text-xs flex items-center justify-between">
					<span>É</span>
					<span>p</span>
					<span>c</span>
					<span>ọ</span>
					<span>c</span>
					<span>b</span>
					<span>ê</span>
					<span>t</span>
					<span>ô</span>
					<span>n</span>
					<span>g</span>
					<span>u</span>
					<span>y</span>
					<span>t</span>
					<span>í</span>
					<span>n</span>
				</p>
			</Link>
		</div>
	);
}
