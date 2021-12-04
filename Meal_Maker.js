const menu = {
    _course: {appetizers: [], 
    mains: [], 
    desserts: []
    },
    get appetizers(){},
    set appetizers(appetizerIn){},
  
    get mains(){},
    set mains(mainsIn){},
  
    get desserts(){},
    set desserts(dessertsIn){},
  
    get courses() {
  
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
  
  
     addDishToCourse (courseName, dishName, dishPrice) {
       const dish = {name: dishName, price: dishPrice};
       this._course[courseName].push(dish); 
   
    },
  
    getRandomDishFromCourse (courseName) {
      const dishes = this._course[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
   
    },
  
    generateRandomMeal(){
         const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
   
      return `Your meal is ${appetizer.name}, ${mains.name}, and ${desserts.name} The price is $${totalPrice}.`;
    }
  
  
  };
  
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'coffee', 3.1);
  menu.addDishToCourse('appetizers', 'meat pie', 2.45);
  menu.addDishToCourse('mains', 'fufu', 4.0);
  menu.addDishToCourse('mains', 'ampesie', 4.9);
  menu.addDishToCourse('mains', 'tuo zaafi', 6.5);
  menu.addDishToCourse('desserts', 'ice cream', 1.2);
  menu.addDishToCourse('desserts', 'chips', 2.2);
  menu.addDishToCourse('desserts', 'juice', 3.1);
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal);