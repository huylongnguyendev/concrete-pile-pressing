import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "#/components/brand/Logo";
import { headerNavList } from "#/components/data/header/header-nav.data";
import { BotList } from "./bot/BotList";
import { ContactLinks } from "./bot/ContactLinks";

export function FooterBot() {
	return (
		<div className="py-6 flex max-md:flex-col justify-between items-start flex-wrap gap-y-12">
			<div className="space-y-4">
				<Logo />
				<p className="text-zinc-400 text-sm w-full max-w-sm text-balance">
					Ép cọc bê tông Hùng Dũng tự hào là đơn vị thi công ép cọc{" "}
					<span className="capitalize font-semibold">
						uy tín - chất lượng - giá cả hợp lý
					</span>{" "}
					tại Đồng Nai, Bà Rịa - Vũng Tàu và các tỉnh tại khu vực Miền Nam.
				</p>
				<ContactLinks />
			</div>
			<BotList title="Địa chỉ liên hệ">
				<li>
					<MapPinIcon size={16} weight="fill" />
					<p>p.Long Bình, Tp. Đồng Nai</p>
				</li>
				<li>
					<PhoneIcon size={16} weight="fill" />
					<p>0967.386.080</p>
				</li>
				<li>
					<EnvelopeIcon size={16} weight="bold" />
					<p>epcocbetonghungdung@gmail.com</p>
				</li>
			</BotList>
			<BotList title="Liên kết">
				{headerNavList.map((item) => (
					<li key={`${item.key}-footer`}>
						<Link
							to={item.href}
							title={item.title}
							className="capitalize hover:text-primary transition-colors duration-300 flex items-center gap-1"
						>
							{item.label}
						</Link>
					</li>
				))}
			</BotList>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3917.8307241192424!2d106.892742!3d10.9004661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU0JzAxLjciTiAxMDbCsDUzJzMzLjkiRQ!5e0!3m2!1svi!2s!4v1785481941158!5m2!1svi!2s"
				width="600"
				height="450"
				style={{ border: 0 }}
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				title="Địa chỉ đơn vị ép cọc uy tín"
				className="w-full"
			/>
		</div>
	);
}
