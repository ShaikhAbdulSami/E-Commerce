import { type SchemaTypeDefinition } from "sanity";
import { Products } from "./product";
import { Categories } from "./category";
export const schema: { types: SchemaTypeDefinition[] } = {
	types: [Products, Categories],
};
