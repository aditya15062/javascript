const name= "aditya"
const repocount = 50

console.log(name + repocount + "value"); //not a good practice to write like this

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); //good practice

const gamename= new String('aditathakur')

console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));
const anotherstring = gamename.slice(-5,4);
console.log(anotherstring);

const newstringone= "     aditya   ";
console.log(newstringone.trim()); //it removes extra spaces

console.log(gamename.replace('thakur','singh'));

console.log(gamename.includes('adita')); // return true if it is present

const stringsep= ('aditya-thakur-is-good');
console.log(stringsep.split('-'));//it converts it in array based on provided in split