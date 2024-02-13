import stripe from "@/lib/stripe";
import { Product } from "@/types";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

async function getProducts() {
    try{
        const stripeProducts = await stripe.products.list({
            limit: 100,
            expand: ["data.default_price"],
        })
        return stripeProducts.data.map((product: Stripe.Product) : Product => {
            return {
                id: product.id,
                name: product.name,
                description: product.description || "",
                price: (product.default_price as Stripe.Price)?.unit_amount_decimal || 0,
                currency: (product.default_price as Stripe.Price).currency,
                images: product.images,
                image: product.images[0],
            }
            
        })
    }catch(error) {
        console.log(error)
    }
}

export default async function ProductList() {
    const products = await getProducts();
    return (
        <main className="lg:p-20">
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products?.map((product: Product) => {
                return <ProductCard key={product.id} {...product} />
            })}
        </section>
        </main>
    );
}