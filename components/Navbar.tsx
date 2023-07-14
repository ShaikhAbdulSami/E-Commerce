"use client";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "/public/Logo.webp";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const menuLinks = [
		{ name: "Female", link: "/female" },
		{ name: "Male", link: "/male" },
		{ name: "Kids", link: "/kids" },
		{ name: "All Products", link: "/products" },
	];
	return (
		<>
			<nav className='justify-between items-center lg:px-24 lg:py-8 md:p-16 p-8 flex mx-auto container'>
				<Link href={"/"}>
					<Image src={logo} alt='logo' width={140} height={25} />
				</Link>
				<ul className='lg:flex gap-x-12 hidden '>
					{menuLinks?.map((link, i) => (
						<Link href={link.link} key={i}>
							<li className='list-none cursor-pointer'>{link.name}</li>
						</Link>
					))}
					{/* <li className='list-none cursor-pointer'>Female</li>
					<li className='list-none cursor-pointer'>Male</li>
					<li className='list-none cursor-pointer'>Kids</li>
					<li className='list-none cursor-pointer'>All Products</li> */}
				</ul>
				<Button className='lg:flex hidden w-12 h-22 bg-[#f1f1f1] rounded-full border-none relative transition delay-300 ease-in-out'>
					<ShoppingCart color='black' />
					<span className='absolute top-0 right-1 text-white bg-red-600 w-4 h-4 rounded-lg text-center font-semibold text-xs'>
						0
					</span>
				</Button>
				{/* Mobile Navbar */}

				<div className='flex lg:hidden'>
					{!open ? (
						<Menu
							color='black'
							onClick={() => setOpen(!open)}
							className={`lg:hidden block`}
						/>
					) : (
						<div className='flex left-0 top-0 fixed h-full w-full bg-slate-50 flex-col justify-center z-[3] items-center'>
							<Link href={"/"}>
								<Image
									src={logo}
									alt='logo'
									width={140}
									height={25}
									className='left-[50px] top-[50px] absolute'
								/>
							</Link>
							<X
								color='black'
								onClick={() => setOpen(false)}
								className=' top-[50px] right-[50px] absolute '
							/>
							<ul className={`flex gap-y-4 flex-col text-center items-center`}>
								<Button className='flex w-12 h-22 bg-[#f1f1f1] rounded-full border-none relative transition delay-300 ease-in-out'>
									<ShoppingCart color='black' />
									<span className='absolute top-0 right-1 text-white bg-red-600 w-4 h-4 rounded-lg text-center font-semibold text-xs'>
										0
									</span>
								</Button>
								{menuLinks?.map((link, i) => (
									<Link href={link.link} key={i}>
										<li
											className='list-none cursor-pointer'
											onClick={() => setOpen(!open)}>
											{link.name}
										</li>
									</Link>
								))}
							</ul>
						</div>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
