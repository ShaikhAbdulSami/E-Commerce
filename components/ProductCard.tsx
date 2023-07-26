import { ProductsCard } from "@/utils/types/productType";
import Image from "next/image";
import React from "react";

const ProductCard = ({ title, img, price, tag }: ProductsCard) => {
	return (
		<>
			{/*  Container */}
			<div>
				{/* Product Card */}
				<div className='w-[250px]'>
					<Image src={img} alt='' width={250} height={270} />
					<p className='text-lg font-semibold mt-2 tracking-[0.03em] leading-6 text-[#212121] '>
						{title}
					</p>
					<p className='text-[15px] font-semibold mt-2 tracking-[0.03em] leading-4 text-[#888] '>
						{tag}
					</p>
					<p className='text-xl font-semibold mt-4 tracking-[0.03em] leading-6 text-[#212121] '>
						${price}
					</p>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
