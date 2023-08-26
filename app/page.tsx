import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Promotion from "@/components/Promotion";
import "../app/globals.css";

export default function Home() {
	return (
		<div>
			<Hero />
			<Promotion />
			<Products />
			<Feature />
		</div>
	);
}
