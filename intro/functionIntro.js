// function sayHi() {
//   return arguments[0] + arguments[1];
// }

// alert(sayHi(1, 2)); //3

// function count() {
//   if (arguments.length >= 2) {
//     return "You have input more than 2 arguments";
//   } else {
//     return "You have input less than 2 arguments";
//   }
// }
// alert(count(1, 2));

//------------------------in JS the biggest scope is window
// var color = "blue";

// function test1() {
//   var newColor = "red";
//   return newColor + " " + color;
// }

// alert(test1()); //red blue

// function test2() {
//   var color = "red";
//   return color;
// }

// alert(tes2()); //red

//--------------------------in JS variables created in if/for block will stay in global scope
// for (var i = 0; i < 10; i++) {
//   //
// }

// console.log(i); // i = 10

//------in JS variable type dominates its reference type (not like java)

//-------function declaration methods--------------

//method1 total is a variable must define before using
// console.log(total(1, 2)); //error
// var total = function (num1, num2) {
//   return num1 + num2;
// };

//method 2 newtotal is in global frame and can be used before defining
// console.log(newtotal(1, 2)); //3
// function newtotal(num1, num2) {
//   return num1 + num2;
// }

//------------argument properties----------
//two special objects inside: arguments, this.
//arguments.callee: pointer to the current function(that holds the arguments)
//func.caller: pointer to functions that use current function as argument(if no such function, caller=null)

// function outside() {
//   inside();
// }

// function inside() {
//   console.log(inside.caller);
// }

// console.log(outside()); //outside() function

//------------this refer to the executing context of the current function-----
// window.color = "red";
// var obj = { color: "blue" };

// function sayColor() {
//   console.log(this.color);
// }
// sayColor(); //red
// obj.sayColor = sayColor;
// obj.sayColor(); //blue

// function sum(num1, num2) {
//   return num1 + num2;
// }

//----------apply, call, bind----------
// function callingSum(num1, num2) {
//   return sum.apply(this, arguments);
// }

// console.log(callingSum(1, 2)); //3

// //equivalent to:

// function callingSumNew(num1, num2) {
//   return sum.call(this, num1, num2);
// }

// console.log(callingSumNew(1, 2)); //3

// //bind() creates a new function instance whose "this" value
// // is bound to the value that was passed into bind()

// window.color = "red";
// var obj = { color: "blue" };

// function sayColor() {
//   alert(this.color);
// }

// var objSayColor = sayColor.bind(obj); //bind sayColor() function to obj
// objSayColor(); //blue

//-----anonymous functions are not bound to object' "this" scope-----------
var curr = "window";

var obj = {
  curr: "object",
  getCurr: function () {
    return function () {
      return this.curr;
    };
  },
};

alert(obj.getCurr()()); //window

var obj = {
  curr: "object",
  getCurr: function () {
    var that = this;
    return function () {
      return that.curr;
    };
  },
};

alert(obj.getCurr()()); //object
