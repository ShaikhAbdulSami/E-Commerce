import { StaticImageData } from "next/image";
import { Image } from "sanity";

export type Product = {
	_id: any;
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
	_id: string;
	img: any;
	title: string;
	tag: string;
	price: number;
};

type Slug = {
	_type: string;
	current: string;
};
