//const tinderUser=new Object() is a singletone object

const tinderUser={}//non-singletone object

tinderUser.id="123abc"
tinderUser.name="samay"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"vrutik",
        lastname:"hirpara"
    }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)
//console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1:"a",2:"b"}
//console.log("*****")

//console.log(obj1)
const obj2={3:"c",4:"d"}
const obj3={5:"y",6:"z"}

const obj4={obj1,obj2}
//console.log(obj4)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//console.log(obj1,obj2)//{ '1': 'a', '2': 'b' } { '3': 'c', '4': 'd' }


//below both case is used to merge but in obj5 ob1,obj2&obj3 is remain same and make a new array
const obj5 = Object.assign({},obj1,obj2,obj3)
//console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'y', '6': 'z' }
// in obj6 is just a reference of obj1
const obj6 = Object.assign(obj1,obj2,obj3)
//console.log(obj6)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'y', '6': 'z' }
//console.log(obj1)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'y', '6': 'z' }

// now understand reference 
/*
obj1.a=100
console.log(obj1) //obj1 is changed then 6 is automatically changed
console.log(obj6)
*/


const obj7={...obj1,...obj2,...obj3}
//console.log(obj7)

//console.log(tinderUser)

//console.log(Object.keys(tinderUser))
//console.log(Object.entries(tinderUser))
//
//console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true
//console.log(tinderUser.hasOwnProperty('LoggedIn'))//false


const course={
    name:"vrutik",
    surename:"hirpara"
}

//console.log(cource.name)
//destructure
//shortcut
const {name}=course
console.log(name)

const {name: n}=course
console.log(n)


/*
// 2 types of json file 
//1)
{
    "cvnsmvn":"jksdbvkbs"
    "cvnsmvn":"jksdbvkbs"
    "cvnsmvn":"jksdbvkbs"
}
//2)
[
    {},
    {},
    {}
]


    */