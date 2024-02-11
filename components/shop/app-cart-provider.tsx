"use client"

import { CartProvider } from "use-shopping-cart";
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_API_KEY!;

interface AppCartProviderProps {
    children: React.ReactNode;
}

export function AppCartProvider({ children }: AppCartProviderProps) {
    return (
        <CartProvider
        shouldPersist={true}
        cartMode="checkout-session"
        stripe={stripeKey}
        currency="BRL"
        >
            {children}
        </CartProvider>
        )
}