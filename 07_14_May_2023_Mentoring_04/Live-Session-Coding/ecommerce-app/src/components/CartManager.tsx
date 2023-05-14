import { Cart, CartItem } from "../data/cart"
import {Row, Col, Button} from "react-bootstrap";
import {products, ProductModel} from "../data/products"

type CartManagerType = {

  cart: Cart;
  addToCart : (product : ProductModel) => void;
  removeFromCart : (product : ProductModel) => void;
}

const CartManager = (cartManagerType : CartManagerType) => {

  const calculateItemsPrice = () => {

    let itemsPrice = 0;
    cartManagerType.cart.cartItems.forEach( (cartItem) => {

      itemsPrice = itemsPrice + 
      (cartItem.quantity * cartItem.product.price)
    }) 

    return itemsPrice;
  }

  const calculateTaxPrice = () => {

    return (calculateItemsPrice() * 10 ) / 100
  }

  const calculateShippingPrice = () => {

    return 100;
  }

  const calculateTotalPrice = () => {

    return calculateItemsPrice() + calculateTaxPrice() + calculateShippingPrice();
  }

  return (
    <div style={{backgroundColor: 'lightgreen'}}>
        <h2>Cart Items</h2>

        <hr/>

        {          
          cartManagerType.cart.cartItems.map( (cartItem) => {

              return (

                <Row key={cartItem.product.id}>

                  <Col>{cartItem.product.name}</Col>
                  
                  <Col lg={2}>
                    <Button onClick={
                      () => {
                        cartManagerType.addToCart(cartItem.product)
                      }
                    }>+</Button>
                  </Col>

                  <Col lg={2}>
                    <Button onClick={
                      () => {
                        cartManagerType.removeFromCart(cartItem.product)
                      }
                    }>-</Button>
                  </Col>
                  
                  <Col>
                    {cartItem.quantity} * {cartItem.product.price}
                  </Col>

                </Row>
              )
          })
        }

    <hr/>

      <Row>
        <Col>Items Price</Col>
        <Col>{calculateItemsPrice()}</Col>
      </Row>

      <Row>
        <Col>Tax Price</Col>
        <Col>{calculateTaxPrice()}</Col>
      </Row>

      <Row>
        <Col>Shipping Price</Col>
        <Col>{calculateShippingPrice()}</Col>
      </Row>

    <hr/>

    <Row>
        <Col>Total Price</Col>
        <Col>{calculateTotalPrice()}</Col>
      </Row>


    </div>

    
  )
}

export {CartManager}