//const arr =[]   //empty array //using literals

//let arr =[]; //using constructor




//let arr=[1,2,3,4,5,6,7];
//console.log(arr);


//push,pull,shift,unshift.
//let arr =[1,"mantu",2,3,54,5,{id:1, name:"mantu"},7]
//console.log(arr);
//console.log(arr[3]);


//let  values=["a","e","i","o","u"];
//values[10]=12;
//values.push(1);
//console.log (values);
//push add pop removes (shift remove 1st  and unshift removes from end )


/*function countstring (arr){
    let count = 0;
    for (let i=0;i<arr.lenght;i++){
        const element = arr[i];
        if (typeof (element)==="number")count++;

    }
    return count;
}
const result = countstring(["a","b","c",1,3,5]);
console.log(result);
*/


let arr=[1,2,3,4,4];

//sum and every

const value1=arr.some (element => element>2);
const value2=arr.every (element => element>2);
console.log(value1,value2);
//some and every are 2 functions returns always boolean values and takes call back function

