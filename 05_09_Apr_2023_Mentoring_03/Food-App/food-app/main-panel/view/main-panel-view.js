import { FoodItemUtils } from "../../food-item/model/FoodItemUtils.js";

import {FoodItemView} from "../../food-item/view/food-item-view.js";

class MainPanelView{

  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  render(){

    this.foodCategories.forEach ((foodCategory) => {

      const foodItems = FoodItemUtils.getFoodItems(foodCategory);

      foodItems.forEach( (foodItem) => {

        const foodItemView = new FoodItemView(foodItem);
        const foodItemDivElement = foodItemView.generateFoodItemDivElement();

        console.log("Food Category Name");
        console.log(foodCategory.name);

        const foodCategoryDivElement = document.getElementById(foodCategory.name);
        foodCategoryDivElement.appendChild(foodItemDivElement);
      })

    })
  }

}

export {MainPanelView};