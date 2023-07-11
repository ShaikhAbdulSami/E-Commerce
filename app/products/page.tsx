import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock/product";
import React from "react";

const page = () => {
	return (
		<div className='grid justify-between items-center gap-16grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 '>
			{Products.map((prod, i) => (
				<ProductCard
					title={prod.title}
					img={prod.img}
					price={prod.price}
					type={prod.tag}
					key={prod.id}
				/>
			))}
		</div>
	);
};

export default page;
