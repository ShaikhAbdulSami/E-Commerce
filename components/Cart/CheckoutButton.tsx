"use client";

import React from "react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-hot-toast";

const CheckoutButton = () => {
	const cart = useAppSelector((state: RootState) => state.CartSlice.cart);
	const product = useAppSelector((state: RootState) => state.CartSlice.product);
	const total = useAppSelector((state: RootState) => state.CartSlice.totalCost);
	const qty = useAppSelector(
		(state: RootState) => state.CartSlice.totalQuantity
	);
	const publishableKey = process.env
		.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
	const stripePromise = loadStripe(publishableKey);
	const handleCheckout = async () => {
		const stripe = await stripePromise;
		try {
			const combinedArray = cart.map((cartItem) => {
				const matchingProduct = product.find(
					(productItem) => productItem._id === cartItem.product_id
				);
				return {
					product_id: cartItem.product_id,
					quantity: cartItem.quantity,
					price: cartItem.price,
					img: matchingProduct?.img,
					title: matchingProduct?.title,
				};
			});

			const checkoutSession = await fetch("/api/stripe", {
				method: "POST",
				body: JSON.stringify({
					item: combinedArray,
					qty: qty,
					total: total,
				}),
				headers: {
					"Content-Type": "application/json", // Specify the content type
				},
			});
			try {
				cart.map(async (itm) => {
					const res = await fetch(`/api/cart?product_id=${itm.product_id}`, {
						method: "DELETE",
					});
				});
			} catch (error) {
				console.log(error);
			}
			const sessionID = await checkoutSession.json();
			toast.loading("Redirecting...");
			const result = await stripe?.redirectToCheckout({
				sessionId: sessionID,
			});
			if (result?.error) {
				toast.error("Checkout Failed");
			}
		} catch (error) {
			toast.error("Checkout Failed");
		}
	};

	return (
		<>
			<Button
				className=' font-semibold leading-5 bg-[#212121] flex justify-center items-center gap-2 text-[#fff] h-[42px] w-[212px] '
				onClick={handleCheckout}>
				Proceed to Checkout
			</Button>
		</>
	);
};

export default CheckoutButton;
