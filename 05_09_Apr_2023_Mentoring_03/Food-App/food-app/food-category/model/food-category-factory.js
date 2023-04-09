import { FoodItemUtils } from "../../food-item/model/FoodItemUtils.js";
import { FoodCategory } from "./food-category.js";

class FoodCategoryFactory{

  static getCategories(){

    let categories = new Array();

    categories.push(new FoodCategory(
      "biryani", 
      FoodItemUtils.retriveFoodItem(1).imagePath));

    categories.push(new FoodCategory(
      "chicken", FoodItemUtils.retriveFoodItem(10)
      .imagePath));

    categories.push(new FoodCategory(
        "paneer", FoodItemUtils.retriveFoodItem(16)
        .imagePath));

    categories.push(new FoodCategory(
      "vegetable", FoodItemUtils.retriveFoodItem(23)
      .imagePath));

    categories.push(new FoodCategory(
      "chinese", FoodItemUtils.retriveFoodItem(30)
      .imagePath));

    categories.push(new FoodCategory(
      "south-indian", FoodItemUtils.retriveFoodItem(37)
      .imagePath));
                  
    return categories;
  }
}

console.log("Printing Food Categories...")
const foodCategories = FoodCategoryFactory.getCategories();

foodCategories.forEach ( (foodCategoryObj) => {
  // console.log(foodCategoryObj);
  foodCategoryObj.display();
})

export {FoodCategoryFactory}