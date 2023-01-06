import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
	return (
		<div id="home" className="drop-shadow-2xl">
			<div className="w-screen min-h-screen bg-[url('../pictures/hero_bar.jpg')] bg-center bg-cover flex flex-col justify-end">
				<div className="container mx-auto flex flex-col text-white text-left">
					<h1 className="mb-5 max-w-xl text-7xl font-sans">
						Trenuj pod najlepszym okiem
					</h1>
					<h5>z Pawłem Klimkiem</h5>
					<Link href="#about" className="self-center">
						<button className="btn btn-outline btn-primary rounded-full w-20 h-20 text-2xl">
							<HiArrowDown />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
