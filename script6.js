//let arr=[1,2,3,4,5]
//console.log(arr.includes(2));



//let fruits = ['banana','orange','apple','banana','kiwi','banana']
//console.log(fruits.lastIndexOf('banana'));



//let arr=[1,2,3,4,5,6,7]

//function greaterthan4(element){
  //return element > 4
//}
//let result = arr.findindex(greaterthan4)
//console.log(result);


//let fruits=['apple','banana','orange']

//let result = fruits.join('/')
//console.log(result);


//some some element is even

//let arr =[1,2,3,4,5]

//function iseven(element){
//return element%2===0
//}
//let result = arr.some(iseven)
//console.log(result);


//for every condition it checks all...



//filter array 4 and 5  returns 
//let arr =[1,2,3,4,5]

//function isgreaterthan3(element){
 //   return element>3

//}
//let resultarray = arr.filter(isgreaterthan3)

//console.log(resultarray)


//Map....
/*let arr=[1,2,3,4,5]
function double(item){
    return item * 2
}
let newarr=arr.map(double)
console.log(newarr)
*/
//for each not returns only executes for each of the  element


//reduce it reduces to a single value
/*
let arr=[1,2,3,4,5]
let initialvalue=0
let result= arr.reduce(function(accumulator,current){
accumulator=accumulator+current
return accumulator

}.initialvalue)
*/



//objects
/*let user ={
  name:"mantu",
  age : 25,
  isadmin:false

}
console.log(user.age)
console.log(user['name'])
console.log(user.isadmin);

 //one way to create object
let user ={}
user.name = 'agni'
console.log(user);
*/

//another way of creating empty object
//let user= new object{}
//user.name ='rahul'
//console.log(user);


/*let salaries = {
  john:100,
  ann:160,
  peter:130
}
let sum = 0;
for(let item in salaries){
  sum +=salaries[item]
}
*/
let menu = {
  width:200,
  height:300,
  title:'my menu'
}

let mul = 0;
for(let key in menu){
  if(typeof menu[key]==="number")
   menu[key] = menu[key] * 2
   


}
console.log(menu)


// object refering and copiying


