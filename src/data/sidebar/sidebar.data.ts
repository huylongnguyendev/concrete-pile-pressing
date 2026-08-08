import {
	ChartLineUpIcon,
	FileTextIcon,
	FolderUserIcon,
	type Icon,
	SquaresFourIcon,
} from "@phosphor-icons/react";

interface ISideBarItem {
	label: string;
	key: string;
	href: string;
	icon: Icon;
}

const sidebarAppList: ISideBarItem[] = [
	{
		key: "sidebar-home",
		label: "Tổng quan",
		href: "./",
		icon: SquaresFourIcon,
	},
	{
		key: "sidebar-dasboard",
		label: "phân tích",
		href: "/admin/analys",
		icon: ChartLineUpIcon,
	},
];

const sidebarMangageList: ISideBarItem[] = [
	{
		key: "sidebar-customer",
		label: "quản lý khách hàng",
		href: "/admin/customer",
		icon: FileTextIcon,
	},
	{
		key: "sidebar-content",
		label: "quản lý nội dung",
		href: "/admin/content",
		icon: FolderUserIcon,
	},
	{
		key: "sidebar-staff",
		label: "quản lý Nhân viên",
		href: "/admin/staff",
		icon: FolderUserIcon,
	},
];

export { sidebarAppList, sidebarMangageList, type ISideBarItem };
