"use client";

import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface SuccessProps {
  params: {
    sessionId: string;
  };
}

export default function Success({ params }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto my-20 p-6 space-y-6 flex flex-col items-center justify-center bg-white  rounded-lg">
      <CheckCircle className="w-28 h-28 text-blue-500" />
      <h1 className="text-4xl font-bold text-gray-800">Congratulations on Your Purchase!</h1>
      <p className="text-lg text-gray-600">Thank you for shopping with us. Your order has been placed successfully.</p>
      <Link href={"/products"} className="no-underline text-sm  px-6 py-2 !mt-10 text-white bg-blue-600 hover:bg-blue-700 border-none rounded-full  transition duration-300">
        Continue Shopping 
      </Link>
    </div>
  );
}
