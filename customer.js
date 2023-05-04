const Customer = function(name, wallet, car){
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Customer.prototype.buyCar = function(car, price){
    if (this.wallet >= price){
        this.wallet -= price;
        this.car = car;
    } else {
        return false;
    }
}