import Link from "next/link";

export default function Navbar({ scrollPosition }) {
	const classNames = (...clasess) => {
		return clasess.filter(Boolean).join(" ");
	};

	return (
		<div
			className={classNames(
				scrollPosition > 0 ? "" : "",
				"navbar w-11/12 fixed left-1/2 top-2 -translate-x-2/4 z-50 transition duration-700 text-white text-xl font-semibold rounded-[2rem] bg-black bg-opacity-50 filter backdrop-blur-xl"
			)}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>About</a>
						</li>
						<li>
							<a className="justify-between">Trainings</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
					</ul>
				</div>
				<ul>
					<li>
						<Link
							href="#home"
							className="btn btn-ghost normal-case text-xl"
						>
							SenseiKlimek
						</Link>
					</li>
				</ul>
			</div>

			<div className="navbar-end">
				<div className="hidden lg:flex">
					<ul className="menu menu-horizontal px-1 font-semibold text-xl gap-4">
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Trainings</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
						<li>
							<Link href="#about">Blog</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
