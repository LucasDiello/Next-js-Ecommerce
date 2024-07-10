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
  const [cep, setCep] = useState("");
  const [dataCep, setDataCep] = useState({} as any);
  const [isCheckout, setIsCheckout] = useState(false);

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

  const handleCep = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    setDataCep(data);
  };

  return (
    <section className="flex flex-col">
      <Header />
      <div className="flex flex-wrap lg:flex-nowrap justify-between container md:pt-10">
        <div className="bg-gray-50 rounded-2xl w-full">
          <h1 className="font-bold text-sky-600 text-3xl mt-10 lg:mt-0 p-2">Carrinho de Compras <span className="ml-4 text-[20px] text-black">{cartCount}<span className="text-sm"> itens</span></span></h1>
          <h1 className="text-lg font-bold mb-2 p-2">Resumo do Pedido</h1>
          <div className="bg-gray-50 p-4">
            {cartDetails !== undefined && Object.keys(cartDetails).length !== 0 ?
              Object.keys(cartDetails).map((item, index) => (
                <div className="flex mb-4" key={index}>
                  <div className="mr-4">
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
                      <h1 className="text-lg font-bold mb-2">
                        {cartDetails[item].name} ({cartDetails[item].quantity})
                      </h1>
                      <X onClick={() => removeItem(cartDetails[item].id)} />
                    </div>
                    <p className="text-gray-500 mb-2">
                      {cartDetails[item].description}
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
                <h1 className="text-lg font-bold text-gray-500">Seu carrinho está vazio</h1>
              </div>
            }
            <hr className="my-4" />
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Resumo do Pedido</p>
              <h4 className="font-bold">{cartCount && formattedTotalPrice}</h4>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">{cartCount && formattedTotalPrice}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:h-[80vh] rounded-2xl">
          <div className="bg-gray-50 rounded-2xl p-4 space-y-6">
            <h1 className="text-lg font-bold mb-2">Informações de Pagamento</h1>
            <div className="mb-4">
              <div className="bg-gray-50 flex justify-between mb-2">
                <input
                  type="text"
                  placeholder="Primeiro Nome"
                  className="w-1/2 rounded-md bg-inherit border-b-[1px] border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Sobrenome"
                  className="w-1/2 rounded-md bg-inherit border-b-[1px] border-gray-300 p-2 ml-2"
                />
              </div>
              <div className="endereco">
                <input
                  type="text"
                  placeholder="Endereço"
                  className="w-full rounded-md bg-inherit border-b-[1px] border-gray-300 p-2 mb-2"
                />
                <div className="flex ">
                  <input
                    type="text"
                    placeholder="CEP"
                    onChange={(e) => setCep(e.target.value)}
                    maxLength={8}
                    className="w-full rounded-md bg-inherit border-b-[1px] border-gray-300 p-2 mb-2"
                  />
                </div>
                  <Button className="bg-gray-300 h-10 border-none"  onClick={handleCep}
                  disabled={cep.length < 8}
                  >
                    Buscar
                  </Button>
              </div>
            </div>
            <h1 className="text-lg font-bold mb-2">Detalhes de Entrega</h1>
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="mb-2">
                {
                  dataCep && (
                    <>
                      <h1 className="text-lg font-bold mb-2">
                        {dataCep.cep}
                      </h1>
                      <p className="text-gray-500 mb-2">
                        {dataCep.logradouro} {dataCep.bairro}
                      </p>
                      <p className="text-gray-500 mb-2">
                        {dataCep.localidade} {dataCep.uf}
                      </p>
                    </>
                  )
                }
              </div>
            </div>
            <Button
              className={`bg-sky-600 w-full mt-4`}
              size={"lg"}
              onClick={checkout}
              disabled={!dataCep.cep ||  cartCount === undefined || cartCount <= 0}
            >
              {isCheckout ? (
                <div className="flex items-center justify-between gap-2">
                  <Loader className="animate-spin 2s repeat-infinite" />{" "}
                  <span>Finalizando</span>
                </div>
              ) : (
                "Finalizar"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
