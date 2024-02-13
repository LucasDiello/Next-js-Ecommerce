"use client";

import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Loader, ShoppingBasket, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cart() {
  const { cartCount, cartDetails, formattedTotalPrice, removeItem, totalPrice } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [cep, setCep] = useState("");
  const [dataCep, setDataCep] = useState({} as any);
  const validTotalPrice = cartDetails && formattedTotalPrice
  const additionalService =  Number(totalPrice) * 0.1;

  async function checkout() {
    setIsCheckingOut(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    });

    const { url } = await response.json();
    window.location.href = url;
    setIsCheckingOut(false);
  }

  const handleCep = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    setDataCep(data);
  };

  console.log(cartDetails);
  

  return (
    <section className=" flex flex-col ">
      <div className="flex flex-wrap lg:flex-nowrap justify-between lg:p-40 md:p-20 p-2">
        <div className=" bg-gray-50 rounded-2xl w-full">
      <h1 className="font-bold text-sky-600 text-3xl mt-10 lg:mt-0 p-2">Shopping Cart <span className="ml-4 text-[20px] text-black">{cartCount}<span className="text-sm">items</span></span></h1>
          <h1 className="text-lg font-bold mb-2 p-2">Order Summary</h1>
          <div className=" bg-gray-50 p-4">
            {cartDetails !== undefined && Object.keys(cartDetails).length !== 0 ?
              Object.keys(cartDetails).map((item, index) => (
                <div className="flex mb-4" key={index}>
                  <div className=" mr-4">
                    <Image
                      src={cartDetails[item].image ?? ""}
                      alt=""
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                    <h1 className="text-lg font-bold mb-2 " >
                      {cartDetails[item].name} ({cartDetails[item].quantity})
                    </h1>
                    <X onClick={() => removeItem(cartDetails[item].id)} />
                    </div>
                    <p className="text-gray-500 mb-2">
                      {cartDetails[item].description}
                    </p>
                    <div className=" flex items-center justify-between">
                      <h1 className="text-lg font-bold">
                        {cartDetails[item].formattedValue}
                      </h1>
                    </div>
                  </div>
                </div>
              ))
              : <div className="flex items-center justify-center flex-col h-[50vh w-[100%]]">
                  <ShoppingBasket className="h-20 w-20 text-gray-500" />
                  <h1 className="text-lg font-bold text-gray-500">Your cart is empty</h1>
              </div>
              
            }
            <hr className="my-4" />
            <div className=" flex justify-between mb-2">
              <p className="text-gray-500">Order summary</p>
              <h4 className="font-bold">{validTotalPrice}</h4>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">{validTotalPrice}</p>
            </div>
          </div>
        </div>
      <div className="bg-gray-50 lg:h-[80vh] rounded-2xl">
          <div className=" bg-gray-50 rounded-2xl p-4">
          <h1 className="text-lg font-bold mb-2">Payment Information</h1>
            <div className=" mb-4">
              <div className="bg-gray-50 flex justify-between mb-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 rounded-md bg-inherit  border-b-[1px] border-gray-300"
                  />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 rounded-md bg-inherit  border-b-[1px] border-gray-300  p-2 ml-2"
                />
              </div>
              <div className="address">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-md bg-inherit  border-b-[1px] border-gray-300  p-2 mb-2"
                />
                <div className="flex">
                <input 
                  type="text"
                  placeholder="CEP"
                  onChange={(e) => setCep(e.target.value)}
                  max={8}
                  className="w-full rounded-md bg-inherit  border-b-[1px] border-gray-300  p-2 mb-2"
                />
                <Button className="bg-gray-300" variant={'default'} onClick={handleCep} >
                  search
                </Button>
                </div>
              </div>
            </div>
            <h1 className="text-lg font-bold mb-2">Shipping Details</h1>
            <div className=" bg-white shadow-md rounded-lg p-4 mb-4">
              <div className=" mb-2">
                {
                  dataCep && (
                    <><h1 className="text-lg font-bold mb-2">
                      {dataCep.cep}
                    </h1><p className="text-gray-500 mb-2">
                        {dataCep.logradouro} {dataCep.bairro}
                      </p><p className="text-gray-500 mb-2">
                        {dataCep.localidade} {dataCep.uf}
                      </p></>
                  )
                }
              </div>

            </div>
            <Button
          className="bg-sky-600 w-full mt-4"
          size={"lg"}
          onClick={checkout}
          disabled={isCheckingOut}
        >
          {isCheckingOut ? (
            <div className="flex items-center justify-between gap-2">
              <Loader className="animate-spin 2s repeat-infinite" />{" "}
              Finalizando...
            </div>
          ) : (
            "Finalizar"
          )}
        </Button>
          </div>
        </div>
        </div>
      <div
        className={cn(
          "flex items-center justify-end",
          cartCount === undefined || cartCount <= 0 ? "hidden" : ""
        )}
      >
      </div>
    </section>
  );
}
