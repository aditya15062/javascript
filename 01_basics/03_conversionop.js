let score="33ad";
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber) 

console.log(valueInNumber)

//for Number() it will convert but typeof will be number
// "33" =>33
// "33abc" =>Nan
// "true" =>1

let isLoggedIn = "aditya"

let booleanIsLoggedIn = Boolean(isLoggedIn) //for conversion
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false;
// "" => false; 
// "aditya" => true;

//***********CONVERSION */
 
console.log("1" + 2); //output => 12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32


