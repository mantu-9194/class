//Add object
let obj=[
    
    { id:1, name:'shivam', age:20 },
    { id:2,name:'kumar',age:21},
    {id:3, name:'aj',age:23}
]
console.log(obj);
let newobj=
{id:4, name:'dj',age:45}
obj.push(newobj);
console.log(obj);
let tomodifyindex= obj.findIndex(item=> item.id===3)
obj[tomodifyindex].age=20;
console.log(obj);
 
let user=[
    
    { id:1, name:'shivam', age:20 },
    { id:2,name:'kumar',age:21},
    {id:3, name:'aj',age:23}
]
                                                    
let deleteindex= user.findIndex(item=>item.id===3)
user.splice(deleteindex,1);                               
console.log(user);
let deleteindexes= user.find(item=>item.id===3)
user.splice(deleteindexes,1);
console.log(user);
   
let fruit='apple';
let obj={
    [fruit]:true, 
    fruit: false
}
console.log(obj); 
console.log(obj.fruit);
let fruits = 'apple';
let bag = {
  [fruits + 'Computers']: 5 
};
console.log(bag);
console.log("age" in bag); 
console.log("apple" in bag); 
console.log("appleComputers" in bag);
let obje = {
    test: undefined
  };
  console.log(obje.test); 