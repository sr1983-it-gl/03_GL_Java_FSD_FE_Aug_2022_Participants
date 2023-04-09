
import {MainPanelView} from "./main-panel/view/main-panel-view.js";
import {QuickNavPanelView} from "./quick-nav-panel/view/quick-nav-panel-view.js";

import { FoodCategoryFactory } from "../food-app/food-category/model/food-category-factory.js";

class FoodAppMain {

  init(){

    const foodCategories = FoodCategoryFactory.getCategories();

    const mainPanelView = new MainPanelView(foodCategories);
    mainPanelView.render();

    const quickNavPanelView = new QuickNavPanelView(foodCategories);
    quickNavPanelView.render();
  }

}

const foodAppMain = new FoodAppMain();
foodAppMain.init();
