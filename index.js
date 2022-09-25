


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


let text1 = "ab";
let text2 = "cd";
let result = text1.localeCompare(text2);

document.getElementById("demo").innerHTML = result;

