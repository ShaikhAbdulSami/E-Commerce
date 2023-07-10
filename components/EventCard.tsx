import { EventCard } from "@/utils/types/eventType";
import Image from "next/image";
import React from "react";

const EventCard = ({ title, dis_price, price, img, bg }: EventCard) => {
	return (
		<div
			className={`flex flex-col justify-between items-center pt-6 bg-[${bg}] w-full`}>
			<div className='w-full ml-10'>
				<p className='font-normal leading-[25px] text-[15px] tracking-[0.03em]'>
					{title}
				</p>
				<div>
					<span className='relative line-through'>${dis_price}</span>
					<span className='font-semibold text-[18px] leading-[23px] ml-[10px] '>
						${price}
					</span>
				</div>
			</div>
			<Image
				src={img}
				alt='Event 2'
				className='max-w-[240px] h-[300px] lg:max-w-[280px] lg:h-[340px] pt-4 '
			/>
		</div>
	);
};

export default EventCard;
