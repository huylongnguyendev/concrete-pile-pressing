import { Link } from "@tanstack/react-router";

export function Logo() {
	return (
		<div className="logo flex items-center font-heading uppercase text-center text-primary">
			<Link to="/">
				<p className="font-bold text-2xl md:text-3xl leading-6">HÙNG DŨNG</p>
				<p className="font-semibold tracking-widest text-sm">Ép cọc bê tông</p>
			</Link>
		</div>
	);
}
