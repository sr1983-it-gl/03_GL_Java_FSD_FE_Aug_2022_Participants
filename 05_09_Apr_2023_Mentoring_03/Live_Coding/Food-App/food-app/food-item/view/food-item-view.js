

class FoodItemView {

  constructor(foodItem){
    this.foodItem = foodItem;
  }

  generateFoodItemDivElement(){

    const itemCardDivElement = document.createElement("div");
    
    itemCardDivElement.setAttribute("id", "item-card");

    const cardTopDivElement = document.createElement("div");
    cardTopDivElement.setAttribute("id", "card-top");

    const ratingElement = document.createElement("i");
    ratingElement.setAttribute("class", "fa fa-star");
    ratingElement.setAttribute("id", "rating");
    ratingElement.innerText = 
      this.foodItem.rating;
    
    const addToCartElement = document.createElement("i");
    addToCartElement.setAttribute("class", "fa fa-heart-o add-to-cart");
    addToCartElement.setAttribute("id", this.foodItem.id);
  
    // 
    cardTopDivElement.appendChild(ratingElement);
    cardTopDivElement.appendChild(addToCartElement);

    const imageElement = document.createElement("img");
    imageElement.src = this.foodItem.imagePath;

    const nameParaElement = document.createElement("p");
    nameParaElement.setAttribute("id", "item-name");
    nameParaElement.innerText = this.foodItem.name;

    const priceParaElement = document.createElement("p");
    priceParaElement.setAttribute("id", "item-price");
    priceParaElement.innerText = `Price : $ ${this.foodItem.price}`;

    itemCardDivElement.appendChild(cardTopDivElement);
    itemCardDivElement.appendChild(imageElement);
    itemCardDivElement.appendChild(nameParaElement);
    itemCardDivElement.appendChild(priceParaElement);

    return itemCardDivElement;
  } 

}

export {FoodItemView};