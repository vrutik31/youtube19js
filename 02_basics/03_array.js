//object declaration : 1)literal 2)constructor

// singleton 
//constructor thi banavia tyare singleton 1 object bane

// Object.create



// object literals
// not make a singleton its make a multiple instance 

const mySym=Symbol("key1")//key1 is just description not a value

const JsUser={
    name:"vrutik",
    age:18,
    mySym:"mykey1",//it is as a string
    [mySym]:"mykey1", //[] now mykey1 is value & this output is in last
    "full name":"hirpara",
    location:"ahmedabad",
    isLoggedIn:false,
    email:"1232@gmail.com"
}
/*
console.log(JsUser.name)
console.log(JsUser["name"])
//console.log(JsUser."full name")//not accessible with .
console.log(JsUser["full name"])// accessible without .

console.log(JsUser[mySym])

JsUser.email="vrutik@gmail.com"
console.log(JsUser.email)
Object.freeze(JsUser)
JsUser.email="vr@gmail.com"
console.log(JsUser.email)//here not changed

console.log(JsUser)
*/

JsUser.greet=function greetfunction(){//[Function: greetfunction]
//JsUser.greet=function(){ //[Function (anonymous)]
    console.log("hello js user")
}

console.log(JsUser.greet)
JsUser.greet()//hello js user
console.log(JsUser.greet())//not a function output:undefined

JsUser.greet1=function(){
    console.log(`hello world,${this.name}`)
}
console.log(JsUser.greet())
console.log(JsUser.greet1())










































































































































































































