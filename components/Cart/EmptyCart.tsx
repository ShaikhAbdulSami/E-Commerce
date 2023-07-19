import { ShoppingBag } from "lucide-react";
import React from "react";

const EmptyCart = () => {
	return (
		<>
			{/* Cart Items */}
			<div className=' flex gap-16 grow-[3] shrink basis-0 flex-col mt-8 '>
				{/* Empty Container */}
				<div className=' flex flex-col justify-center items-center '>
					<ShoppingBag width={150} height={150} />
					<h1 className=' font-bold text-3xl '>Your shopping bag is empty</h1>
				</div>
			</div>
		</>
	);
};

export default EmptyCart;
