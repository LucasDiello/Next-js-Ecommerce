"use client"

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function CartButton() {
  const { cartCount, formattedTotalPrice } = useShoppingCart();

  return (
    <Link
      href={"/cart"}
      className="flex items-center justify-center gap-2 no-underline"
    >
        <ShoppingCart size={16} className="m-0" color="white" />
        {cartCount ? (
          <span className="text-sm text-white sans-fonte  tracking-wider">{formattedTotalPrice} ({cartCount})</span>
        ) : <span className=" text-white sans-fonte  tracking-wider">00,00</span>}
    </Link>
  );
}
