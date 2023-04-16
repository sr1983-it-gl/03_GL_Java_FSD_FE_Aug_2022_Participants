
import { FoodItemUtils } from "../../food-item/model/FoodItemUtils.js";
import {CartModel} from "../model/cart-model.js";

class CartView{

  constructor(cartModel){

    this.cartModel = cartModel;
  }

  enableToogleHeart(foodItemId){

    const itemElement 
      = document.getElementById(foodItemId);
    
    itemElement.classList.add("toggle-heart")
  }

  displayCartToggleView(){

    document.getElementById("food-items").
      classList.toggle("food-items");

    document.getElementById("category-list").
      classList.toggle("food-items");      

    document.getElementById("category-header").
    classList.toggle("toggle-category");

    document.getElementById("cart-page").
    classList.toggle("cart-toggle");

    document.getElementById("checkout").
    classList.toggle("cart-toggle");

    }

  populateSumaryInformation(){

    const totalItems =  this.cartModel.getTotalItems();
    console.log(`Total items ->` + totalItems);

    const totalItemsElement = document.getElementById("total-item");
    totalItemsElement.innerText 
      = `Total Items : ${totalItems}`;

      const totalPrice = this.cartModel.getTotalPrice();
      console.log(`Total price ` + totalPrice);
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText 
      = `Total Price : ${totalPrice}`;
  }

  displayCartItems(){

    const cartItemTable 
      = document.getElementById("table-body");    
    cartItemTable.innerHTML = '';

    const cartItems = this.cartModel.getItems();
    console.log("Cart Items");
    console.log(cartItems);

    for (const foodItemId of cartItems.keys()){

      const foodItemObj = FoodItemUtils.retriveFoodItem(foodItemId);

      const tableRow = document.createElement("tr");

      // Data

      // Image
      const imageElement = document.createElement("td");

      // <img src=
      const imageObj = document.createElement("img");
      imageObj.src = foodItemObj.imagePath;

      imageElement.appendChild(imageObj);

      // Food Item Name
      const foodNameElement = document.createElement("td");
      foodNameElement.innerText = 
        foodItemObj.name;
      

      // Quantity 1
      const quantityElement = document.createElement("td");

      const decrementButton = document.createElement("button");
      decrementButton.innerText = "-";

      const quantityValueElement = document.createElement("span");
      quantityValueElement.innerText = foodItemObj.quantity;

      const incrementButton = document.createElement("button");
      incrementButton.innerText = "+";

      quantityElement.appendChild(decrementButton);
      quantityElement.appendChild(quantityValueElement);
      quantityElement.appendChild(incrementButton);


      // Price
      const priceElement = document.createElement("td");
      priceElement.innerText = foodItemObj.price;

      tableRow.appendChild(imageElement);
      tableRow.appendChild(foodNameElement);
      tableRow.appendChild(quantityElement);
      tableRow.appendChild(priceElement);

      cartItemTable.appendChild(tableRow);

      console.log(tableRow);

    }

   console.log(cartItemTable); 
  }

}

export {CartView};