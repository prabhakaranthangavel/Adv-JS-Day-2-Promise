//! ===>Syntax of Promise
// var/let/const variablename = new Promise((resolve,reject)=>{})

// *************************************************************************************************************************

//! ===>Example 1: Promise in States

// const a = new Promise((resolve,reject) => {
//   if(5 > 1)
//   {
//       resolve("Promise is Resolved/Fullfilled");
//   }
//   else
//   {
//       reject("Promise is Rejected");
//   }
// })
// console.log(a);

// o/p:

// Promise {<fulfilled>: 'Promise is Resolved/Fullfilled'}
// [[Prototype]] :  Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Promise is Resolved/Fullfilled"



//! ===>Example 2: Promise in States with DOM prompt Method
//! Odd or even Number

// const b = parseInt(prompt("Enter the number"));
// const a = new Promise((resolve,reject) => {
//     if(b%2==0)
// {
//     resolve("Even Number")
// }
// else
// {
//     reject("Odd Number")
// }
// })
// console.log(a);


// o/p:user ன் input ஐ பொறுத்து output மாறுபடும்.ஏனென்றால் prompt method ஐ பயன்படுத்துகிறோம்.
//     ஒருவேளை input ஆனது string ஆக இருந்தால் என்ன செய்வது அதனால் parseInt ஐ பயன்படுத்துகிறோம்.


// i/p:678

// Promise {<fulfilled>: 'Even Number'}
// [[Prototype]] :  Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Even Number"


// i/p:6789

// Promise {<fulfilled>: 'Odd Number'}
// [[Prototype]] :  Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Odd Number"



//! ===>Session Task: 18 > eligible to vote; 18< not eligible to vote

// const age=parseInt(prompt("enter your age"))
// const eligible=new Promise((resolve,reject) => {
//     if(age > 18)
//     {
//         resolve("You are eligible");
//     }
//     else
//     {
//         reject("You are not eligible");
//     }
// })
// console.log(eligible);


// i/p:35

// Promise {<fulfilled>: 'You are eligible'}
// [[Prototype]] :  Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "You are eligible"


// i/p:15

// Promise {<fulfilled>: 'You are not eligible'}
// [[Prototype]] :  Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "You are not eligible"



//! ===>Example .then & .catch properties

// const age=parseInt(prompt("enter your age"))
// const eligible=new Promise((resolve,reject) => {
//     if(age > 18)
//     {
//         resolve("You are eligible");
//     }
//     else
//     {
//         reject("You are not eligible");
//     }
// })
// eligible.then((data)=>console.log(data)).catch((error)=>console.log(error)); 

// Not A Preferred Method just understanding:
// eligible.then((data)  =>console.log(data));
// eligible.catch((error)=>console.log(error));

// *************************************************************************************************************************

//! Promise in functions
// Function returns the promise
// for a promise if there are both resolve and reject then it executes in the order.

//! ===>Example 1:
// function foo(num) {
//   return new Promise((resolve, reject) => {
//     resolve("this is resolved"+" "+num);
//     reject("this is rejected"+" "+num);
   
//   });
// }
// foo(12).then((data)=>console.log(data)).catch((error)=>console.log(error))

//! ===>Example 2:
// function foo(num) {
//   return new Promise((resolve, reject) => {
//     reject("this is rejected"+" "+num);
//     resolve("this is resolved"+" "+num);
   
//   });
// }
// foo(25).then((data)=>console.log(data)).catch((error)=>console.log(error))

// *************************************************************************************************************************

//! Promise chaining

//! ===>Example:

// function mul(num) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => resolve(num * 2), 2000);
//   });
// }
// mul(5).then((data)=>{
//     console.log(data); //10
//     return mul(data) //return mul(10)
// }).then((data1)=>{
//     console.log(data1); //20
//     return mul(data1) //return mul(20)
// }).then((data2)=>console.log(data2)).catch((error)=>console.log(error))

// *************************************************************************************************************************

//! Promise.all()

//! ===>Example:

// const p1 = new Promise((resolve, reject) => {
//   if (false) 
//   {
//       setTimeout(() => resolve("P1 is Resolved"), 2000);
//   } 
//   else 
//   {
//       setTimeout(() => reject("P1 is Rejected"), 4000);
//   }
// });

// const p2 = new Promise((resolve, reject) => {
//   if (true) 
//   {
//       setTimeout(() => resolve("P2 is Resolved"), 2000);
//   } 
//   else 
//   {
//       setTimeout(() => reject("P2 is Rejected"), 4000);
//   }
// });

// const p3 = new Promise((resolve, reject) => {
//   if (true) 
//   {
//       setTimeout(() => resolve("P3 is Resolved"), 2000);
//   } 
//   else 
//   {
//       setTimeout(() => reject("P3 is Rejected"), 4000);
//   }
// });

// Promise.all([p1, p2, p3])
// .then((data) => console.log(data)).catch((error) => console.log(error));

// *************************************************************************************************************************

//!Promise.allsettled

// const p1 = new Promise((resolve, reject) => {
//     if (false) {
//       setTimeout(() => resolve("P1 is resolved"), 2000);
//     } else {
//       setTimeout(() => reject("P1 is rejected"), 4000);
//     }
//   });
  
//   const p2 = new Promise((resolve, reject) => {
//     if (true) {
//       setTimeout(() => resolve("P2 is resolved"), 2000);
//     } else {
//       setTimeout(() => reject("P2 is rejected"), 4000);
//     }
//   });
  
//   const p3 = new Promise((resolve, reject) => {
//     if (true) {
//       setTimeout(() => resolve("P3 is resolved"), 2000);
//     } else {
//       setTimeout(() => reject("P3 is rejected"), 4000);
//     }
//   });
//   const res = Promise.allSettled([p1,p2,p3]).then((data)=>data.forEach((res)=>console.log(res)))

// *************************************************************************************************************************