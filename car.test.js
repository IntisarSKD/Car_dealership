const Car = require('./car');

describe('Car', () => {
   
    test('can get manufacturer', () =>{
        const car = new Car('Toyota', 3000, 'Diesel');
        const expected = 'Toyota';
        const actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });


    test('can get price', () => {
        const car = new Car('Toyota', 3000, 'Diesel');
        const expected = 3000;
        const actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can get engine type', () => {
        const car = new Car('Toyota', 3000, 'Diesel');
        const expected = 'Diesel';
        const actual = car.getEngineType();
        expect(actual).toBe(expected);
    });

});
