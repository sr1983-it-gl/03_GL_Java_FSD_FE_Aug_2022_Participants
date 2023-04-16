
import {MainPanelView} from "./main-panel/view/main-panel-view.js";
import {QuickNavPanelView} from "./quick-nav-panel/view/quick-nav-panel-view.js";

import { FoodCategoryFactory } from "../food-app/food-category/model/food-category-factory.js";

import { CartController } from "./cart/controller/cart-controller.js";

class FoodAppMain {

  init(){

    const foodCategories = FoodCategoryFactory.getCategories();

    const mainPanelView = new MainPanelView(foodCategories);
    mainPanelView.render();

    const quickNavPanelView = new QuickNavPanelView(foodCategories);
    quickNavPanelView.render();

    const cartControllerObj = new CartController();
    cartControllerObj.init();
  }

}

const foodAppMain = new FoodAppMain();
foodAppMain.init();
