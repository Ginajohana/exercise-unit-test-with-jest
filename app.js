const sum =(numero1,numero2) => {
    return numero1 + numero2
}
console.log(sum(23,21))

const oneEuroIs = {
    "JPY": 127.9, // Japanese yen
    "USD": 1.2, // US dollar
    "GBP": 0.8, // British pound
};

const valorEuro = 1
const valorDollar = 1.2
const valorYen = 127.9
const valorPound = 0.8

const fromEuroToDollar = () => {
    let dollarvalue = valorEuro * valorDollar
    return dollarvalue 
}
console.log(fromEuroToDollar(2));

const fromDollarToYen = () => {
    let Yenvalue = valorDollar * valorYen
    return Yenvalue 
}
console.log(fromDollarToYen());

const fromYenToPound = () => {
    let Poundvalue = valorYen * valorPound
    return Poundvalue 
}
console.log(fromYenToPound())




module.exports = { sum , fromDollarToYen , fromEuroToDollar , fromYenToPound };