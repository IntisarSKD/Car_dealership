const Dealership = require('./dealership');
const Car = require('./car');

describe('Dealership', () => {
  let dealership;
  let car1;
  let car2;

  beforeEach(() => {
    dealership = new Dealership('My Collection', 5, 0);
    car1 = new Car('Honda', 5000, 'Petrol');
    car2 = new Car('Toyota', 3000, 'Diesel');
  });

  test('can count cars in stock', () => {
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
    const expected = 2;
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
  });

  test('can add car to stock', () => {
    const expected = true;
    const actual = dealership.addCarToStock(car1);
    expect(actual).toBe(expected);
  });

  test('can get car manufacturers', () => {
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
    const expected = ['Honda', 'Toyota'];
    const actual = dealership.getCarManufacturers();
    expect(actual).toEqual(expected);
  });

  test('can get all cars by manufacturer', () => {
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
    const expected = [car1];
    const actual = dealership.getAllCarsByManufacturer('Honda');
    expect(actual).toEqual(expected);
  });
  
  test('can calculate total value of cars in stock', () => {
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
    const expected = 8000;
    const actual = dealership.calculateTotalValue();
    expect(actual).toBe(expected);
  });
  
});
