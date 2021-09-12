class Car {
    model: string;
    price: number;
    private _millage: number; //good practice to start with _
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 10000;
    }
    getActualMileage(): number {
        const realOne = this._millage + 20000;
        return realOne;
    }
    getTotalPriccce(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price;
        return total;
    }
}

const toyota = new Car('toyota', 123000);
const totalPrice: number = toyota.getTotalPriccce(20);