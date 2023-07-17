import { Product } from "../types/productType";
import P1 from "/public/P1.png";
import P2 from "/public/P2.png";

export const Products: Product = [
	{
		id: 1,
		title: "Brushed Raglan Sweatshirt",
		slug: {
			_type: "Slug",
			current: "brushed-raglan-sweatshirt",
		},
		img: P1,
		price: 195.0,
		tag: "Sweater",
		category: "female",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		care: [
			"Hand wash using cold water.",
			"Do not using bleach.",
			"Hang it to dry.",
			"Iron on low temperature.",
		],
	},
	{
		id: 1,
		title: "Flex Push Button Bomber",
		slug: {
			_type: "slug",
			current: "flex-push-button-bomber",
		},
		img: P2,
		price: 225.0,
		tag: "Jackets",
		category: "male",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		care: [
			"Hand wash using cold water.",
			"Do not using bleach.",
			"Hang it to dry.",
			"Iron on low temperature.",
		],
	},
];
