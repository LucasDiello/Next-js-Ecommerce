"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
} from "../ui/card";
import { useToast } from "../ui/use-toast";
import { ProductCardProps } from "@/types";


export default function ProductCard({
  id,
  name,
  description,
  price,
  currency,
  image,
  images,
}: ProductCardProps) {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
  
  const formattedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: "pt-BR",
  });

  async function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const product = {
      id,
      name,
      description,
      price: Number(price),
      currency,
      image,
    };
    toast({
      title: "Produto adicionado ao carrinho :)",
      description: `${name} foi adicionado ao carrinho.`,
    })
    addItem(product);
  }
  return (
    <Card className="rounded-2xl bg-gray-50">
      <CardHeader>
        <CardDescription className="relative w-full h-60 ">
          <Image
            src={image}
            fill
            alt={name}
            className="object-contain"
          />
        </CardDescription>
        <CardTitle className="flex items-center tracking-wide ">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <p className="min-h-[6rem] ">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <p>Preço</p>
          <p>{formattedPrice}</p>
        </div>
        <Button size={"lg"} className="bg-gray-500" onClick={addToCart}>
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
