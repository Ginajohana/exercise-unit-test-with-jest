const { sum } = require("./app.js");

test ("suma de 23 + 21", ()=> {
    let result = sum(23,21)
    expect(result).toBe(44)

})