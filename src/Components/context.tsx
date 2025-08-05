import React, { createContext, useRef, useState, type Dispatch, type SetStateAction } from "react";
import type { Product } from "./ProductCard/types";
import { products } from "../Data/products";

interface Cart extends Product {
  count: number;
}

interface ProductsContextType {
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  addToCart: (product: Product) => void;
  sidebar: React.RefObject<HTMLDivElement | null>;
  cartbar: React.RefObject<HTMLDivElement | null>;
}

export const ProductsContext = createContext<ProductsContextType | null>(null);

type ProductsContextProps = {
  children: React.ReactNode;
}

const ProductsContextProvider = ({children} : ProductsContextProps) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const sidebar = useRef<HTMLDivElement | null>(null);
  const cartbar = useRef<HTMLDivElement | null>(null);

  function addToCart(product: Product): void {

    const matchingItem: Cart | undefined = cart.find(cartItem => cartItem.id === product.id);

    if(matchingItem) {
      setCart(cart.map(cartItem => cartItem.id === product.id ? {...cartItem, count: cartItem.count + 1} : cartItem));
    } else {
      setCart(prev => [...prev, {...product, count: 1}]);
    }
    //setCart(prev => [...prev, {...cloth, count: 1}]);
    console.log(product);
  }


  const value = {
    cart,
    setCart,
    addToCart,
    sidebar,
    cartbar
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )

}

export default ProductsContextProvider


