// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol(makes value unique), BigInt

// JavaScript is a dynamically typed language 

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// // console.log(id === anotherId);

// const bigNumber = 346545645556749875646546n


// //  Reference (Non Primitve)

// // Array, Objects, Functions

// const heros = ("shaktiman", "naagraj", "doga");

// let myObj = {
//     name: "Aryan",
//     age: 20,
// }

// const myFunction = function(){
//     console.log("Hello");
// }

// console.log(typeof outsideTemp);



// ************** Memory ******************

// Stack (Primitive), Heap(Non Primitive)

let myYoutubename = "xyz"

let anothername  = myYoutubename
anothername  = "hadafd"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne


userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);