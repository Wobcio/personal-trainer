export default function Video() {
	return (
		<div id="video">
			<div className="">
				<video
					id="video"
					className="w-full"
					src={require("../pictures/boxVid.mp4")}
					preload="auto"
					autoPlay
					controls
					loop
					muted
				/>
			</div>
		</div>
	);
}
