import stripe from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Product } from "use-shopping-cart/core";
import { validateCartItems } from "use-shopping-cart/utilities";

export async function POST(req: NextRequest) {
    const cartDetails = await req.json();
    const baseUrl = req.headers.get("origin");

    const stripeInventory = await stripe.products.list({
        limit: 100,
        expand: ["data.default_price"]
    });

    const products = stripeInventory.data.map((product: Stripe.Product): Product => {
        const price = Number((product.default_price as Stripe.Price)?.unit_amount_decimal);
        return {
            id: product.id.toString(),
            name: product.name,
            price: Math.round(price), 
            currency: (product.default_price as Stripe.Price)?.currency ?? "USD",
            image: product.images[0],
        };
    });

    const line_items = validateCartItems(products, cartDetails);

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: line_items,
        success_url: `${baseUrl}/success/{CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/cart`,
    });

    return NextResponse.json(session, { status: 200 });
}
