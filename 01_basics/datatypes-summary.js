// 2types of data types 1)primitive 2)non-primitive

console.log("*******PRIMITIVE(PRIMITIVE)***********");
// call by value means copy of data if you change this copy then origional is not changed

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const v = "vrutik"
const score = 100
const A=1.3

const isLoggedIn=false
const temprature=null

let userEmail;// this is automatically undefined


console.log("******************SYMBOL ***********************")
const id=Symbol("123")
const anotherid=Symbol("123")
console.log(id===anotherid)
// false because Symbol create all time new Symbol value is same but Symbol is different
console.log("******************SYMBOL END***********************")

console.log("******************BIGINT***********************")
const bignumber=12345678765432123456776543234567
console.log(bignumber)












// Refference (non-primitive)

// array, object, function

const BELIEV = ["onyou","selff","god","yourhardwork"]

let y ={
    age:34,
    name:"vrutik",
}

const z=function(){
    console.log("JAI SHREE RAM")
}
z()
console.log(BELIEV,y)




console.log("******************THATS WHY JS IS DYNAMIC")
let x = 10;  // x is a number
x = "Hello"; // x is now a string
console.log(typeof x)



//********************************************************************* */

//stack(primitive),Heap(non-primitive)
let my="vrutik"

let anothermy= my
 anothermy= "hirpara"

console.log(my)

console.log(anothermy)


let user={
    name:"vrutik",
    paymentmode:"upi",
    age:18,
}

let user1 = user

user1.age = 35
console.log(user.age)
console.log(user1.age)