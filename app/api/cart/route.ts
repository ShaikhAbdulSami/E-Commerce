import { Cart, cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
export const GET = async () => {
	const user_id = cookies().get("user_id")?.value as string;
	try {
		const res = await db
			.select()
			.from(cartTable)
			.where(eq(cartTable.user_id, user_id));
		return NextResponse.json({ res });
	} catch (error) {
		return NextResponse.json({ error });
	}
};
export const POST = async (request: NextRequest) => {
	const req = await request.json();

	const uid = uuid();
	const setCookies = cookies();
	const user_id = cookies().get("user_id")?.value as string;
	if (!user_id) {
		setCookies.set("user_id", uid);
	}

	try {
		const existingCartItem = await db
			.select()
			.from(cartTable)
			.where(
				and(
					eq(cartTable.user_id, user_id),
					eq(cartTable.product_id, req.product_id)
				)
			)
			.execute();

		if (existingCartItem.length > 0) {
			// If the product already exists in the cart, increase the quantity
			const q = existingCartItem.map((itm) => {
				return itm.quantity;
			});
			const res = await db
				.update(cartTable)
				.set({
					quantity: q[0] + req.quantity,
				})
				.where(
					and(
						eq(cartTable.user_id, user_id),
						eq(cartTable.product_id, req.product_id)
					)
				)
				.returning();

			return NextResponse.json({ res });
		} else {
			const res = await db
				.insert(cartTable)
				.values({
					product_id: req.product_id,
					quantity: req.quantity,
					price: req.price,
					user_id: cookies().get("user_id")?.value as string,
				})
				.returning();
			return NextResponse.json({ res });
		}
	} catch (error) {
		return NextResponse.json({ error });
	}
};

export const PUT = async (request: NextRequest) => {
	const req = await request.json();
	const user_id = cookies()?.get("user_id")?.value as string;

	try {
		const existingCartItem = await db
			.select()
			.from(cartTable)
			.where(
				and(
					eq(cartTable.user_id, user_id),
					eq(cartTable.product_id, req.product_id)
				)
			)
			.execute();

		if (existingCartItem.length > 0) {
			// If the product already exists in the cart, increase the quantity
			// const q = existingCartItem.map((itm) => {
			// 	return itm.quantity;
			// });
			const res = await db
				.update(cartTable)
				.set({
					quantity: req.quantity,
				})
				.where(
					and(
						eq(cartTable.user_id, user_id),
						eq(cartTable.product_id, req.product_id)
					)
				)
				.returning();

			return NextResponse.json({ res });
		}
	} catch (error) {
		return NextResponse.json({ error });
	}
};
export const DELETE = async (request: NextRequest) => {
	// const req = await request.json();
	const user_id = cookies()?.get("user_id")?.value as string;
	const id = request.nextUrl.searchParams.get("product_id") as string;
	console.log(user_id);
	try {
		const existingCartItem = await db
			.select()
			.from(cartTable)
			.where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, id)))
			.execute();

		if (existingCartItem.length > 0) {
			// If the product exists in the cart, delete the item
			const res = await db
				.delete(cartTable)
				.where(
					and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, id))
				)
				.returning();

			return NextResponse.json({
				success: true,
				message: "Item deleted successfully",
			});
		} else {
			return NextResponse.json({
				success: false,
				message: "Item not found in cart",
			});
		}
	} catch (error) {
		return NextResponse.json({ success: false, error });
	}
};
