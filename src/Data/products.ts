import type { Product } from "../Components/ProductCard/types";

let nextId: number = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////// PRODUCTS ////////////////////////////////////////////////////////////////////////////////////////////////////////
export const products: Product[] = [
  {
    id: nextId++,
    name: 'Zero',
    imagePath: '../../src/assets/shopItems/ZERO-1.webp', 
    price: 398,
  }, {
    id: nextId++,
    name: 'combo pack (wallet + backup)',
    imagePath: '../../src/assets/shopItems/COMBO-1.webp', 
    price: 498,
  }, {
    id: nextId++,
    name: 'combo pack (wallet + backup)',
    imagePath: '../../src/assets/shopItems/COMBO-1.webp', 
    price: 498,
  }
]