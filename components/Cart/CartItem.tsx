import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import P1 from "/public/P1.png";

const CartItem = () => {
	return (
		<>
			{/* Cart Items */}
			<div className=' flex gap-16 grow-[3] shrink basis-0 flex-col mt-8 '>
				{/* Item Card */}
				<div className=' flex gap-8 flex-col md:flex-row'>
					{/* Item Image */}
					<div className=' w-4/5 md:w-2/4  lg:w-1/4 lg:h-48  rounded-[9px] '>
						<Image src={P1} alt='' className=' w-full h-full rounded-[9px] ' />
					</div>
					{/* Item Detail */}
					<div className=' flex flex-col w-3/4 justify-between gap-2 '>
						{/* Name & Del */}
						<div className=' flex justify-between '>
							<h3 className=' font-light text-[1.3rem] text-[#212121] leading-6 '>
								Brushed Raglan Sweatshirt
							</h3>
							<Button variant={"ghost"}>
								<Trash2 color='black' />
							</Button>
						</div>
						{/* Item Tag */}
						<p className=' leading-4 text-[#666] font-semibold text-base '>
							Sweater
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
								$525
							</span>
							<div>
								<span className=' mr-3 border-2 border-[#f1f1f1] bg-[#f1f1f1] rounded-full px-[5px]  py-[3px] cursor-pointer '>
									<Minus className='inline-block' />
								</span>
								<span>1</span>
								<span className=' ml-3 border-2 border-[#f1f1f1] bg-[#f1f1f1] rounded-full px-[5px] py-[3px] cursor-pointer '>
									<Plus className='inline-block' />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Order Summary */}
			<div className=' p-8 gap-8 flex flex-col grow shrink basis-0 bg-[#fbfcff] '>
				<h3 className=' font-bold text-lg '>Order Summary</h3>
				{/* Qty */}
				<div className='flex justify-between gap-16'>
					<p>Quantity</p>
					<span>1</span>
				</div>
				{/* Subtotal */}
				<div className='flex justify-between gap-16'>
					<p>Sub Total</p>
					<span>$525</span>
				</div>
				{/* Checkout */}
				<div className='flex justify-between gap-16'>
					<Button className=' font-semibold leading-5 bg-[#212121] flex justify-center items-center gap-2 text-[#fff] h-[42px] w-[212px] '>
						Proceed to Checkout
					</Button>
				</div>
			</div>
		</>
	);
};

export default CartItem;
