// Import functions from app.js
const { 
    sum, 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
} = require('./app.js');


// SUM TEST
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


// EURO → DOLLAR
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected);
});


// DOLLAR → YEN
test("One Dollar should be 149.03 JPY", function() {

    const yen = fromDollarToYen(1);

    // 156.5 / 1.07 = 146.26 aprox
    const expected = 156.5 / 1.07;

    expect(yen).toBe(expected);
});


// YEN → POUND
test("One Yen should be 0.00556 GBP", function() {

    const pounds = fromYenToPound(1);

    const expected = 0.87 / 156.5;

    expect(pounds).toBe(expected);
});
