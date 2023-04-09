import { FoodItemUtils } from "../../food-item/model/FoodItemUtils.js";

import {FoodCategoryView} from "../../food-category/view/food-category-view.js";

class QuickNavPanelView{

  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  render(){

    this.foodCategories.forEach ((foodCategory) => {

      const foodCategoryView = new FoodCategoryView(foodCategory);

      const foodCategoryDivElement = 
      foodCategoryView.generateDivElement();

      const categoryListDivElement = 
      document.getElementById("category-list");

      categoryListDivElement.appendChild(foodCategoryDivElement);

    });
  }
}

export {QuickNavPanelView};