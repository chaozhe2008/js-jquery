// JS data types
/**
 * Boolean
 * Null
 * Undifined
 * Number
 * String
 * Symbol
 */

// var intergerNumber = 100;
// var floatingPoinNumbert = 100.05;
// var float2 = 100.0;
// console.log(intergerNumber, floatingPoinNumbert, float2);
// float2 convert to 100

// var num = "ksdh";
// alert(Number(num)); //casting
// // NaN

// num = "100";
// alert(Number(num));
// // 100

// alert(NaN === NaN); //false
// alert(isNan(NaN)); // true
// alert(isNaN(100)); // false
// alert(isNaN("100")); // false
// alert(isNan(true)); //true --true convert to 1 false convert to 0

//parseInt()
//parseFloat()

// var num1 = parseInt("1234abcd");
// alert(num1); // "1234"

// var num1 = parseInt("20.65");
// alert(num1); // "20"

// var num2 = parseFloat("20.50");
// alert(num2); // "20.5"

// var nam = "Jim\nCook";
// console.log(nam, nam.length);
// alert(nam);
// alert(nam.length); // 8

// var age = 9;
// var ageString = age.toString();
// console.log(typeof ageString); //string

//Two ways to create an object
var person = new Object();
person.name = "ryan";
person.age = 30;
console.log(person);

//------another way------
// var person = {
//   age: 30,
//   nam: "Ryan",
//   "new property": "Human",
//   sayName: function () {
//     return this.nam; //this refers to person
//   },
// };

// console.log(person["new property"], person.sayName()); //property名字里有空格 最好用[]而不是 .

// // adding and deleting properties
// person.address = "US";
// delete person.address;

// console.log("has this property?", person.hasOwnProperty("address")); // false

//nested object

// var person = {
//   age: 30,
//   nam: "Ryan",
//   "new property": "Human",
//   sayName: function () {
//     return this.nam; //this refers to person
//   },
//   likes: {
//     movies: "1984",
//     book: "Life",
//   },
// };

// console.log(person.likes);
// console.log(person.likes.movies);

//------------------JS operators--------------
/**
 * unary  (++, --)
 * conversion (z = "1" ==> +z = 2) convert from string to number
 * relation, computational, comparison(same as java)
 * equals sign and not equals sign(=== strict equal)
 * ternary operator ( ? :)
 * assignment operator (+=, *=)
 * comma operator
 */

var nam = "Ryan";
var age = 30;
console.log("My name is " + nam + " my age is" + age); // concatenation using +  will convert other type to string

var num1 = "10";
var num2 = "10";
var res = num1 - num2; // res = 0
console.log(res); // concatenation using -  will convert string to number

var num3 = 10;
console.log(num1 == num3); //true （== <--> !=)
console.log(num1 === num3); //false （=== <--> !==)

var p1 = 10,
  p2 = 20; // comma operator

//--------------------JS Statements--------------
/**
 * if
 * while
 * for
 * all same as java
 * for (XX in XX)
 * label
 * switch (like C)
 */

//label sign example:
// var cnt = 0;
// outerLabel: for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (i == 5 && j == 5) {
//       continue outerLabel;
//       //break outerLabel;
//     }
//     cnt++;
//   }
// }
// alert(cnt); //95

var num = 0;
switch (num) {
  case 0:
    alert("num is equal to 0");
    break;
  case 1:
    alert("num is  equal to 1");
    break;
  default:
    alert("num is not 1 or 0");
}
