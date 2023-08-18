"use client";

import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { urlForImage } from "@/sanity/lib/image";
import { ProductsCard } from "@/utils/types/productType";
import {
	clearCart,
	decrementQuantity,
	fetchProducts,
	getCart,
	incrementQuantity,
	removeFromCart,
} from "@/redux/slice/cartSlice";

const CartItem: FC<{ prod: ProductsCard; i: number }> = ({ prod, i }) => {
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state: RootState) => state.CartSlice.cart);
	const product = useAppSelector((state: RootState) => state.CartSlice.product);
	const total = useAppSelector((state: RootState) => state.CartSlice.totalCost);
	const qty = useAppSelector(
		(state: RootState) => state.CartSlice.totalQuantity
	);
	console.log(cart);
	const [quantity, setQuantity] = useState(
		cart.find((item) => item.product_id === prod._id)?.quantity as number
	);
	const updateQuantity = async (id: string, qty: number) => {
		const res = await fetch("/api/cart", {
			method: "PUT",
			body: JSON.stringify({
				product_id: id,
				quantity: qty,
			}),
		});
		const result = await res.json();
		console.log("PUT", result);
	};
	const deleteProduct = async (id: string) => {
		dispatch(removeFromCart(id));

		const res = await fetch(`/api/cart?product_id=${id}`, {
			method: "DELETE",
		});
		const result = await res.json();
		console.log("DELETE", result);
	};
	const handleIncrease = (id: string) => {
		setQuantity((prevQuantity: number) => {
			const updatedQuantity = prevQuantity + 1;
			dispatch(incrementQuantity(id));
			updateQuantity(id, updatedQuantity);
			return updatedQuantity;
		});
	};

	const handleDecrease = (id: string) => {
		setQuantity((prevQuantity: number) => {
			const updatedQuantity = prevQuantity - 1;
			dispatch(decrementQuantity(id));
			updateQuantity(id, updatedQuantity);
			return updatedQuantity;
		});
	};

	return (
		<>
			{/* // Cart Items */}
			{/* <div className=' flex gap-16 grow-[3] shrink basis-0 flex-col mt-8 '> */}
			{/* {product.map((prod) => ( */}
			{/*  Item Card */}
			<div className=' flex gap-8 flex-col md:flex-row' key={prod._id}>
				{/* Item Image */}
				<div className=' w-4/5 md:w-2/4  lg:w-1/4 lg:h-48  rounded-[9px] '>
					<Image
						src={urlForImage(prod.img).url()}
						alt=''
						className=' w-full h-full rounded-[9px] '
						width={150}
						height={190}
					/>
				</div>
				{/* Item Detail */}
				<div className=' flex flex-col w-3/4 justify-between gap-2 '>
					{/* Name & Del */}
					<div className=' flex justify-between '>
						<h3 className=' font-light text-[1.3rem] text-[#212121] leading-6 '>
							{prod.title}
						</h3>
						<Button variant={"ghost"} onClick={() => deleteProduct(prod._id)}>
							<Trash2 color='black' />
						</Button>
					</div>
					{/* Item Tag */}
					<p className=' leading-4 text-[#666] font-semibold text-base '>
						{prod.tag}
					</p>
					{/* Delivery Est. */}
					<p className=' leading-5 text-[#212121] font-semibold text-base '>
						Delivery Estimation
					</p>
					{/* Delivery Day */}
					<p className=' leading-5 text-[#ffc700] font-semibold text-base '>
						5 Working Days
					</p>
					{/* Price & Qty */}
					<div className=' flex justify-between '>
						<span className=' text-lg font-bold leading-5 tracking-widest text-[#212121] '>
							$
							{
								(prod.price *
									cart.find((item) => item.product_id === prod._id)
										?.quantity!) as number
							}
						</span>
						<div>
							<Button
								className=' mr-3 border-2 border-[#f1f1f1] bg-[#f1f1f1] rounded-full px-[5px]  py-[3px] cursor-pointer '
								onClick={() => handleDecrease(prod._id)}>
								<Minus className='inline-block' color='black' />
							</Button>
							<span>
								{cart.find((item) => item.product_id === prod._id)?.quantity}
							</span>
							<Button
								className=' ml-3 border-2 border-[#f1f1f1] bg-[#f1f1f1] rounded-full px-[5px] py-[3px] cursor-pointer '
								onClick={() => handleIncrease(prod._id)}>
								<Plus className='inline-block' color='black' />
							</Button>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
			{/* ))} */}
		</>
	);
};

export default CartItem;
