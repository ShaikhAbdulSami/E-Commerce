import Detail from "@/components/Product/Detail";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Products } from "@/utils/mock/product";
import { Product } from "@/utils/types/productType";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const getAllProduct = async (slug: string) => {
	const res =
		await client.fetch(`*[_type == 'Product' && slug.current == "${slug}"]{
		img,title,price,tag,care,detail,_id
	}`);
	return res;
};

const page = async ({ params }: { params: { slug: string } }) => {
	// const Sizes = ["XS", "S", "M", "L", "XL"];
	const result: Product = await getAllProduct(params.slug);
	// console.log(result);

	return (
		<>
			{result.map((prod) => (
				<div className='bg-[#fcfcfc]' key={prod._id}>
					{/* Detail Container */}
					<div className=' flex justify-between flex-col lg:flex-row'>
						{/* Images */}
						<div className=' flex grow-[2] shrink gap-8 '>
							{/* small */}
							<div className=' flex flex-col gap-4 '>
								<Image
									src={urlForImage(prod.img).url()}
									alt=''
									className=' w-[100px] h-[100px] cursor-pointer '
									width={100}
									height={100}
								/>
							</div>
							{/* Large */}
							<div className=' w-3/4 h-full  '>
								<Image
									src={urlForImage(prod.img).url()}
									alt=''
									className=' w-full h-full '
									width={572}
									height={613}
								/>
							</div>
						</div>
						{/* Detail */}
						<Detail result={result} />
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
