
class FoodCategory {

  constructor(name, imagePath){

    this.name = name;

    // console.log("Image Path is " + 
    //  JSON.stringify(imagePath));

    this.imagePath = imagePath;
  }

  display(){

    console.log(`Food Category - Name ${this.name}, Image Path ${this.imagePath}`);
  }

}

export {FoodCategory};