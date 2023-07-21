"use client";
import { Product } from "@/utils/types/productType";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

const Detail: FC<{ result: Product }> = ({ result }) => {
	const Sizes = ["XS", "S", "M", "L", "XL"];

	const handleAddToCart = async (id: any) => {
		const res = await fetch("/api/cart", {
			method: "POST",
			body: JSON.stringify({
				product_id: id,
			}),
		});
		const result = await res.json();
		// console.log(result);
	};
	return (
		<>
			{result.map((prod) => (
				<div
					className=' flex flex-col grow shrink gap-10 mt-16 '
					key={prod._id}>
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
						<Button
							onClick={() => handleAddToCart(prod._id)}
							className=' text-sm w-2/5 font-sans font-semibold leading-4 bg-[#212121]  py-6 flex items-center justify-center gap-2 text-[#fff] cursor-pointer rounded-none'>
							<ShoppingCart /> Add to Cart
						</Button>
						<p className=' font-bold text-2xl tracking-widest text-[#212121] leading-8 '>
							${prod.price}.00
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Detail;
