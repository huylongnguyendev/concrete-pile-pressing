import {
	EnvelopeSimpleOpenIcon,
	MapPinIcon,
	PhoneCallIcon,
} from "@phosphor-icons/react";

interface IHeaderContact {
	icon: React.ElementType;
	key: string;
	title: string;
	value: string;
	href: string;
}

const headerContactList: IHeaderContact[] = [
	{
		icon: MapPinIcon,
		key: "address-key",
		title: "Địa chỉ",
		value: "P.Long Bình, Tp. Đồng Nai",
		href: "",
	},
	{
		icon: EnvelopeSimpleOpenIcon,
		key: "email-key",
		title: "Email",
		value: "epcocbetonghungdung@gmail.com",
		href: "mailto:epcocbetonghungdung@gmail.com",
	},
	{
		icon: PhoneCallIcon,
		key: "phone-key",
		title: "Hotline",
		value: "0967.386.080",
		href: "tel:0967386080",
	},
];

export { headerContactList, type IHeaderContact };
