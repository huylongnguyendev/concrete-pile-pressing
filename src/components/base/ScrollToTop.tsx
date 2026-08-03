import { CaretDoubleUpIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { cn } from "#/lib/utils";
import { Button } from "../ui/button";

export function ScrollToTop() {
	const [canVisible, setCanVisible] = useState<boolean>(false);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) setCanVisible(true);
			else setCanVisible(false);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<Button
			size={"icon-lg"}
			className={cn(
				"fixed bottom-16 right-4 z-9999 transition-all opacity-0 translate-y-4 pointer-events-none",
				canVisible && "opacity-100 translate-y-0 pointer-events-auto",
			)}
			onClick={handleScrollToTop}
		>
			<CaretDoubleUpIcon weight="bold" />
		</Button>
	);
}
