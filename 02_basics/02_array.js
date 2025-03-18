const myheros=["rajiv dixit","narendra","modi"]
const dc = ["abhimanue","arjun","Bhim"]

//myheros.push(dc)//array in array 
//in myheros now total 4 element 

//console.log(myheros)

//console.log(myheros[3][2])


//used to merge two array and make a new array

// const allHeros=myheros.concat(dc)
// console.log(allHeros)

//optional and easy method to merge two array NAMED SPREAD

const all_new_heros=[...myheros,...dc]
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6,[7,8,9,[10,11]]]]

const real_another_array=another_array.flat(3)//instead of 3 use also infinity
console.log(real_another_array)


console.log(Array.isArray([1,2,3]))
console.log(Array.from({name:"vrutik"}))// aa nahi banavi sake bcz kehna padega ki kisko banana he key or value


let score1 = 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))






//isArray,from,of is necessary to  understand