
import {ProductsLister} from "./ProductsLister"
import {CartManager} from "./CartManager";
import {Container, Row, Col} from "react-bootstrap"
import { Header } from "./Header";
import {useState} from "react";

import { Cart, CartItem } from "../data/cart"
import {products, ProductModel} from "../data/products"

const Shopping = () => {

  const defaultCart = () => {

    const sampleCartItems : CartItem[] = [
      {
        product: products[0],
        quantity: 5
      },

      {
        product: products[2],
        quantity: 3
      },

      {
        product: products[1],
        quantity: 2
      }
    ]

    const cart : Cart = {
      cartItems : sampleCartItems
    }

    return cart;
  }

  const [cart, setCart] = useState(defaultCart());

  const addToCart = (incomingProduct : ProductModel ) => {

    console.log("Add To Cart called...");

    const matchingCartItem = cart.cartItems.find( (cartItem) => (
        cartItem.product.id === incomingProduct.id
      )
    )

    if (matchingCartItem){

      const updatedCartItems = cart.cartItems.map( (cartItem) => {

        if (cartItem.product.id === incomingProduct.id){

          // Update the quantity by 1
          const updatedCartItem : CartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity + 1
          }

          return updatedCartItem;
        }else{

          const sameCartItem : CartItem = {
              product: cartItem.product,
              quantity: cartItem.quantity
          }

          return sameCartItem;
          console.log('Wont be executed')
        }
      })

      const updatedCart : Cart = {
        cartItems : updatedCartItems
      }

      setCart(updatedCart);

    }else{

      const newCartItem : CartItem = {
        product: incomingProduct,
        quantity: 1
      }

      const updatedCartItems : CartItem[]  = [
        ...cart.cartItems, newCartItem
      ]

      const updatedCart : Cart = {
        cartItems : updatedCartItems
      }

      setCart(updatedCart)
    }

  }

  const removeFromCart = (incomingProduct : ProductModel) => {

    console.log('Remove from Cart ')

    const updatedCartItems : CartItem[] = [];

    cart.cartItems.forEach( (cartItem) => {

      if (cartItem.product.id === incomingProduct.id){

        if (cartItem.quantity === 1){
          // If Quantity is 1, dont add this 'cartItem' to the 'new array'
        }else{

          const updatedCartItem : CartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity - 1
          }

          updatedCartItems.push(updatedCartItem)
        }
      }else{

        updatedCartItems.push(cartItem);
      }
    })

    const updatedCart : Cart = {
      cartItems: updatedCartItems
    }

    setCart(updatedCart);

  }

  return (
    <div>
      <Container>

        <Row>
          <Col><Header></Header></Col>
        </Row>

        <Row>
          <Col lg={9}><ProductsLister addToCart={addToCart} removeFromCart={removeFromCart}></ProductsLister></Col>          
          <Col lg={3}><CartManager cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartManager></Col>
        </Row>        
      </Container>
      
    </div>
  )
}

export {Shopping}