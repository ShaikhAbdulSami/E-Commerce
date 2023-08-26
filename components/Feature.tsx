import React from "react";
import feature from "@/public/feature.webp";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
const Feature = () => {
	return (
		<section className='features-section'>
			{/* Title */}
			<div className='title'>
				<h1>Unique and Authentic Vintage Designer Jewellery</h1>
			</div>
			{/* Content */}
			<div className='content'>
				{/* left */}
				<div className='left'>
					{/* bg */}
					<div className='feature-background'>Different from others</div>
					<div>
						<h3>Using Good Quality Materials</h3>
						<p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
					</div>
					<div>
						<h3>100% Handmade Products</h3>
						<p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
					</div>
					<div>
						<h3>Modern Fashion Design</h3>
						<p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
					</div>
					<div>
						<h3>Discount for Bulk Orders</h3>
						<p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
					</div>
				</div>
				{/* right */}
				<div className='right'>
					<Image src={feature} alt='feature' className='w-[300px] h-[350px]' />

					<div>
						<p>
							This piece is ethically crafted in our small family-owned workshop
							in Peru with unmatched attention to detail and care. The Natural
							color is the actual natural color of the fiber, undyed and 100%
							traceable.
						</p>
						<Link href={"/products"}>
							<Button className='font-semibold leading-4 bg-gray-900 py-0 px-0 flex items-center justify-center h-[42px] text-white text-sm w-1/2'>
								See All Product
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
