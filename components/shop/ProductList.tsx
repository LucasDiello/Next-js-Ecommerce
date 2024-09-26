import stripe from "@/lib/stripe";
import { Product } from "@/types";
import Stripe from "stripe";
import ProductCard from "./ProductCard";
import "@/styles/cards.css";
import LimitedOfferSection from "../layout/LimitedOfferSection";
import Logistic from "../infos/Logistic";

export async function getProducts() {
  try {
    const stripeProducts = await stripe.products.list({
      limit: 100,
      expand: ["data.default_price"],
    });

    return stripeProducts.data.map((product: Stripe.Product): Product => {
      return {
        id: product.id,
        name: product.name,
        description: product.description || "",
        price:
          (product.default_price as Stripe.Price)?.unit_amount_decimal || 0,
        currency: (product.default_price as Stripe.Price).currency,
        images: product.images,
        image: product.images[0],
      };
    });
  } catch (error) {
    console.log(error);
  }
}

function ProductSection({ products, start, end }: { products: Product[], start: number, end: number }) {
  return (
    <section className="grid container gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16 pb-16">
      {products?.slice(start, end)?.map((product: Product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </section>
  );
}

export default async function ProductList() {
  const products = await getProducts() || [];
  return (
    <main className="">
      <h1 className="new-product text-center pt-10 pb-4 font-body font-bold tracking-wider text-4xl">
        New Products
      </h1>
      <ProductSection products={products} start={0} end={4} />
      <LimitedOfferSection />
      <h1 className="new-product text-center pt-10 pb-4 font-bold font-body tracking-wider text-4xl">
        More Sales!!
      </h1>
      <ProductSection products={products} start={35} end={39} />
      <Logistic />
      <ProductSection products={products} start={18} end={22} />
    </main>
  );
}
