import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import featured1 from "/public/Featured1.webp";
import featured2 from "/public/Featured2.webp";
import featured3 from "/public/Featured3.webp";
import featured4 from "/public/Featured4.webp";
import hero from "/public/header.webp";
import Image from "next/image";

const Hero = () => {
	return (
		<div className='flex relative justify-between gap-16'>
			<section className='flex pt-12 pb-4 justify-between flex-1 flex-col'>
				<div className='flex flex-col justify-center gap-10 mb-12 lg:mb-0'>
					<Badge className='h-10 w-[120px] rounded-md flex items-center justify-center text-[blue] font-semibold bg-[#e1edff]'>
						Sale 70%
					</Badge>
					<h1 className='font-bold text-[3rem] leading-[55px] tracking-[0.03em] text-[#212121] '>
						An Industrial Take on Streetwear
					</h1>
					<p className='font-normal text-base leading-[24px] text-[#666] w-[70%]'>
						Anyone can beat you but no one can beat your outfit as long as you
						wear Dine outfits.
					</p>
					<Button className='flex font-semibold leading-[18px] bg-[#212121] items-center justify-center gap-2 text-white h-[70px] p-4 text-base lg:w-[35%] w-[80%]'>
						<ShoppingCart />
						Start Shopping
					</Button>
				</div>
				<div className='grid grid-cols-4 gap-4'>
					<Image src={featured1} alt='Featured1' />
					<Image src={featured2} alt='Featured2' />
					<Image src={featured3} alt='Featured3' />
					<Image src={featured4} alt='Featured4' />
				</div>
			</section>
			<section className='lg:flex flex-1 hidden'>
				<div className='w-[600px] h-[600px] rounded-full bg-[#ffece3]'>
					<Image src={hero} alt='Hero' className='top-[-5px] absolute' />
				</div>
			</section>
		</div>
	);
};

export default Hero;
