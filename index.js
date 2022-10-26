


// console.log("inheritance");

// class employee {
//     constructor(givenname, givenexperience, givendivision){
//         this.name = givenname;
    
//         this.experience =givenexperience;
    
//         this.division = givendivision;

//     }

// }

// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 











// for(var i = 1; i<=100; i++){
   
// var prime = true;
//     for(var j = 2; j<=100; j++){
//         if(i%j==0 && i!==j){

//        prime = false ;
//         }
//     }
//     if(prime===true){
//      console.log(i) 
//     }
   
// }










// let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 

//  let arr2 = arr.filter((num)=>{
//     for(var j = 2; j<=100; j++){
    
//       if(num%j==0 && num!==j){
//        return false;
//       }
     
//     }
//      return true;
//     })

// console.log(arr2)











// split method of string method

// let text = "abcdefg";
// const myArray = text.split(",");
// document.getElementById("demo").innerHTML = myArray;
// console.log(myArray)









// // getting number from user and finding prime number btween it
// const form = document.querySelector(".grocery-form");
// form.addEventListener("submit", func);


// function func(){
//     let num = document.getElementById("demo");
//     let num2 = num.value;
    
// let str = num2.toString().split("")
// let arr=[];
//      for(var i=0; i<=str.length-1; i++){
//       var number = parseInt(str[i])
//           arr.push(number);
//      }

//        let arr2 = arr.filter((num)=>{

//              for(var j=2; j<=arr.length; j++){
//               if(num%j==0 && num!==j){
//                 return false;
//               }
//              }
//              return true;
//        })
//        document.getElementById("demo1").innerHTML=`<p>${arr2}</p>`;
    

// }












// generating random numbers from an arrray

// let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 
//   const func = ()=>{
//  let INDEX =    Math.floor(Math.random()* (arr.length-1))
//  document.getElementById("demo1").innerHTML=arr[INDEX];

//   }












  //match method of string methods

// let text = "The rain in SPAIN stays mainly in the plain"; 
// let t2 = text.match(/plain/g)
// t3 = t2.toString();
// console.log(t3)

// fruits = ["Banana", "Orange", "Apple", "Mango"];



//              for(var i=0; i<=fruits.length; i++ ){
//                 var str = fruits[i].toString();
//                if(str.match(/n/g)){
//                 console.log(str)
//                }
                
//              }
             
            










//sum of all erlements in an array


// const num= [45, 4, 9, 16, 25];
// let total= 0;

// for(var i=0; i<num.length; i++){
//   total += num[i]

// }
// console.log(total)











// fruits = ["Banana", "Orange", "Apple", "Mango"];


// const func =()=>{
//              let x=document.getElementById("demo").value.toLowerCase();

       
//             const match= fruits.filter((fruit)=>{
//                return  fruit.toLowerCase().includes(x);
//             })
//             document.getElementById("demo1").innerHTML=match;
            
//             };










//////////////////////////////////////////////////////////////////
//string method prototype 

// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);
// document.getElementById("demo").innerHTML = fred.salary;




// console.log("inheritance");

// class employee {
//     constructor(givenname, givenexperience, givendivision){
//         this.name = givenname;
    
//         this.experience =givenexperience;
    
//         this.division = givendivision;

//     }

// }

// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 











// for(var i = 1; i<=100; i++){
   
// var prime = true;
//     for(var j = 2; j<=100; j++){
//         if(i%j==0 && i!==j){

//        prime = false ;
//         }
//     }
//     if(prime===true){
//      console.log(i) 
//     }
   
// }













// let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 

//  let arr2 = arr.filter((num)=>{
//     for(var j = 2; j<=100; j++){
    
//       if(num%j==0 && num!==j){
//        return false;
//       }
     
//     }
//      return true;
//     })

// console.log(arr2)









// split method of string method

// let text = "abcdefg";
// const myArray = text.split(",");
// document.getElementById("demo").innerHTML = myArray;
// console.log(myArray)













// // getting number from user and finding prime number btween it
// const form = document.querySelector(".grocery-form");
// form.addEventListener("submit", func);


// function func(){
//     let num = document.getElementById("demo");
//     let num2 = num.value;
    
// let str = num2.toString().split("")
// let arr=[];
//      for(var i=0; i<=str.length-1; i++){
//       var number = parseInt(str[i])
//           arr.push(number);
//      }

//        let arr2 = arr.filter((num)=>{

