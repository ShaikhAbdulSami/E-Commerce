import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mock/product";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const getProduct = (slug: string) => {
	return Products.filter((product) => product.slug === slug);
};

const page = ({ params }: { params: { slug: string } }) => {
	const Sizes = ["XS", "S", "M", "L", "XL"];
	const result = getProduct(params.slug);
	return (
		<>
			{result.map((prod) => (
				<div className='bg-[#fcfcfc]' key={prod.id}>
					{/* Detail Container */}
					<div className=' flex justify-between flex-col lg:flex-row'>
						{/* Images */}
						<div className=' flex grow-[2] shrink gap-8 '>
							{/* small */}
							<div className=' flex flex-col gap-4 '>
								<Image
									src={prod.img}
									alt=''
									className=' w-[100px] h-[100px] cursor-pointer '
								/>
							</div>
							{/* Large */}
							<div className=' w-3/4 h-full  '>
								<Image src={prod.img} alt='' className=' w-full h-full ' />
							</div>
						</div>
						{/* Detail */}
						<div className=' flex flex-col grow shrink gap-10 mt-16 '>
							{/* Name and Category */}
							<div>
								<h3 className=' font-normal text-[1.625rem] tracking-wider leading-[33px] text-[#212121] '>
									{prod.title}
								</h3>
								<span className=' font-semibold text-[1.3rem] opacity-30 '>
									{prod.tag}
								</span>
							</div>
							{/* Sizes */}
							<div>
								<p className=' text-[#212121] font-bold text-[0.9rem] leading-4 tracking-wider '>
									SELECT SIZE
								</p>
								<ul className='flex gap-4 mt-4 '>
									{Sizes.map((itm, i) => (
										<li
											className='w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider '
											key={i}>
											{itm}
										</li>
									))}
									{/* <li className="w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider "></li> */}
								</ul>
							</div>
							{/* Quantity */}
							<div className=' flex gap-8  '>
								<h4 className='font-bold'>Quantity: </h4>
								<div className='w-full'>
									<span className=' mr-3 border-2 border-[#f1f1f1] bg-[#f1f1f1] rounded-full px-2 pb-3 pt-[5px] cursor-pointer '>
										<Minus className='inline-block' />
									</span>
									<span>1</span>
									<span className=' ml-3 border-2 border-[#f1f1f1] bg-[#f1f1f1] rounded-full px-2 pb-3 pt-[5px] cursor-pointer '>
										<Plus className='inline-block' />
									</span>
								</div>
							</div>
							{/* Add to Cart */}
							<div className=' flex items-center gap-4  '>
								<Button className=' text-sm w-2/5 font-sans font-semibold leading-4 bg-[#212121]  py-6 flex items-center justify-center gap-2 text-[#fff] cursor-pointer rounded-none'>
									<ShoppingCart /> Add to Cart
								</Button>
								<p className=' font-bold text-2xl tracking-widest text-[#212121] leading-8 '>
									${prod.price}.00
								</p>
							</div>
						</div>
					</div>
					{/* Desc Container */}
					<div className=' bg-[#fff] flex flex-col mt-16 pt-8 pb-24 px-16 gap-8 '>
						{/* Title */}
						<div className='flex z-[2] border-b-2 border-[#c4c4c4] relative w-full h-[150px] '>
							{/* BG */}
							<div className=' flex z-[2] font-extrabold lg:text-[7.5rem] md:text-8xl text-5xl leading-[151px] md:leading-[151px] text-[#f2f2f2] opacity-70 w-full h-full '>
								Overview
							</div>
							<h2 className='  z-[2] font-bold text-2xl leading-[25px] tracking-wider text-[#212121] absolute top-[45%] pb-12 '>
								Product Information
							</h2>
						</div>
						{/* Detail */}
						<div className='flex z-[2] flex-col lg:flex-row gap-8 lg:gap-0 '>
							<h4 className='grow shrink-1 basis-0 font-bold text-base leading-[19px] tracking-wider text-[#666] '>
								PRODUCT DETAILS
							</h4>
							<p className='grow-[2] basis-0 shrink font-light text-base leading-[26px] text-justify tracking-wider text-[#212121]   '>
								{prod.detail}
							</p>
						</div>
						{/* Care */}
						<div className='flex z-[2] flex-col lg:flex-row gap-8 lg:gap-0'>
							<h4 className='grow shrink basis-0 font-bold text-base leading-[19px] tracking-wider text-[#666]  '>
								PRODUCT CARE
							</h4>
							<ul className='grow-[2] shrink basis-0 list-inside list-disc '>
								{prod.care.map((itm, i) => (
									<li key={i} className=' font-semibold '>
										{itm}
									</li>
								))}
								{/* <li className=' font-semibold '>Hand Wash using cold water</li>
                            <li className=' font-semibold '>Hand Wash using cold water</li> */}
							</ul>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
export default page;
