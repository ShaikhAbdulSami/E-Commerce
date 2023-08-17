"use client";
import React, { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { CartAction, fetchCartProductsList } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { clearCart, fetchProducts, getCart } from "@/redux/slice/cartSlice";
import { ProductsCard } from "@/utils/types/productType";
import { Button } from "../ui/button";

const CartPage = () => {
	// const [data, setData] = useState<Cart[]>();
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state: RootState) => state.CartSlice.cart);
	const product = useAppSelector((state: RootState) => state.CartSlice.product);
	const total = useAppSelector((state: RootState) => state.CartSlice.totalCost);
	const qty = useAppSelector(
		(state: RootState) => state.CartSlice.totalQuantity
	);
	// const getProduct = async () => {
	// 	const res = await fetch("/api/cart", { method: "GET" });
	// 	const result = await res.json();
	// 	dispatch(getCartItem(result.res));
	// };
	// useEffect(() => {
	// 	// dispatch(clearCart());
	// 	dispatch(getCart());
	// }, []);

	useEffect(() => {
		if (cart.length > 0) {
			// Once the cart is updated, get the product IDs and fetch products
			const productIds = cart.map(
				(item: { product_id: any }) => item.product_id
			);
			// dispatch(clearCart());
			// dispatch(getCart());
			dispatch(fetchProducts(productIds));
		}
	}, [cart]);

	return (
		<div>
			<h1 className='font-bold text-2xl'>Shopping Cart</h1>
			{/* Cart Container */}
			<div className='flex justify-between gap-16 flex-col lg:flex-row'>
				{/* <EmptyCart /> */}
				{cart.length > 0 ? (
					<>
						<div className=' flex gap-16 grow-[3] shrink basis-0 flex-col mt-8 '>
							<>
								{product.map((itm: ProductsCard) => {
									return (
										<>
											<CartItem prod={itm} />
											{/* </div> */}
										</>
									);
								})}
							</>
						</div>
						{/* // Order Summary */}
						<div className=' p-8 gap-8 flex flex-col grow shrink basis-0 bg-[#fbfcff] '>
							<h3 className=' font-bold text-lg '>Order Summary</h3>
							{/* Qty */}
							<div className='flex justify-between gap-16'>
								<p>Quantity</p>
								<span>{qty}</span>
							</div>
							{/* Subtotal */}
							<div className='flex justify-between gap-16'>
								<p>Sub Total</p>
								<span>${total}</span>
							</div>
							{/* Checkout */}
							<div className='flex justify-between gap-16'>
								<Button className=' font-semibold leading-5 bg-[#212121] flex justify-center items-center gap-2 text-[#fff] h-[42px] w-[212px] '>
									Proceed to Checkout
								</Button>
							</div>
						</div>
					</>
				) : (
					<EmptyCart />
				)}
			</div>
		</div>
	);
};

export default CartPage;
