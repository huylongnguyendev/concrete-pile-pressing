import { CaretDownIcon, type Icon } from "@phosphor-icons/react";

interface IHeaderNav {
	key: string;
	title: string;
	label: string;
	icon?: Icon;
	href?: string;
	child?: IHeaderNav[];
}

const headerNavList: IHeaderNav[] = [
	{
		key: "trang-chu",
		title:
			"Ép cọc bê tông Hùng Dũng, đơn vị ép cọc bê tông chất lượng - uy tín tại Đồng Nai và Bà Rịa - Vũng Tàu",
		label: "trang chủ",
		href: "/",
	},
	{
		key: "gioi-thieu",
		title: "Thông tin về công ty Ép cọc Bê tông Hùng Dũng",
		label: "giới thiệu",
		href: "/gioi-thieu",
	},
	{
		key: "dich-vu",
		title: "Các dịch vụ của Công ty Ép cọc Bê tông Hùng Dũng",
		label: "dịch vụ",
		href: "/dich-vu",
		icon: CaretDownIcon,
		child: [
			{
				key: "dich-vu-ep-coc",
				title: "Dịch vụ ép cọc bê tông tại Đồng Nai và Bà Rịa - Vũng Tàu",
				label: "dịch vụ ép cọc",
				href: "/dich-vu/ep-coc",
			},
			{
				key: "dich-vu-khoan-dan",
				title: "Dịch vụ khoan dẫn tại Đồng Nai và Bà Rịa - Vũng Tàu",
				label: "dịch vụ khoan dẫn",
				href: "/dich-vu/khoan-dan",
			},
		],
	},
	{
		key: "cong-trinh-thi-cong",
		title: "Các công trình thi công của Công ty Ép cọc Bê tông Hùng Dũng",
		label: "công trình thi công",
		href: "/cong-trinh-thi-cong",
	},
	{
		key: "lien-he",
		title: "Liên hệ tư vấn miễn phí",
		label: "liên hệ",
		href: "/lien-he",
	},
];

export { headerNavList, type IHeaderNav };
