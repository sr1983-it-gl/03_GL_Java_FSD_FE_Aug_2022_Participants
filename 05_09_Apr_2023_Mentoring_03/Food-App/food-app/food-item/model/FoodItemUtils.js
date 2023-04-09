
import { FoodItem } from "./food-item.js";
import {sampleFoodItems} from "./sample-food-items.js";

class FoodItemUtils{

  static getFoodItems(foodCategory){

    let foodItems = new Array();

    sampleFoodItems.forEach( (foodItemData) => {

      if (foodItemData.category === foodCategory.name){

        const foodItem = this.convert(foodItemData);
        foodItems.push(foodItem);
      }
    });

    return foodItems;  
  }

  static retriveFoodItem(foodItemId){

    // retrive the array of food-items
    // search 

    const foodItemDataResult 
      = sampleFoodItems.find ( (foodItemData) => {

      if (foodItemData.id === foodItemId){
        return foodItemData;        
      }
    });

    // console.log("Food Item Data Result " + JSON.stringify(foodItemDataResult));
        
    const foodItemObj = this.convert(foodItemDataResult);
    return foodItemObj;
  }

  static convert(foodItemData){

    const foodItemObj = new FoodItem(
      foodItemData.id,
      foodItemData.name,
      foodItemData.category,
      foodItemData.rating,
      foodItemData.price,
      foodItemData.img,
      foodItemData.quantity
      );
    return foodItemObj;
  }
}

export {FoodItemUtils};