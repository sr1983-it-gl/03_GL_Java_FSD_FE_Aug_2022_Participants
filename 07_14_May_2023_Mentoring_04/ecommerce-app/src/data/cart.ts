
import {ProductModel} from "./products"

export type CartItem = {

  product: ProductModel
  quantity: number;
}


export type Cart = {
  cartItems : CartItem[]
}

// export {Cart}