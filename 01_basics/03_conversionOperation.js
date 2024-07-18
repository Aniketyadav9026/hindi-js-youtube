let score = undefined 
 

// console.log(typeof score)

let valueInNum = Number(score);
// console.log(typeof valueInNum)
// console.log(valueInNum)

// 33 => number
// "33" => NAN
// null => 0
// undefined => nan

let isBoolean = "abc"

let valueInBoolean = Boolean(isBoolean)
// console.log(valueInBoolean);

// true => 1
// 0 => false
// "" => false
// "aniket" => true

let someNum = 33
let valueInString = String(someNum)
// console.log(valueInString);
// console.log(typeof valueInString);

// 33 => string

// ********************Operations**************************************

let value = 10;
let negValue = -value;

// console.log(negValue);

// console.log(2-2);
// console.log(2+2);
// console.log(2*3);
// console.log(2**2);
// console.log(3/2);
// console.log(3%2);

let str1 = "hello"
let str2 = " Aniket"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log("1" + "2");
// console.log(1 + "2");          //=>12
// console.log("1" + 2 + 2);    //=>122
// console.log(1 + 2 + "2");   // =>32

// console.log(true);      //true
// console.log(+true);     //1
// console.log(+"");       //0
// console.log(true+);  //error


let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100
gameCounter++
console.log(gameCounter);