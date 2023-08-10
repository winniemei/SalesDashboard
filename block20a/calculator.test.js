// importing the calculatio module
const forSale = require("./calculator.js");

// console.log(calculation)
// Define my test group using a describe
describe("For sale tests", () => {
    // Define my test using a test function
    // test("adding 1 + 2 should equal 3", () => {
    //     // Call my function using expect
    //     expect(calculation.sum(1,2)).toBe(3);
    // })
    // test("subtracting 17-5 should return 12", () => {
    //     expect(calculation.difference(17,5)).toBe(12);
    // })
    // test("lucky number is 17", () => {
    //     expect(calculation.luckyNumber(5,12)).toBe(17);
    // })
    // test("number is not 8", () => {
    //     expect(calculation.GetmeNumber(7,12)).not.toBe(8);
    // })
    // test("testing for if the numbers are close to 9.52", () => {
    //     expect(calculation.total(5.51021, 4.01123)).toBeCloseTo(9.52);
    // })
    test("check if forSale contains the key nice.oven inside kitchen", () => {
        expect(forSale).toHaveProperty(['kitchen','nice.oven']);
    })
    test("check first item in amenities inside kitchen", () => {
        expect(forSale).toHaveProperty('kitchen.amenities[0]', 'oven');
    }) 
})


