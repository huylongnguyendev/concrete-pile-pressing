import { useEffect, useState } from "react";

export function useMobile() {
	const [windowWidth, setWindowWidth] = useState<number | undefined>(() =>
		typeof window === "undefined" ? undefined : window.innerWidth,
	);

	useEffect(() => {
		if (windowWidth === undefined) return;
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [windowWidth]);

	return { isMobile: windowWidth !== undefined && windowWidth <= 1024 };
}
