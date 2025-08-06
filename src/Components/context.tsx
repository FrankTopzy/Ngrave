import React, { createContext, useRef, useState, type Dispatch, type SetStateAction } from "react";
import type { Product } from "./ProductCard/types";
import { products } from "../Data/products";

interface Cart extends Product { ////////// This is the cart type birthed from the Product type ////////////
  count: number;
}

interface ProductsContextType { ////////// This is the context type ////////////
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  sidebar: React.RefObject<HTMLDivElement | null>;
  cartbar: React.RefObject<HTMLDivElement | null>;
}

export const ProductsContext = createContext<ProductsContextType | null>(null);

type ProductsContextProps = { ////////// This is the props.children type ////////////
  children: React.ReactNode;
}

const ProductsContextProvider = ({children} : ProductsContextProps) => { ////////// Main Context
  const [cart, setCart] = useState<Cart[]>([]);
  const sidebar = useRef<HTMLDivElement | null>(null);
  const cartbar = useRef<HTMLDivElement | null>(null);

  // ADD TO CART FUNCTION //
  function addToCart(product: Product): void {

    const matchingItem: Cart | undefined = cart.find(cartItem => cartItem.id === product.id);

    if(matchingItem) {
      setCart(cart.map(cartItem => cartItem.id === product.id ? {...cartItem, count: cartItem.count + 1} : cartItem));
    } else {
      setCart(prev => [...prev, {...product, count: 1}]);
    }
    //setCart(prev => [...prev, {...cloth, count: 1}]);
  }

  // REMOVE FROM CART FUNCTION //
  function removeFromCart(productId: number): void {
    setCart(prev => prev.filter((cartItem) => cartItem.id !== productId));
  }


  const value = { // PROP VALUES //
    cart,
    setCart,
    addToCart,
    removeFromCart,
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


