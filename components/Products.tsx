"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { client } from "@/sanity/lib/client";
import { Product } from "@/utils/types/productType";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Productt from "./Product/Product";

const getProduct = async () => {
	const res = await client.fetch(`*[_type == 'Product']{
		title,img,price,tag,slug,
	}`);
	return res;
};
const Products = async () => {
	let products: Product = await getProduct();
	return (
		<div className='products-outer-container'>
			<div className='flex flex-col mb-8 gap-4 text-center'>
				<span className='font-bold text-center text-xs leading-[15px] tracking-widest text-[#0062f5] '>
					PRODUCTS
				</span>
				<h2 className='font-bold text-center text-[32px] leading-[40px] tracking-[0.03em] text-[#212121]'>
					Check What We Have
				</h2>
			</div>
			<Swiper
				breakpoints={{
					// width >= 300
					300: {
						slidesPerView: 1,
						spaceBetween: 100,
					},
					// width >= 1000
					1000: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					// width >= 1260
					1260: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
				}}
				modules={[Navigation, A11y]}
				spaceBetween={0}
				slidesPerView={3}
				navigation>
				<div className='products-container'>
					{products?.map((product, i) => (
						<SwiperSlide key={i}>
							<Productt key={product._id} product={product} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	);
};

export default Products;
