import { useEffect, useState } from "react";

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(scrollY);
		};
		window.addEventListener("scroll", updatePosition);
	}, []);
	return scrollPosition;
};
