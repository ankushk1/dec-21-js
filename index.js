// console.log("JS Running")
// console.error("Error running JS")
// console.warn("Warn running JS")

//When we declare a variable and not initialize, it  will give undefined
//When we not declare a variable, it  will give not defined

// Primitive data types
// var user;
// user = 'Jake';
// console.log(user);

// var age = 1;
// console.log(age)

// var isAdult = true;
// console.log(typeof isAdult)

// var num = '20'

// console.log(typeof Number(num))
// console.log(Boolean(age))
// In case  of boolean conversion, if the number is 0 it will give false
// Else any other number will give true

// var num = 3;
// var num2 = 20;

// if (num1 === 11) {
//   num += 2;
//   console.log("Num is equal to 10");
// } else if (num1 < 10) {
//   console.log("Num is greater than 10");
// } else {
//   console.log("Num is not equal to 10");
// }

// var result = num > 10 ? num > 15 ? console.log('Num>15') : console.log('Num <15') : console.log('Num<10')
// var result = num > 10 ?  console.log('Num>10') : num > 5 ? console.log('Num>5') : console.log('Num<5')

//JS Strings

// let str = "Hey how are you?"

// console.log(str.length)

// let username = "ABC"
// let age = 20

// console.log('My name is ' + username + ' ' + 'and age is ' + age);

// console.log(`My name is ${username} and age is ${age}`)

// let str = "Hey how are you?, hey"

// console.log(str.substr(3,4))

// console.log(str.substring(3,7))
// console.log(str.slice(-5,-1))

// let ans = str.replace("Hey", "hi")

// let updatedStr = str.substring(0,3).toLowerCase() + str.substring(3)
// console.log(updatedStr)
// // let ans = str.replaceAll("hey", "hi")
// let ans = updatedStr.replaceAll("hey", "hi")
// console.log(ans)

// const example = "Hello"
// console.log(example.toUpperCase())

// let str = "Hey! how are you? hey"

// const splitStr = str.split("!")// delimeter
// console.log(splitStr[0])
// console.log(splitStr[1])

// // console.log(str.substring(0,7))
// console.log(splitStr[0].toLowerCase() + str.substring(3))

// console.log(splitStr[3].split("?")[0])
// console.log(splitStr[1].split("?")[0].split(' ')[3])

// console.log(str)
// console.log(str.trim())

// console.log(str.charAt(1))

// const arr = [11,12, 13, 14, 15];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (var i in arr) { // this returns the indexes
//   console.log(i)
// }

// for (var i of arr) { //// this returns the values of arr
//   console.log(i)
// }

const arr = [11, 12, 13, 14, 15];
arr.forEach((elem, idx) => {
  console.log(`element at index-${idx} is ${elem}`);
});

// function add(num1,num2){
//   return num1 + num2;
// }

// console.log(add(1,2))
