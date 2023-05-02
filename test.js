const { sum , fromDollarToYen , fromYenToPound , fromEuroToDollar } = require("./app.js");

test ("suma de 23 + 21", ()=> {
    let result = sum(23,21)
    expect(result).toBe(44)

})
test ("conversion de Euro a Dollar", ()=>{
    let result = fromEuroToDollar(1)
    expect (result).toBe(1.2)
})
test ("conversion de Dolar a Yen", ()=>{
    let result = fromDollarToYen(1.2*127.9)
    expect (result).toBe(153.48)
})
test ("conversion de Yen a Pound", ()=>{
    let result = fromYenToPound(127.9*0.8)
    expect (result).toBe(102.32000000000001)
})