import { OthersProductsProps } from "@/types";
import OthersProductsCard from "./OthersProductsCard";

const OthersProducts = () => {

    const products : OthersProductsProps[] = [
      {
        imageUrl: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
        altText: "imac image",
        name: "iMac 27”",
        description: "This generation has some improvements, including a longer continuous battery life.",
        originalPrice: "$399,99",
        discountedPrice: "$299"
      },
      {
        imageUrl: "https://cdn.awsli.com.br/241/241991/arquivos/ps5-CO007-descricao%20(1).png",
        altText: "playstation image",
        name: "Playstation 5",
        description: "This generation has some improvements, including a longer continuous battery life.",
        originalPrice: "$799,99",
        discountedPrice: "$499"
      },
      {
        imageUrl: "https://a-static.mlcdn.com.br/450x450/apple-watch-series-8-41mm-gps-cellular-caixa-grafite-aco-inoxidavel-pulseira-estilo-milanes/magazineluiza/235932100/2b91815ac38696a734dddb9b23bd9e9b.jpg",
        altText: "apple watch image",
        name: "Apple Watch Series 8",
        description: "This generation has some improvements, including a longer continuous battery life.",
        originalPrice: "$1799,99",
        discountedPrice: "$1199"
      }
    ];
  
    return (
      <div className="hidden xl:mt-8 xl:block">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          People also bought
        </h3>
        <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
          {products.map((product, index) => (
            <OthersProductsCard
              key={index}
              imageUrl={product.imageUrl}
              altText={product.altText}
              name={product.name}
              description={product.description}
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default OthersProducts;