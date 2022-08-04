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

// const arr = [11, 12, 13, 14, 15];
// arr.forEach((elem, idx) => {
//   console.log(`element at index-${idx} is ${elem}`);
// });

// function add(num1,num2){
//   return num1 + num2;
// }

// console.log(add(1,2))

// const arr = [1, 2, 3, 4, 5, 6];

// push is to add at end of arr
// pop is to remove at end of arr
// shift is to remove at start of arr
// unshift is to add at start of arr
// arr.push(5)
// arr.pop()
// arr.shift()
// arr.unshift(6)

// from  which elem you want to add or reemovve elements
// how many number of  elements you want too remove
// After 2 parameters all other params will be added to the arr

// Note - The splice method changes your original arr

// arr.splice(2, 2)
// console.log(arr)

// Note - The slice method doesn't changes your original arr
// console.log(arr.slice(1,3))

// console.log(arr)

//map always returns a array
// const newArr2 = arr.map((el, idx) => {
//   const res = el * idx;
//   if(res === 0) {
//     return res;
//   }
// });
// const newArr = arr.map((el, idx) => el % 2 == 0);
// console.log(newArr);
// // console.log(newArr2);

// const filteredArr = arr.filter((el) => el % 2 == 0);
// console.log(filteredArr);

// //When we know we have only one unique value in array that we want
// const finderArr = arr.find((el) => el == 1 );
// console.log(finderArr);

// const exampleArr= ["hey", "hello"]

// const finderArrIndex = exampleArr.findIndex((el) => {
//   //conditions

//   return el == "hey"
// });
// console.log(finderArrIndex);

// console.log(exampleArr.indexOf("hi"))
// console.log(arr.includes(1))


// let newStr =''
// exampleArr.forEach(el => newStr+=el + " ")
// console.log(newStr)

// console.log(exampleArr.join(" -- "))

// console.log(exampleArr.toString())

const obj = {
  username : "Jon",
  age: 20,
  address : {
    city:["New Delhi", "Faridabad", "Mumbai"],
    country: "India"
  },
  userDetails: function(name, age){
    console.log(`${this.username} age is ${this.age}`)
  }
}
// non primitive - it has reference

// obj.city = "Delhi"

// console.log(obj.username)
// obj.userDetails()


// const obj2 = Object.create(obj)
// obj2.username1 = "ABC"
// obj2.age1 = 11
// console.log(obj2)
// obj2.userDetails()

// const keyVals = Object.keys(obj).map(key => {
//     return [key, obj[key]]
// })

// console.log(keyVals)

// keyVals.map(entry => console.log(entry[0], entry[1]))



// // We can not add multiple values with same key
// // These methods are used to merge multiple objects
// const obj3 ={...obj, ...obj2}
// // const obj3 =Object.assign(obj, obj2)

// console.log(obj3)



// const newObj = {
//   message: "Hey",
//   from:"Tom"
// }

// // This method does allow you to either add a value nor update any value
// Object.freeze(newObj)
// newObj.message = "Hi"
// newObj.newKey = 20

// console.log(newObj)



// const newObj2 = {
//   message: "Hey",
//   from:"Tom"
// }

// //This method allows you to only update the values but doesn't allow to add new values
// Object.seal(newObj2)
// newObj2.message = "Hi"
// newObj2.newKey = 20

// console.log(newObj2)


// let user1 = {
//   firstName: "Rutvij",
//   lastname: "Patel",
//   // printFullName: function (message, age) {
//   //   console.log(this);
//   //   console.log(`${message} ${this.firstName} ${this.lastname}
//   //   age is ${age}`);
//   // }
// };

// function printFullName(message, age) {
//   console.log(this)
//   console.log(`${message} ${this.firstName} ${this.lastname}
//   age is ${age}`);
// }

// let user2 = {
//   firstName1: "Ankur",
//   lastname1: "Shrivastav"
// };

// //function borrowing
// let myNewFunc = printFullName.bind(user2, "Hey", 25);
// myNewFunc()
// // user1.printFullName()

// printFullName.call(user2, "Hey", 25);
// printFullName.apply(user2, ["Hey", 25]);

// function sum (num1, num2 , num3,  ...args) {
//   console.log(num1, num2 ,args)
//   console.log(args[0] + args[1])
//   return num1 + num2;
// }

// console.log(sum(3,6,4,7,8,9,10))

//You should not pass same key name to the objects that you want to concatinate
// const user3 = {...user1, ...user2}

// console.log(user3)

// const arr1 = [1,2,3,4,5]
// const arr2 = [11,12,13,14,15]

// let arr3 = [...arr1, ...arr2]

// console.log(arr3)

// //destructuring
// let [one , num2, num3, ...nums] = arr1

// // let one = arr1[0]
// // let two = arr1[1]

// console.log(one)
// console.log(num2)
// console.log(num3)
// console.log(nums)

//Spread operator when we are copying arr or objects
//Rest operator when we pass rest the the params/values in a keyword

// let user = {
//   firstName1: "Ankur",
//   lastname1: "Shrivastav",
//   address:{
//     city: "Delhi",
//     country: "India"
//   }
// };

// console.log(user.firstName1)

// let { firstName1, lastname1 } = user;

// console.log(firstName1);

// function getSomeDatafromObj(userObj) {
  
// }

// console.log(user.address.city)


// let { firstName1, address: {city, country} } = user;


// let city = user.address.city
// let country = user.address.country
// console.log(city, country)

// console.log(getSomeDatafromObj(user);
// console.log(getSomeDatafromObj(user).country);


// const country = getSomeDatafromObj(user)
// console.log(country.rest.country)