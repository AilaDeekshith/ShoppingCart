import { createContext } from "react";

export const CartContext = createContext({
  items:[],
  onAddToCart:()=>{},
  updateItemQuantity:()=>{}
});