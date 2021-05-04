'use strict';
// initialize the cars to test get all cars 
let cars = [
    { id: 1, make: 'BMW', model: 'i8', color: 'whit' },
    { id: 2, make: 'Opel', model: 'Vectra', color: 'black' },
    { id: 3, make: 'Ford', model: 'C-MAX', color: 'red' },
    { id: 4, make: 'Toyota', model: 'Camry', color: 'silver' },
];

class Car {
    constructor(make, model, color) {
        this.id = 4;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    create(object) {
        let record = {
            id: ++this.id,
            make: object.make,
            model: object.model,
            color: object.color
        }
        cars.push(record);
        return record;
    };

    read(id) {
        if (id) {
            return cars.find((car) => car.id === id);
        } else {
            return cars;
        }
    };

    update(id, object) {
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id == id) {
                cars[i] = object;
                return cars[i];
            }
        }
    };

    destroy(id) {
        let deleted = false;
        cars = cars.filter((car) => {
            if (car.id != id) {
                return true;
            } else {
                deleted = true;
                return false;
            }
        });
        return deleted;
    };
}

module.exports = Car;