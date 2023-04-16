import { FoodItemUtils } from "../../food-item/model/FoodItemUtils.js";

class CartModel{

  constructor(){

    this.items = new Map();
  }

  hasItems(){

    console.log("No of items ->");
    console.log(this.items.size);

    return this.items.size > 0;
  }

  getItems(){
    return this.items;
  }

  isItemPresent(foodItemId){

    const itemPresent = this.items.has(foodItemId);
    if (itemPresent){
      return true;
    }else{
      return false;
    }
  }

  add(foodItemId){

    foodItemId = parseInt(foodItemId);

    const itemPresent = this.isItemPresent(foodItemId);
    if (itemPresent){

      const existingQuantity = this.items.get(foodItemId);
      existingQuantity ++;
      this.items.set(foodItemId, existingQuantity);
    }else{

      this.items.set(foodItemId, 1);
    }

  }

  getTotalItems(){

    return this.items.size;
  }

  getTotalPrice(){

    let totalPrice = 0;

    for (const foodItemId of this.items.keys()){

      const foodItemObj = FoodItemUtils.retriveFoodItem(foodItemId);

      const quantity = this.items.get(foodItemId);

      totalPrice = totalPrice + (
        quantity * foodItemObj.price
      );
    }
    return totalPrice;
  }
}

export {CartModel};