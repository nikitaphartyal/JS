// Primitive Datatype  
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue= 100.5

const isLoggedIn=false
const temp= null
let userEmail;

const id = Symbol('456')
const anotherId = Symbol('456')

console.log(id===anotherId);

const bigNumber = 4764n   //BigInt

// Non-Primitive (Reference)
//Array, Objects, Functions

const heros = ['shaktimaan','doga']; //Array
let obj={
    name:'Nikita',
    age: 21,
} // objects declare in curly braces

const myfuncion = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);

 