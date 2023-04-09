

class FoodCategoryView{

  constructor(foodCategory){
    this.foodCategory = foodCategory;
  }

  generateDivElement(){

    const listCardDivElement = document.createElement("div");
  
    listCardDivElement.setAttribute("class", "list-card");

    const imageElement = document.createElement("img");
    imageElement.src = this.foodCategory.imagePath;

    const anchorElement = document.createElement("a");

    anchorElement.setAttribute("class", "list-name");

    const categoryName = this.foodCategory.name;
    anchorElement.setAttribute("href", `#${categoryName}`);
    anchorElement.innerText = categoryName;

    listCardDivElement.appendChild(imageElement);
    listCardDivElement.appendChild(anchorElement);

    return listCardDivElement;
  }

}

export {FoodCategoryView};