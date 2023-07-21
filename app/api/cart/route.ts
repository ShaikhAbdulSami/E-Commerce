import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
export const GET = async (request: Request) => {
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

export const POST = async (request: Request) => {
	const req = await request.json();

	const uid = uuid();
	const setCookies = cookies();
	const user_id = cookies().get("user_id")?.value;
	if (!user_id) {
		setCookies.set("user_id", uid);
	}

	try {
		const res = await db
			.insert(cartTable)
			.values({
				product_id: req.product_id,
				quantity: 1,
				user_id: cookies().get("user_id")?.value as string,
			})
			.returning();
		return NextResponse.json({ res });
	} catch (error) {
		return NextResponse.json({ error });
	}
};