//              for(var j=2; j<=arr.length; j++){
//               if(num%j==0 && num!==j){
//                 return false;
//               }
//              }
//              return true;
//        })
//        document.getElementById("demo1").innerHTML=`<p>${arr2}</p>`;
    

// }












// generating random numbers from an arrray

// let arr = [];

//  for(var i = 1; i<=100; i++){
//     arr.push(i);
//  }
 
//   const func = ()=>{
//  let INDEX =    Math.floor(Math.random()* (arr.length-1))
//  document.getElementById("demo1").innerHTML=arr[INDEX];

//   }











  //match method of string methods

// let text = "The rain in SPAIN stays mainly in the plain"; 
// let t2 = text.match(/plain/g)
// t3 = t2.toString();
// console.log(t3)

// fruits = ["Banana", "Orange", "Apple", "Mango"];



//              for(var i=0; i<=fruits.length; i++ ){
//                 var str = fruits[i].toString();
//                if(str.match(/n/g)){
//                 console.log(str)
//                }
                
//              }
             
            











//sum of all erlements in an array


// const num= [45, 4, 9, 16, 25];
// let total= 0;

// for(var i=0; i<num.length; i++){
//   total += num[i]

// }
// console.log(total)



// fruits = ["Banana", "Orange", "Apple", "Mango"];


// const func =()=>{
//              let x=document.getElementById("demo").value.toLowerCase();

       
//             const match= fruits.filter((fruit)=>{
//                return  fruit.toLowerCase().includes(x);
//             })
//             document.getElementById("demo1").innerHTML=match;
            
//             };




//////////////////////////////////////////////////////////////////
//string method prototype 

// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);
// document.getElementById("demo").innerHTML = fred.salary;











////////////////////////////////////////
//localecompare method of string


// let text1 = "ab";
// let text2 = "cd";
// let result = text1.localeCompare(text2);

// document.getElementById("demo").innerHTML = result;











/////////////////////////////////////////////////////
//currying in javascript
//currying means functions within in a functions;

//like
// function sum(a){

//   return function(b){
//     return function(c){
//       return function(d){
//         console.log(a,b,c,d)
//       } 
//     } 
//   }  

// }

// // how to write it in a single line of code.
// const sum=(a)=>(b)=>(c)=>(d)=>console.log(a,b,c,d);

// sum(10)(9)(7)(5); 








// how to find factorial of Number


//   let num = 5;
  
  
//     for(let i = num; i>1;  ){
     
     
//         i=i-1;
//           var fact= num*i;
//          num = fact; 
         
        
//     }
//     console.log(fact);


//     /////////////////////////////////
//     //another method

// for( var fact=1; num>1; num--){


//   fact=fact*num;
// }
   
// console.log(fact);
   











//////////////////////////////////////////////////////////////




//////////////////////////////////////////////
// const num= [45, 4, 9, 16, 25];

// const sum = num.reduce((accum,curr)=>{
//   return accum+curr
// })

// console.log(sum);
// let avg=sum/num.length; 
// console.log(avg);












/////////////////////////////////////////////////////////////////////
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           resolve("Value 1");
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           // resolve("Value 2");
//           reject(new Error("Error"));
//   }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           resolve("Value 3");
//   }, 3000);
// });

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

// let promise_all= Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//   console.log(value)
// })

// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.any([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3])
// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value) => {
//   console.log(value)
// })












////////////////////////////////////////////////async await 


// const func=async ()=>{
//   const  func2=async ()=>{
//    return new Promise((res,rej)=>{
//          res('resoled')
//    })

// }
// setTimeout(func2,4000);

//   console.log(await func2()) 
  
// }
// func();


////////////////////////////////////////////////////localstorage


////////////////////////////prototype

// let a={
//   name:"muneeb",
//   gender:"male"

// }

// let b={
//   rollno:"202458"
// }

// a.__proto__=b;
// // let clg=a.rollno
// // console.log(clg);
// b.__proto__={
//   name2:"mirza"
// }

// let clg= a.name2;
// console.log(clg)
// here a protype is b and b proyptype is{
  // name2:"mirza"
// }
//protoype chain



///////////////////////////////////////////////////classes and objects
//with constructor
class railwayform{
 constructor(givenname){
   this.name=givenname
 }



  submit(){
    alert(this.name+""+'your tickets are booked')

  }
  //  fill(givenname){
  //   this.name=givenname
  //  }
}



const form = new railwayform('muneeb');
const form2 = new railwayform('defaultxd');


form.submit();
form2.submit();