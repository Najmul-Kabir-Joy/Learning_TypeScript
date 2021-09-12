function add(num1: number, num2: number): number {
    return num1 + num2;
}

const add2 = (num1: number, num2: number): number => num1 + num2;
//if i don't want to return something i must write void
const add3 = (num1: number, num2: number): void => {
    num1 + num2;
};