// Currency conversion values
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87   // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

// USD → JPY
const fromDollarToYen = function(valueInDollar) {
    const yen = valueInDollar * (oneEuroIs.JPY / oneEuroIs.USD);
    return yen;
}

// JPY → GBP
const fromYenToPound = function(valueInYen) {
    const pounds = valueInYen * (oneEuroIs.GBP / oneEuroIs.JPY);
    return pounds;
}

// Sum function (already correct)
const sum = (a,b) => {
    return a + b;
}

// Export everything needed for tests
module.exports = { 
    sum, 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};
