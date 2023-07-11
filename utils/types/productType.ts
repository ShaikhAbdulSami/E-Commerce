import { StaticImageData } from "next/image";

export type Product = {
	id: number;
	img: StaticImageData;
	title: string;
	tag: string;
	price: number;
	detail: string;
	care: string[];
	category: string;
}[];
export type ProductsCard = {
	img: StaticImageData;
	title: string;
	type: string;
	price: number;
};
