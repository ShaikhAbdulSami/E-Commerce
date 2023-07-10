import { StaticImageData } from "next/image";

export type EventCard = {
	title: string;
	dis_price: number;
	price: number;
	img: StaticImageData;
	bg: string;
};
