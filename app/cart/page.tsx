'use client'
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Loader, ShoppingBasket, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";

export default function Cart() {
  const { cartCount, cartDetails, formattedTotalPrice, removeItem } = useShoppingCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [open, setOpen] = useState(true);

  async function checkout() {
    setIsCheckout(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    });

    const { url } = await response.json();
    window.location.href = url;
    setIsCheckout(false);
  }

  return (
    <section className="flex flex-col">
      <Header />
    { open && <div className="animate-visible absolute z-20 bottom-0 w-full bg-sky-600 h-24 flex justify-center items-center gap-10">
        <p>
        This is a app for studing purposes. It s not a real store. The price is not real, so don't worry about buying anything. <br />
        Thanks for visiting! If you want to know more about me, visit my <a href="https://github.com/LucasDiello" className="ml-2 text-white">Github</a>
        </p>
        <button onClick={() => setOpen(false)}>
          <X />
        </button>
        </div>}
      <div className="flex flex-wrap lg:flex-nowrap justify-between container md:pt-10">
        <div className="bg-gray-50 rounded-2xl w-full">
          <h1 className="font-bold text-sky-600 text-3xl mt-10 lg:mt-0 p-2">Shopping Cart <span className="ml-2 text-[14px] text-black">{cartCount}<span className="text-[14px]"> items</span></span></h1>
          <h1 className="text-lg font-bold mb-2 p-2">Order Summary</h1>
          <div className="bg-gray-50 p-4">
            {cartDetails !== undefined && Object.keys(cartDetails).length !== 0 ?
              Object.keys(cartDetails).map((item, index) => (
                <div className="flex mb-4" key={index}>
                  <div className="mr-4 flex justify-center items-center">
                    <Image
                      src={cartDetails[item].image ?? ""}
                      alt=""
                      width={40}
                      height={80}
                      className="rounded-md object-cover "
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h1 className="text-lg font-bold mb-2">
                        {cartDetails[item].name} ({cartDetails[item].quantity})
                      </h1>
                      <X onClick={() => removeItem(cartDetails[item].id)} className="cursor-pointer" />
                    </div>
                    <p className="text-gray-500 text-sm">
                      {cartDetails[item].description?.slice(0, 150) + "..."}
                    </p>
                    <div className="flex items-center justify-between">
                      <h1 className="text-lg font-bold">
                        {cartDetails[item].formattedValue}
                      </h1>
                    </div>
                  </div>
                </div>
              ))
              : <div className="flex items-center justify-center flex-col h-[50vh] w-[100%]">
                <ShoppingBasket className="h-20 w-20 text-gray-500" />
                <h1 className="text-lg font-bold text-gray-500">Your cart is empty</h1>
              </div>
            }
            <hr className="my-4" />
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Order Summary</p>
              <h4 className="font-bold">{cartCount && formattedTotalPrice}</h4>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">{cartCount && formattedTotalPrice}</p>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Button
              className="bg-sky-600 w-52  hover:cursor-pointer"
              size={"lg"} 
              onClick={checkout}
              disabled={cartDetails === undefined || Object.keys(cartDetails).length === 0}
            >
              {isCheckout ? (
                <div className="flex items-center justify-between gap-2">
                  <Loader className="animate-spin 2s repeat-infinite" />{" "}
                  <span>Finalizing</span>
                </div>
              ) : (
                "Checkout"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
