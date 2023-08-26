import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product: { img, name, slug, price } }: any) => {
	console.log(img);

	return (
		<div>
			<Link href={`/product/${slug?.current}`}>
				<div className='product-card'>
					<Image
						src={urlForImage(img).url()}
						width={380}
						height={400}
						className='product-image'
						alt=''
					/>
					<p className='product-name'>{name}</p>
					<p className='product-price'>${price}</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
