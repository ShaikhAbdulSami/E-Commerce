import React from "react";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

const CartPage = () => {
	return (
		<div>
			<h1 className=' font-bold text-2xl '>Shopping Cart</h1>
			{/* Cart Container */}
			<div className='flex justify-between gap-16 flex-col lg:flex-row'>
				{/* <EmptyCart /> */}
				<CartItem />
			</div>
		</div>
	);
};

export default CartPage;
