export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number | string;
    currency: string;
    image: string;
    images?: string[];
}

export interface DummyProduct {
    id: string;
    title: string;
    description?: string;
    price: number | string;
    discountPercentage: number;
    currency: string;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ProductCardProps {
    id: string;
    name: string;
    description?: string;
    price: number | string;
    currency: string;
    image: string;
    images?: string[];
  }