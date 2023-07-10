import Image from "next/image";
import React from "react";
import event1 from "/public/event1.webp";
import event2 from "/public/event2.webp";
import event3 from "/public/event3.webp";
import { Button } from "./ui/button";
import EventCard from "./EventCard";
const Promotion = () => {
	return (
		<section className='lg:py-16 '>
			<div className='flex flex-col mb-8 gap-4 text-center'>
				<span className='font-bold text-center text-xs leading-[15px] tracking-widest text-[#0062f5] '>
					PROMOTIONS
				</span>
				<h2 className='font-bold text-center text-[32px] leading-[40px] tracking-[0.03em] text-[#212121]'>
					Our Promotions Events
				</h2>
			</div>
			{/* Event Banner */}
			<div className='flex justify-between gap-4 lg:gap-x-8 flex-col lg:flex-row'>
				{/* Left Side */}
				<div className='flex flex-col gap-y-4 grow-[2] flex-shrink'>
					{/* First Card */}
					<div className='flex justify-between items-center pt-8 px-8 leading-[0.05em] bg-[#d6d6d8] flex-col md:pt-8 lg:pt-0 lg:flex-row '>
						<div>
							<h3 className='font-bold leading-[35px] text-[1.75rem]'>
								GET UP TO&nbsp;
								<span className=' leading-[45px] text-4xl'>60%</span>
							</h3>
							<p className='font-normal leading-[23px] text-[1.125rem] tracking-[0.03em] '>
								For the summer season
							</p>
						</div>
						<Image
							src={event1}
							alt='Event 1'
							className='max-w-[200px] h-[180px] md:max-w-[300px] md:h-[250px] lg:max-w-[260px] lg:h-[200px] '
						/>
					</div>
					{/* Second Card */}
					<div className='flex flex-col justify-center items-center text-white bg-[#212121] lg:pt-12 lg:pb-8 lg:px-8 md:p-12 p-8'>
						<h3 className='font-extrabold leading-[45px] text-4xl tracking-[0.03em] mb-4'>
							GET 30% Off
						</h3>
						<p className='font-normal leading-[18px] text[0.875rem] tracking-[0.03em]'>
							USE PROMO CODE
						</p>
						<Button className='font-extrabold md:text-base lg:text-[18px] leading-[21px] tracking-[0.25em] text-[#fff] border-none bg-[#474747] mt-[5px] rounded-md py-2 lg:px-10 px-4'>
							DINEWEEKENDSALE
						</Button>
					</div>
				</div>
				{/* Right Side */}
				<div className='flex flex-1 justify-between items-center gap-4 flex-col md:flex-row'>
					{/* First Banner */}
					{/* <div className='flex flex-col justify-between items-center pt-6 bg-[#efe1c7] w-full'>
						<div className='w-full ml-10'>
							<p className='font-normal leading-[25px] text-[15px] tracking-[0.03em]'>
								Flex Sweatshirt
							</p>
							<div>
								<span className='relative line-through'>$100.00</span>
								<span className='font-semibold text-[18px] leading-[23px] ml-[10px] '>
									$75.00
								</span>
							</div>
						</div>
						<Image
							src={event2}
							alt='Event 2'
							className='max-w-[240px] h-[300px] lg:max-w-[280px] lg:h-[340px] pt-4 '
						/>
					</div> */}
					<EventCard
						title='Flex Sweatshirt'
						dis_price={100.0}
						price={75.0}
						img={event2}
						bg='#efe1c7'
					/>
					<EventCard
						title='Flex Push Button Bomber'
						dis_price={225.0}
						price={190.0}
						img={event3}
						bg='#d7d7d9'
					/>
					{/* Second Banner */}
					{/* <div className='flex flex-col justify-between items-center pt-6 bg-[#d7d7d9] w-full'>
						<div className='w-full ml-10'>
							<p className='font-normal leading-[25px] text-[15px] tracking-[0.03em]'>
								Flex Push Button Bomber
							</p>
							<div>
								<span className='relative line-through'>$225.00</span>
								<span className='font-semibold text-[18px] leading-[23px] ml-[10px] '>
									$190.00
								</span>
							</div>
						</div>
						<Image
							src={event3}
							alt='Event 3'
							className='max-w-[240px] h-[300px] lg:max-w-[280px] lg:h-[340px] pt-4 '
						/>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Promotion;
