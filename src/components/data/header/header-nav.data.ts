interface IHeaderNav {
	key: string;
	title: string;
	label: string;
	icon?: React.ElementType;
	href?: string;
	child?: IHeaderNav;
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
	},
	{
		key: "lien-he",
		title: "Liên hệ tư vấn miễn phí",
		label: "liên hệ",
		href: "/lien-he",
	},
];

export { headerNavList, type IHeaderNav };
