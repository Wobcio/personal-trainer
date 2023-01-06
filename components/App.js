import About from "./about";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import React, { useState } from "react";
import { useScrollPosition } from "../pages/api/useScrollPosition";
import Video from "./video";

export default function App() {
	const scrollPosition = useScrollPosition();

	console.log(scrollPosition);

	return (
		<div className="scroll-smooth overflow-hidden" data-theme="coffee">
			<Navbar scrollPosition={scrollPosition} />
			<Hero />
			<About />
			<Video />
		</div>
	);
}
