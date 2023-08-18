import { Cart } from "@/lib/drizzle";
import { client } from "@/sanity/lib/client";
import { ProductsCard } from "@/utils/types/productType";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CartItem {
	product_id: string;
	user_id: string;
	price: number;
	quantity: number;
	// Add other properties for each cart item
}

interface CartState {
	cart: CartItem[];
	totalQuantity: number;
	totalCost: number;
	product: ProductsCard[];
}

const initialState: CartState = {
	cart: [],
	totalQuantity: 0,
	totalCost: 0,
	product: [],
};

export const fetchProducts = createAsyncThunk(
	"cart/fetchProducts",
	async (productIds: string[]) => {
		// console.log(productIds);

		const products: ProductsCard[] = await client.fetch(
			`*[_type == 'Product' && _id in ${JSON.stringify(productIds)}]{
        img,title,price,tag,_id
      }`
		);
		// console.log(products);

		return products;
	}
);
export const getCart = createAsyncThunk("cart/getCart", async () => {
	const res = await fetch("/api/cart", { method: "GET", cache: "no-cache" });
	const result = await res.json();
	return result?.res;
});
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Cart[]>) => {
			const products = action.payload;

			products.forEach((product) => {
				const itemIndex = state.cart.findIndex(
					(item) => item.product_id === product.product_id
				);
				if (itemIndex !== -1) {
					// If the product already exists in the cart, update the quantity
					state.cart[itemIndex].quantity++;
				} else {
					// If the product doesn't exist in the cart, add it to the cart
					state.cart.push(product);
				}
			});

			state.totalQuantity = state.cart.reduce(
				(accumulator: number, item: CartItem) => accumulator + item.quantity,
				0
			);
			state.totalCost = state.cart.reduce(
				(accumulator: number, item: CartItem) =>
					accumulator +
					item.quantity * getProductPrice(state.product, item.product_id),
				0
			);
			// state.totalCost = state.cart.reduce(
			// 	(accumulator: number, item: CartItem) =>
			// 		accumulator + item.quantity * item.price,
			// 	0
			// );

			// Fetch products from Sanity based on product IDs stored in the cart
			// const productIds = state.cart.map((item) => item.product_id);
			// console.log(productIds);

			// fetchProducts(productIds);
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			const productId = action.payload;
			// const itemInCartIndex = state.cart.findIndex(
			// 	(item) => item.product_id === productId
			// );
			// if (itemInCartIndex !== -1) {
			// 	state.cart = state.cart.splice(itemInCartIndex, 1);
			// }
			const cartItems = state.cart.filter(
				(item) => item.product_id !== productId
			);
			state.cart = cartItems;

			state.totalQuantity = state.cart.reduce(
				(accumulator: number, item: CartItem) => accumulator + item.quantity,
				0
			);

			state.totalCost = state.cart.reduce(
				(accumulator: number, item: CartItem) =>
					accumulator +
					item.quantity * getProductPrice(state.product, item.product_id),
				0
			);
		},
		incrementQuantity: (state, action: PayloadAction<string>) => {
			const productId = action.payload;
			const itemInCart = state.cart.find(
				(item) => item.product_id === productId
			);
			if (itemInCart) {
				itemInCart.quantity++;
			}

			state.totalQuantity = state.cart.reduce(
				(accumulator: number, item: CartItem) => accumulator + item.quantity,
				0
			);

			state.totalCost = state.cart.reduce(
				(accumulator: number, item: CartItem) =>
					accumulator +
					item.quantity * getProductPrice(state.product, item.product_id),
				0
			);
		},
		decrementQuantity: (state, action: PayloadAction<string>) => {
			const productId = action.payload;
			const itemInCart = state.cart.find(
				(item) => item.product_id === productId
			);
			if (itemInCart && itemInCart.quantity > 1) {
				itemInCart.quantity--;
			}

			state.totalQuantity = state.cart.reduce(
				(accumulator: number, item: CartItem) => accumulator + item.quantity,
				0
			);

			state.totalCost = state.cart.reduce(
				(accumulator: number, item: CartItem) =>
					accumulator +
					item.quantity * getProductPrice(state.product, item.product_id),
				0
			);
		},
		clearCart: (state) => {
			state.cart = [];
			state.product = [];
			state.totalCost = 0;
			state.totalQuantity = 0;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.product = action.payload;

			state.totalQuantity = state.cart.reduce(
				(accumulator: number, item: CartItem) => accumulator + item.quantity,
				0
			);
			// Calculate total cost when products are fetched and updated
			state.totalCost = state.cart.reduce(
				(accumulator: number, item: CartItem) =>
					accumulator +
					item.quantity * getProductPrice(state.product, item.product_id),
				0
			);
		});
		builder.addCase(getCart.fulfilled, (state, action) => {
			const products = action.payload;
			products.forEach((product: CartItem) => {
				state.cart.push(product);
			});

			state.totalQuantity = state.cart.reduce(
				(accumulator: number, item: CartItem) => accumulator + item.quantity,
				0
			);
			// Calculate total cost when products are fetched and updated
			state.totalCost = state.cart.reduce(
				(accumulator: number, item: CartItem) =>
					accumulator +
					item.quantity * getProductPrice(state.product, item.product_id),
				0
			);
		});
	},
});
const getProductPrice = (products: ProductsCard[], productId: string) => {
	const product = products.find((item) => item._id === productId);
	return product ? product.price : 0;
};
export const {
	// getCartItem,
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
	clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
