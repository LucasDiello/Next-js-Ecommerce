import stripe from "@/lib/stripe";
import { Product } from "@/types";
import Stripe from "stripe";
import ProductCard from "./ProductCard";
import Banner from "../layout/Banner";
import "@/styles/cards.css";
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

export default async function ProductList() {
  const products = await getProducts();
  return (
    <main className=" bg-gray-200">
      <section className="grid container gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10">
        {products?.slice(2, 6)?.map((product: Product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </section>
      <div className="w-full lg:h-[90vh]  flex flex-col justify-center">
        <div className="row1-container">
          <div className="box box-down cyan space-y-5">
            <h2>Produtos Conferidos</h2>
            <p>
              Nossos produtos são conferidos e testados antes de serem enviados
              para você.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
              className="w-[40px] !m-0 lg:w-[70px]"
            />
          </div>

          <div className="box red space-y-5">
            <h2>Prontos para entrega</h2>
            <p>
              Nossos armazéns estão totalmente abastecidos e prontos para
              atender você.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
              className="w-[40px] !m-0 lg:w-[70px]"
            />
          </div>

          <div className="box box-down blue space-y-5">
            <h2>Produtos Calculados</h2>
            <p>
              Nossos produtos são calculados para garantir o melhor preço para
              fazer o seu dinheiro valer a pena.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
              className="w-[40px] !m-0 lg:w-[70px]"
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange space-y-5">
            <h2>Idealizados</h2>
            <p>
              Nossos produtos são idealizados para atender as suas necessidades
              e desejos.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
              className="w-[40px] !m-0 lg:w-[70px]"
            />
          </div>
        </div>
      </div>
      <section className="grid container gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16 pb-16">
        {products?.slice(6, 15)?.map((product: Product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </section>
    </main>
  );
}
