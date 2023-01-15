// var colors = new Array();
// var colors = []; //equivalent

// var colors = ["red", "green", 99]; //can hold different type of data
// console.log(colors.length); // 3
// console.log(Array.isArray(colors)); // true
// console.log(colors instanceof Array); // equivalent

// var colors = ["red", "green", "blue"];
// console.log(colors.join(" - ")); //'red - green - blue'
// console.log(colors.toString()); //'red, green, blue'

//-------------stack operations-------------
// var colors = [];
// colors.push("green");
// console.log(colors); //['green']
// var removed = colors.pop();
// console.log(colors); //[]
// console.log(removed); // green

//-------------queue operations-------------
// var colors = [];
// colors.unshift("red", "blue"); // unshift - enqueue into front
// console.log(colors); //['red', 'blue']
// colors.unshift("yellow");
// console.log(colors); //['yellow','red','blue']
// var removed = colors.shift(); // 'blue' shift -- dequeue at the end of array

//-------------reverse & sort------------
// var values = [2, 1, 3];
// values.sort();
// console.log(values); //[1,2,3]

// function compare(v1, v2){
//   return v2 - v1;
// }

// values.sort(compare);
// console.log(values);  //[3,2,1]

//-----------concat & slice--------------
// var arr1 = [1, 2];
// var arr2 = [3, 4];
// console.log(arr1.concat(arr2)); //[1,2,3,4] doesnot modify arr1
// var arr3 = arr1.slice(1);
// console.log(arr3); // [2]
// var arr3 = arr1.slice(0, 1); //左闭右开 和python一样;
// console.log(arr3); // [1]

// var deleted = arr1.splice(0, 1); // from index 0 delete 1 item;
// console.log(deleted); //[1]
// console.log(arr1); //[2]

// arr4 = ["red", "green", "blue"];
// deleted = arr4.splice(0, 1, "orange");//from index 0 deleted 1 item and insert "orange"
// console.log(deleted, arr4);//['red'], ["orange", "green", "blue"]

//--------------find-------------------
// var colors = ["red", "green", "blue", "green"];
// alert(colors.indexOf("red")); // 0
// alert(colors.indexOf("green")); // 1 find the first that match
// alert(colors.indexOf("green", 2)); //3 search from index 2
// alert(colors.indexOf("orange")); // -1 return -1 if not found

//------------------iterate-------------
// var nums = [4, 2, 3, 1, 5];
// function filt(item, index, array) { //default parameters for arrays
//   return item > 1;
// }
// var res = nums.every(filt);
// console.log(res); //false (equivalent to python all)
// var res = nums.some(filt);
// console.log(res); //true (equivalent to python any)
// var nums2 = nums.filter(filt);
// console.log(nums2); //[4,2,3,5]

// nums.forEach(function (item, index, array) {
//   console.log(item > 1);
// }); //true, true, true, false, true

// var mapRes = nums.map(function (item, index, array) {
//   return item % 2;
// });
// console.log(mapRes); //[0,0,1,1,1]

//-----------------reduce & reduceRight--------
// var nums = [1, 2, 3, 4, 5];
// var sum = numbers.reduce(function (preValue, currentValue, index, array) {
//   return preValue + currentValue;
// });
// console.log(sum); //15 //reduceRight compute from right to left

//---------------String Manipulation---------

// var myStr = "hello world";
// var newStr = myStr.slice(6);
// console.log(myStr); //hello world
// console.log(newStr); //world(from index 6 to the end)

// var newStr = myStr.substring(6, 8);
// console.log(newStr); //wo (from index 6 to 7)

// //equivalent to:
// var newStr = myStr.substr(6, 2);
// console.log(newStr); //wo (from index 6 and count 2)

/**
 * indexOf(targ, startIndex), lastIndexOf: not found:return -1, indexOf search rightward, lastIndexOf search leftward)
 * trim(): delete space in begining and end of string (python strip())
 * toUppercase(), toLowercase(): same as Python
 */
var myStr = "hello";
var res1 = myStr.indexOf("o", 2); //4
var res2 = myStr.lastIndexOf("o", 2); //-1
alert(res1);
alert(res2);
