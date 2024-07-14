let score = undefined 
 

console.log(typeof score)

let valueInNum = Number(score);
console.log(typeof valueInNum)
console.log(valueInNum)

// 33 => number
// "33" => NAN
// null => 0
// undefined => nan

let isBoolean = "abc"

let valueInBoolean = Boolean(isBoolean)
console.log(valueInBoolean);