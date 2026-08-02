import { headerContactList } from "#/data/header/header-contact.data";
import { ContactItem } from "./top/ContactItem";
import { ContactLink } from "./top/ContactLink";

export function HeaderTop() {
	return (
		<div className="contain max-md:hidden bg-accent border-b border-primary flex justify-between">
			<ul aria-label="Danh sách liên hệ" className="flex items-center gap-1">
				{headerContactList.map((item, i) => (
					<ContactItem key={item.key} item={item} index={i} />
				))}
			</ul>
			<ContactLink />
		</div>
	);
}
