import React from "react";
import Image from "next/image";
import logo from "../../../public/map.png";
import avi from "../../../public/Avi.webp";


const Navbar = () => {
	return (
		<nav className="flex items-center justify-between max-w-full">
			<div className="flex gap-2 items-center">
				<Image src={logo} alt="logo" className="w-7" />
				<h1 className="font-bold">WhatBytes</h1>
			</div>

			<ul className="md:flex gap-2 hidden">
				<li>Dashboard</li>
				<li className="underline text-blue-500 underline-offset-4 font-bold">
					Skills Test
				</li>
				<li>Internship</li>
			</ul>

			<div className="flex items-center gap-2 p-1 rounded-xl ">
				<h2 className="font-bold">@Kola.dev</h2>
				<Image
					src={avi}
					alt="logo"
					className="rounded-full h-9 w-9 shadow"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
