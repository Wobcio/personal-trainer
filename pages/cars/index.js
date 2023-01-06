import { useRouter } from "next/router";

export default function CarList() {
	const router = useRouter();
	const handleClick = (e) => {
		router.push("cars/" + e.target.value);
	};

	return (
		<div>
			<h1>Car List</h1>

			<button onClick={handleClick} value="Tesla">
				Tesla
			</button>
			<button onClick={handleClick} value="Ford">
				Ford
			</button>
			<button onClick={handleClick} value="Toyota">
				Toyota
			</button>
		</div>
	);
}
