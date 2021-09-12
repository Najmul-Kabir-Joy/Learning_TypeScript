"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 10000;
    }
    getActualMileage() {
        const realOne = this._millage + 20000;
        return realOne;
    }
    getTotalPriccce(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price;
        return total;
    }
}
const toyota = new Car('toyota', 123000);
const totalPrice = toyota.getTotalPriccce(20);
