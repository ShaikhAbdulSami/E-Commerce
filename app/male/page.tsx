import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock/product";
import Link from "next/link";
import React from "react";

const page = () => {
	let male = Products.filter((prod) => prod.category === "male");
	return (
		<div className='grid justify-between items-center gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 '>
			{male.map((prod, i) => (
				<Link href={`/product/${prod.slug}`} key={prod.id}>
					<ProductCard
						title={prod.title}
						img={prod.img}
						price={prod.price}
						type={prod.tag}
					/>
				</Link>
			))}
		</div>
	);
};

export default page;
