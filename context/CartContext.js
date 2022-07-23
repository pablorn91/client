import { createContext } from "react";

const CartContext = createContext({
  productCart: 0,
  addProductCart: () => null,
  getProductsCart: () => null,
  removeProductCart: () => null,
  removeAllProductCart: () => null,
});

export default CartContext;
