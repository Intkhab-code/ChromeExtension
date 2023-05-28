//  craete a function to calculate sum of any 2 numbs 

// function sum(num1, num2) {
//     return num1 + num2;
// }
// let result = sum(8, 7);
// console.log(result)


// let array = [2,3,4,5,6,7]
// arraySum(array);

// function arraySum(arr){
//     let arrSum=0;
//     for(let i=0; i < arr.length; i++){
//         arrSum += arr[i];
//     }
//     console.log(arrSum);
// }


// const arraySum = (arr) => {
//     let arrSum=0;
//         for(let i=0; i < arr.length; i++){
//             arrSum += arr[i];
//         }
//         console.log(arrSum);
// }

// arraySum(array)

// const sumOfTwoNum = (a, b) => a + b
// console.log(sumOfTwoNum(8, 7))

// const multiplyTwoNum= (num1, num2) =>{
//     return num1 * num2
// } 
// console.log(multiplyTwoNum(8, 7))

// const multiplyTwoNum=(num1, num2) => num1*num2
// console.log(multiplyTwoNum(8, 10));
// function (){
//     console.log('hello');
// }

// IIFE

// (function (){
//     console.log('hello');
// })()

// (function (a, b){
//      return z= a+b;
// })(5,6)

// console.log(z);

// // anonymus function
// let x= function(){
//     console.log('hello');
// }
// x()
// var b=6;
// var b=9;
// console.log(b);

// let a=5;
// a=6;
// console.log(a);

// const z=5;
// z=6;
// console.log(z);

//Conditional Statement
// let a=6;

// if(a<10){
//     console.log('a is less than 10');
// }if(a==6){
//     console.log('a is equal to 6');
// }
// else{
//     console.log('a is greater than 10');
// }

// let b=4;
// switch (b) {
//     case 0:
//         console.log("result o");
//         break;

//     case 1:
//         console.log("result 1");
//         break
// case 2:
//     console.log("result 2");
//     break;

//     case 3:
//         console.log("result 3");
//         break;
//         default:
//             console.log("no result");
//         break;
// }

// // loop
// for(let i=0; i<=6; i++) {
//     console.log(i);
// }
// let a=0;
// while(true){
//     if(a===60){
//         break;
//     }
//     console.log(a);
//     a++;
// }

// let num=7;
// do{
//     console.log(num);
//     num++;
// }
// while(num<=10);

// for in and for of
// let arr="Bittu";
// for(let x of arr){
//     console.log(x);
// }

// console.log('hey')
const array = [ 11, 14,6,7]
// let goal = 13
// const twoSum = (array, goal) => {
//     let indexes = [];

//     for(let i = 0; i < array.length; i++){
//        for(let j = i + 1; j < array.length; j++){
//           if (array[i] + array[j] === goal) {
//         indexes.push(i);
//         indexes.push(j);
//           }
//        }
//     }
//     return indexes;
// }
// array.push(10)
// array.pop()
// array.shift()
// array.unshift(10)
// array[1]=5;
// const array2=[18,16];
// const array3=array2.concat(array);
// delete array[0]
// const array3=array.slice(1);
// console.log(array3.length);
// array.splice(0, 3);
// let fruits=["banana", "apple", "orange"]
// fruits.sort();
// fruits.reverse()
// console.log(fruits);
let arr1=[2,4,5,6];
let arr2=["mango","banana","apple","orange"];
// console.log([...arr1, ...arr2]);
let arr3=arr1.concat(arr2);
// console.log(arr3);
arr1.push(arr2)

// console.log(arr1[4][1]);   

// jsConversion
// let str="24516";
// let num=Number(str);
// console.log(typeof num);
// console.log(num);
// let bool= Boolean(str);
// console.log(bool);
// let num2=24536;
// let numToString= String(num2)
// console.log(numToString);
// console.log(typeof numToString);

// *************************Comparison operator**********************************************
// console.log(2==="2");
// console.log(+true);
// console.log(+"");
// let num1, num3;
// num1=num3=4;
// console.log(num1);
// console.log("2">1);
// console.log("hello"+" world")
// const name= "Alam";
// const age= 26;
// console.log(`may name is ${name} and age is ${age}`);
// const gameName= new String("Alam")
// console.log(gameName.toUpperCase());
// console.log(gameName[0]);
// console.log(gameName.charAt(2));
// // console.log(gameName.indexOf("l"));
// const nam= "  Alam ";
// const newString= name.substring(1,3);
// console.log(newString);
// console.log(nam.slice(-3,1));
// console.log(nam.trim())

// ****************Number and Math**************
// const num= 400;
// const balance = new Number(num);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// let hundred= 100000;
// console.log(hundred.toLocaleString('en-IN'));

// console.log(Math.abs(-4));


// ********************** Date ************************
let myCreateDate= new Date();
// console.log(myCreateDate.toLocaleDateString());
// var a=5;
// {
//     var a=10;
// }
// console.log(a);

// let a=5;
// console.log(a);
// {
//     let a=10;
//     console.log(a);
// }
// const a=5;
// console.log(a);
// {
//     const a=20;
//     console.log(a);
// }


// *************************Rest operator and IFFE***************************************
// (function ad(...a){
//    console.log(a[2]);
// })(5,6,7,9);

// let usernames=0;
// if(usernames){
//     console.log("we got a mail");
// }else{
//     console.log("we got nothing");
// }

// function name(...a) {
//     return a;
// }console.log(name(4,7,9,7,1));

// (function num(val1, val2,...a) {
//     return a;
// })num(4,7,9,7,1);


// *********************for in and for of*****************************************
const arr=[3,4,1,6,7]
// for (const num of arr) {
//     console.log(num);
// }

// array have also the value in key value paire  0:3, 1:4,
for (const num in arr) {
    // console.log(arr[num]);
}


// ******************************Maps****************************
const map= new Map();
map.set('name',"Intkhab")
map.set('roll',344)

// console.log(map);

for (const [key, value] of map) {
    //  console.log(key,'-', value);
        
    }

const lang=[ programmingLanguage={
    js: "javascript",
    java: "java",
    cpp: "C++"
}]
for (const nam in programmingLanguage) {
    // console.log(programmingLanguage[nam]);
}


// *******************************forEach****************************
lang.forEach((item) => {
    // console.log(item.js);
});

arr.forEach((item)=>{
    // console.log(item);
})

// when we store in a variable to forEach they return nothing
const a=arr.forEach((item)=>{
    // console.log(item);
    return item;
})
console.log(a);

function printMe(item) {
    // console.log(item);
    
}

arr.forEach(printMe)


// arr.forEach((item, index, arr) => console.log(item, index, arr)
// )


// ************************************************filter and reduce************************************************
const myNums=[2,4,3,6]
// const newNums=myNums.filter((item)=> item>2)
// console.log(newNums);

// const findingNum= myNums.filter((num)=>{
//     return num===4;
// })
// console.log(findingNum);

const findingNum= myNums.map((num)=>  num + 10 )
// console.log(findingNum);


const newNums=[];
myNums.forEach((num) =>{
   if (num>2){
        newNums.push(num)
   }
})
// console.log(newNums); 

// Reduce
const myTotal= myNums.reduce(( acc, curval ) =>{
     console.log(`acc ${acc} and curval ${curval}`);
     return acc+ curval;
},0)
console.log(myTotal);