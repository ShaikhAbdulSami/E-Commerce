import { StaticImageData } from "next/image";
import { Image } from "sanity";

export type Product = {
	id: number;
	img: any;
	title: string;
	tag: string;
	price: number;
	detail: string;
	care: string[];
	category: string;
	slug: Slug;
}[];
export type ProductsCard = {
	img: any;
	title: string;
	type: string;
	price: number;
};

type Slug = {
	_type: string;
	current: string;
};
