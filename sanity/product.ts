// schema.js

export const Products = {
	name: "Product",
	title: "Products",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "tag",
			title: "Tag",
			type: "string",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "detail",
			title: "Description",
			type: "text",
		},
		{
			name: "care",
			title: "Care",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "category",
			title: "Category",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 100,
			},
		},
		{
			name: "img",
			title: "Image",
			type: "image",
		},
	],
};
