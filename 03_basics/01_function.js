/*
// console.log("v")
// console.log("v")
// console.log("v")
// console.log("v")
// console.log("v")
// console.log("v")

function say(){
console.log("v");
console.log("v")
console.log("v")
console.log("v")
console.log("v")
console.log("v")
}
say()
*/

/*
// n1 n2 is parameter & 3,null is arguement
function v(n1,n2){
    console.log(n1+n2)
}

const result = v(3,4)//7
console.log(result)//undefined
*/

/*
//now undefined is a problem solve below

function v(n1,n2){
    let result=n1+n2
    return result
    console.log("vrutik")//not print bcz write after return
}
const result=v(3,5)
console.log(result)
*/

/*
function v(n1,n2){
    return n1+n2
}
const result=v(3,5)
console.log(result)
console.log(v(12312,343))
*/

//HOW MANY TYPES TO TAKEA VALUE


/*
function x(username){
    return `${username} just logged in`
}

console.log(x("vrutik"))//vrutik just logged in
console.log(x(""))//just logged in
console.log(x())//undefined

*/


/*
function x(username){
   if(username===undefined){
    console.log("please enter name")
    return// aagal nu kai jose nai
   }
   return `${username} just logged in`
  
}

console.log(x())//undefined

*/

/*
// in if():false 2)if(undefined):false
function x(username="vr"){//kai pass na karu ho tyare
    if(!username){
     console.log("please enter name")
     return// aagal nu kai jose nai
    }
    return `${username} just logged in`
   
 }
 console.log(x("vrutik"))//undefined //jo 2nd value kari to override thy jase
*/

//... is rest and spread both depend on how to use

//here ... is a rest
function calculateCartprice(val1,...num1){//200 is in val1 remaining is in rest
    return num1
}
console.log(calculateCartprice(200,1212,123))


const user={
    username:"vrutik",
    price:200
}

function vr(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}
vr(user)

//insteD of making object direct pass 
vr({
    username:"abshcbjs",
    prices:299
})

//NOW SAME APPLY ON ARRAY
const myArray=[1,2,3,4,5]

function returnValue(vchdsvhcbdsc){
    return vchdsvhcbdsc[1]
}
console.log(returnValue(myArray))
console.log(returnValue([300,234023,2343,234,1355]))
