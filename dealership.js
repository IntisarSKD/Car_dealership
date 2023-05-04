const Dealership = function(name, maxCars, carsInStock) {
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
  }
  
  Dealership.prototype.countCarsInStock = function() {
    return this.carsInStock.length;
  }
  
  Dealership.prototype.addCarToStock = function(car) {
    if (this.countCarsInStock() < this.maxCars) {
      this.carsInStock.push(car);
      return true;
    }
    return false;
  }
  
  Dealership.prototype.getCarManufacturers = function() {
    const manufacturers = [];
    for (let car of this.carsInStock) {
        manufacturers.push(car.manufacturer);
    }
    return manufacturers;
  }
  
  Dealership.prototype.getAllCarsByManufacturer = function(manufacturer) {
    const cars = [];
    for (let car of this.carsInStock) {
      if (car.manufacturer === manufacturer) {
        cars.push(car);
      }
    }
    return cars;
  }
  
  Dealership.prototype.calculateTotalValue = function() {
    let totalValue = 0;
    for (let car of this.carsInStock) {
      totalValue += car.price;
    }
    return totalValue;
  }
  
  module.exports = Dealership;
  