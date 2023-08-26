import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest) {
	const item = await req.json();
	const transformedItem = item.item.map(
		(itm: { title: any; price: any; quantity: any }) => {
			return {
				price_data: {
					currency: "usd",
					product_data: {
						name: itm.title,
					},
					unit_amount: itm.price * 100,
				},
				quantity: itm.quantity,
			};
		}
	);
	const redirectURL =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://ecommerce-sooty-zeta.vercel.app";

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: transformedItem,
		mode: "payment",
		shipping_options: [
			{ shipping_rate: "shr_1NgVfLDB79l9vkPLN5Oty2Se" },
			{ shipping_rate: "shr_1NgVdzDB79l9vkPL7asfEriA" },
		],
		success_url: redirectURL + "/payment/success",
		cancel_url: redirectURL + "/cart",
	});
	return NextResponse.json(session?.id);
}
