
import {CartView} from "../view/cart-view.js";
import {CartModel} from "../model/cart-model.js"

class CartController{

  constructor(){

    this.cartModel = new CartModel();

    this.cartView = new CartView(this.cartModel);
  }

  init(){

    const cartControllerObj = this;

    // Add To Cart
    const allItems 
      = document.querySelectorAll(".add-to-cart");

      allItems.forEach( (item) => {

      this.addListenerForAddToCart(item)
    })

    // Cart View - Toggle

    const cartPlusElement = document.getElementById("cart-plus");
    cartPlusElement.addEventListener("click", (event) => {

      if (cartControllerObj.cartModel.hasItems()){
        this.cartView.displayCartToggleView();
      }else{
        alert("No items in the cart...")
      }
    })

  }

  addListenerForAddToCart(item){

    item.addEventListener("click", (event) => {

      const eventTarget = event.target;

      const foodItemId = eventTarget.getAttribute("id");

      if (this.cartModel.isItemPresent(foodItemId)){
        alert("Item already added to the cart");
      }else{
        this.cartView.enableToogleHeart(foodItemId);
      }


      this.cartModel.add(foodItemId);
      this.cartView.populateSumaryInformation();
      this.cartView.displayCartItems();

    });
  }

}

export {CartController};