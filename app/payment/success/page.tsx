import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsBagCheckFill } from "react-icons/bs";

const page = () => {
	return (
		<div className='py-24 px-0 flex flex-col justify-center items-center text-center rounded-[15px] bg-[#f1f1f1] '>
			<p className=' text-green-800 '>
				<BsBagCheckFill size={"80px"} />
			</p>
			<h2 className=' text-[2.75rem] my-2 mx-0 '>Thank you for your order!</h2>
			<p className='email-msg'>Check your email inbox for the receipt.</p>
			<p className='mt-8'>
				If you have any questions, please email
				<a className='ml-[5px] text-red-700' href='mailto:order@example.com'>
					shopeonline@example.com
				</a>
			</p>
			<Link href='/'>
				<Button className=' w-[220px] md:w-[270px] lg:w-[400px] h-[52px] text-lg rounded-[10px] mt-8 '>
					Continue Shopping
				</Button>
			</Link>
		</div>
	);
};

export default page;
