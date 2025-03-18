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
console.log(regularUser.fullname.userfullname.firstname)