/*
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a)
// console.log(b)        this all output is print and no problem 
// console.log(c)

//NOW UNDERSTAND SCOPE
var c = 300;
let a = 300;
if(true){
             let a = 10;
             const b = 20;
             var c = 30;//same with no define

             console.log("INNER:",a)//within the scope value of a is 10
        }



console.log(a)// a is not defined bcz let is in the scope then we can't access out of scope
// a is print value 300 not 10 it is not create any problem
//console.log(b) //b is not defined bcz let is in the scope then we can't access out of scope       
//console.log(c) //in this output is 30 not a 300 ,300 is a constant still output is 30 it is the problem
*/

function one(){
    const username ="hitesh"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)//out of scope not print
    two()
}
//console.log(username)//out of scope not print
one()
