import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import type { Product } from "./ProductCard/types";
import { products } from "../Data/products";

interface Cart extends Product {
  count: number;
}

interface ProductsContextType {
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  addToCart: (product: Product) => void;
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export const ProductsContext = createContext<ProductsContextType | null>(null);

type ProductsContextProps = {
  children: React.ReactNode;
}

const ProductsContextProvider = ({children} : ProductsContextProps) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [sidebar, setSidebar] = useState<boolean>(true);

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
    setSidebar
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )

}

export default ProductsContextProvider


