//array
const V=[0,1,2,3,4,5,6,7,"vrutik",true]
console.log(V)
console.log(V[4])


const Heros=["vrutik","hirpara"]
console.log(Heros)
console.log(Heros[1])


const v1= new Array(1,2,3,4,5,6,6,7,8,8,9)
console.log(v1)
console.log(v1[4])

//array Method
console.log("************** Operation on Array**************")
const Operation=[1,2,3,4,5,7,8]
// console.log(Operation)

// Operation.push(6)
// Operation.push(7)
// Operation.pop()//delete lastvalue

// Operation.unshift(9)// put value on array at first position
// Operation.shift()// remove value on array at first position

// console.log(Operation)

// console.log(Operation.includes(9))//output is in boolean
// console.log(Operation.indexOf(9))//array me nahi so output: -1

// console.log(Operation.indexOf(6))//2

const NewOperation = Operation.join()
console.log(Operation)//[1,2] is an array(object)
console.log(NewOperation)//1,2 is a string

console.log(typeof NewOperation)
console.log(typeof Operation)

//slice , splice

console.log("A ",Operation)

const b1= Operation.slice(1,3)
console.log(b1)

console.log("B ",Operation)

const b2= Operation.splice(1,3)//change the origional array
console.log("C ",Operation)

console.log(b2)







