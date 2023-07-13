import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/utils/types/productType";
import Link from "next/link";
import React from "react";

const getMProduct = async () => {
	const res = await client.fetch(`*[_type == 'Product' && category == 'Kids' ]{
		title,img,price,tag,slug,_id
	}`);
	return res;
};
const page = async () => {
	let kids: Product = await getMProduct();
	return (
		<div className='grid justify-between items-center gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 '>
			{kids.length > 0 ? (
				kids.map((prod, i) => (
					<Link href={`/product/${prod.slug.current}`} key={prod.slug.current}>
						<ProductCard
							title={prod.title}
							img={urlForImage(prod.img).url()}
							price={prod.price}
							type={prod.tag}
						/>
					</Link>
				))
			) : (
				<p>No Products Available</p>
			)}
		</div>
	);
};

export default page;
