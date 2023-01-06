/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import pic1 from "../pictures/about_1.jpg";

export default function About() {
	return (
		<div id="about">
			<div className="container  py-20 mx-auto flex flex-col items-center">
				<div className="flex flex-col items-center">
					<h1 className="text-4xl text-base-content font-bold">
						Hi!
					</h1>
					<h1 className="text-4xl text-base-content font-bold">
						Let me introduce myself.
					</h1>
				</div>

				<div className="flex w-full mt-20 justify-between">
					<div className="w-1/2 text-2xl flex items-center">
						<div>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Quisquam omnis, aliquid magnam obcaecati
							suscipit quibusdam porro sit facere ipsum non
							placeat commodi ratione aspernatur eveniet illum
							voluptate officia, veniam inventore?
						</div>
					</div>

					<div className="w-1/4 block rounded-lg overflow-hidden filter brightness-75 transition duration-1000 drop-shadow-2xl hover:brightness-90">
						<Image src={pic1} className="object-cover" />
					</div>
				</div>

				<div className="flex w-full mt-60 justify-between">
					<div className="w-1/4 block rounded-lg overflow-hidden filter brightness-75 transition duration-1000 drop-shadow-2xl hover:brightness-90">
						<Image src={pic1} className="object-cover" />
					</div>
					<div className="w-1/2 text-xl flex items-center">
						<div className="">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Quisquam omnis, aliquid magnam obcaecati
							suscipit quibusdam porro sit facere ipsum non
							placeat commodi ratione aspernatur eveniet illum
							voluptate officia, veniam inventore?
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
