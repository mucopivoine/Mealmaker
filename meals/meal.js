const menu = {
    _meal : 20,
    _price :'diet',
    // console.log(menu);
     set Meal(mealToCheck) {
    if(typeof mealToCheck === 'string'){
    this._meal = mealToCheck;
    }else{
        console.log('please provide valid input');
    }
    },
     set Price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }else{
            console.log('please provide valid input');
        }
    }
    };
    menu.Meal='posho';
    menu.Price = 600;
    console.log(menu);
    
    function getTodaysSpecial(){
    if(typeof menu._meal === 'string' && typeof menu._price === 'number'){
        console.log("Today's Special is " + menu._meal + " for $" + menu._price +"!");
    }else{
        console.log("Meal or price was not set correctly!");
    }
    }
    menu.Meal = 'Spaghetti';
    menu.Price = 5;
    getTodaysSpecial();