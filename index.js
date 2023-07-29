// function duplicatearray(array){
//     return array.concat(array);
// }
// let originalarray =[1,2,3,4,5];

// console.log(duplicatearray(originalarray))
// function duplicateArray(array){
//     return [array , array]}
//     let arr=[1,4,3,2,8]
//    let answer= duplicateArray(arr)
//     console.log("duplicate array: "+answer)

    // for(var i=1; i<=100;i++){
    //     if(i%3===0 && i%5===0)
    //         console.log("fizzbuzz")
    //         else if(i%3===0 )
    //         console.log("fuzz")
    //         else if(i%5===0)
    //         console.log("buzz")
    //         else
    //             console.log(i)
//     // }
//     console.log("" || "")
// console.log("" && "")
// (function(){
// console.log(1+'1')}
// )()
// console.log(Math.abs(.1-.4)<-.30000001)
// console.log(Math.floor(Math.random()*58))
// function add(a,d){
//     if(arguments.length===2){
//         return a+d;
//     }else if(arguments.length===1){
//         return function(d){
//             return a+d
//         }
//     }
// }
// console.log(add(2,3))
// console.log(add(2)(3))
// // add(2)(4)
// add(2)
// What is the value of window.foo?

// ( window.foo || ( window.foo = "bar" ) );
// var foo = "Hello";
// (function() {
//   var bar = " World";
//   console.log(foo + bar);
// })();
// console.log(foo + bar);
// (function() {
//     // Code to be executed immediately
//     console.log("This is an IIFE!");
//   })();

// var foo = [9,4];
// var boo =[1,2,3]
// foo.push(1);
// console.log(foo.length)
// console.log(foo)
// foo.append(2);


// What is the value of foo.x?

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log(foo.x)
// console.log('one');
// setTimeout(()=> {
//   console.log('five');
// },500);
// setTimeout(()=> {
//     console.log('two');
//   },1000);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');
// doSomething().then(function () {
//     return doSomethingElse();
//   });
// (function(){
//     var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));
// const obj = { a: 1, b: 2, c: 3 };
// for (let prop in obj) {
//   console.log(prop, obj[prop]);
// }
// int[] arr = {1, 2, 3};
// for (int item : arr) {
//     System.out.println(item);
// }java
// const obj = { a: 1, b: 2, c: 3 };
// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });
// const arr = [1, 2, 3];
// arr.forEach((item) => {
//   console.log(item);
// });
// let arr=[1,2,3]
// arr.forEach((x)=>console.log(x*2))
// let arr=[1,2,3]
// // arr.map((x)=>console.log(x*2))
// const numbers = [1, 2, 3, 4, 5];

// // Using anonymous function as a callback for the Array.filter() method
// const evenNumbers = numbers.forEach( (number)=> {
   
//    console.log(number % 2 === 0)
// // });
// const nums=[1,2,3,4,5]
// const sum= nums.splice(1,4,1);
//     console.log(sum)
// // const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15

// for (var i = 0; i < 5; i++) {

//     var btn = document.createElement('button');
  
//     btn.appendChild(document.createTextNode('Button ' + i));
  
//     btn.addEventListener('click', function(){ console.log(i); });
  
//     document.body.appendChild(btn);
  
//   }
 import React, { useState, useCallback } from 'react';

function Button({ onClick, children }) {
 console.log('Button rendered');
 return <button onClick={onClick}>{children}</button>;
}

function App() {
 const [count, setCount] = useState(0);
 const handleClick = useCallback(() => {
   setCount(prevCount => prevCount + 1);
 }, []);
 return (
   <>
     <p>Count: {count}</p>
     <Button onClick={handleClick}>Click me!</Button>
   </>
 );
}
  
  
  