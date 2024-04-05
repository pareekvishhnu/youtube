// var a = document.querySelector("h1");
// a.innerHTML = "cssd";
// a.style.color = "red";
// a.style.backgroundColor = "black"
// a.addEventListener("click",function(){
//  a.innerHTML = "badle gya hu ex ke tera"
//  a.style.color = "yellow"
//  a.style.backgroundColor = "black"
// })

// var circle = document.querySelector(".circle")
// var btn = document.querySelector("button")

// var go = 0;   

// btn.addEventListener("click",function(){
//     if(go == 0){
//         circle.style.backgroundColor = "red";
//         console.log("true");
//         go = 1
//     }else{
//         circle.style.backgroundColor = "transparent";
//         console.log("false");
//         go = 0 
//     }
  
// }) 

// var sto = document.querySelector("h5")

// var add = document.querySelector("#Add")


// add.addEventListener("click",function(){
//     sto.innerHTML  = "Friends"
//     sto.style.color = "green"
// })

// var to = document.querySelector("h5")

// var Remove = document.querySelector("#Remove")

// Remove.addEventListener("click",function(){
//     to.innerHTML = "Stranger";
//     to.style.color = "red";
// })

// var to = document.querySelector("h5")

// var add = document.querySelector("#Add")
//  var stu = 0

// add.addEventListener("click",function(){
//     if(stu == 0){
//         to.innerHTML = "Friends";
//         to.style.color = "green";
//         stu = 1
//     }else{
//         to.innerHTML = "Stranger";
//         to.style.color = "green";
//         stu = 0
//     }
  
// })



// var take = document.querySelector("#container")
 
// var like = document.querySelector("i")

// take.addEventListener("dblclick",function(){
//     like.style.transform = 'translate(-50%, -50%) scale(1)'
//     setTimeout(function(){
//         like.style.transform = 'translate(-50%, -50%) scale(0)'
//     },3000)
// }) 

// var flag = document.querySelector("h5")

// var gal = document.querySelector("#Add")

//     var a = 0;

// gal.addEventListener("click",function(){
 
//    if( a == 0){
//     flag.innerHTML = "friend"
//     flag.style.color = "green"
//     a = 1;
//    }else{
//     flag.innerHTML = "strange"
//     flag.style.color = "red"
//     a = 0;
//    }

// })


 
// var dol = document.querySelector("h5")

// var fol = document.querySelector("#Add")

// var a = 0;

// fol.addEventListener("click",function(){
//     if(a == 0){
//     dol.innerHTML = "Friend"
//     dol.style.color = "blue"
//     a = 1;
//     }else{
//         dol.innerHTML = "Unknowe"
//         dol.style.color = "red"
//         a = 0;  
//     }
// })

// =========================================================
            //  =====================================================

    
//    word vs keyword ( qustion )

// vishnu = word
// is =     word
// good =   word
// man  =   word

// if    =   keyword   js meaning
// else  =   keyword   js meaning
// var   =   keyword   js meaning
// let   =   keyword   js meaning
// const =   keyword   js meaning




// ===============================hoisting
//                     ===========================

// console.log(a);

// var a = 7;

// ===================type in js =========
//                 ==============================


// reference = [] , () , {} ; 

// var a = [1, 2, 3, 4];
// var b = a;
// me change (a) me kroga to (b) me automatic change hoga !

// b.pop();

// primitive = not come
// Reference = [ come ] 

// ======================for while loop       
//                    ==============================

// for(var i= 0; i<16; i++){
//     console.log(i)
// }

// for(var z = 25; z<51; z++){
//     console.log(z)
// }

// var a = 20;
// while(a < 30){
//     a++;
// }

// var a = 11;
// while(a < 33){
//     a++;
// }




// function generateOTP(length){
//     let otp = "";
//     for(let i = 0; i < length; i++){
//         otp += Math.floor(Math.random() * 10).toString();
//     }
//     return otp;
// }

// console.log(generateOTP(4));


// ============================arrow function
//                       ============================

// arrrow function
// basic fat arrrow function imp  ()=>{}
// fat arrow function with one parameter
// fat arrow function implicit return

// basic fat arrrow function ====

// () = fat , => = arrow , function = {}

// var a = ()=>{}

// arrow function with one parameter ===


// var b = (parameter)=>{}
// console.log(b);

// fat arrow function implicit return=====

// var c = ()=>87872;
// console.log(c());


// template literals backtick ===

// console.log(`ty ${3*24232} and ${183*34}`)

// deafault parameter  =====

// function abcd(a=1212, b=232, c=1321){
//     console.log(a, b, c)
// }

// abcd(1,2,1);
// abcd(4,2,1);
// abcd(1);

// rest and ......spread  ====

// var a = [1, 2,3, 4, 5, 6,7];
// var b = [...a];

// ===================================javascrpit advance ============
//                         ==========================


// =======================execution context
//                    ================================

// 1. varibales
// 2. function inside that parent function

// function abcd(){
//     var a = 12;
//     function def(){
//         var b = 12;
//     }
// }

// =======================lexical enviroment
//                    ================================

// function abcd(){   = abcd con't use def eliment
//                    = abcd use use function
//     var a = 12;
//     function def(){
//         var b = 12;
//     }
// }


// ==========================for-Each=====
//                      ===========================

// var a = [1, 2, 3, 4, 5];
// var b = [...a];

// b.pop();


// var obj = [1,2,3,4,5];
// var cobj = [...obj];

// cobj.pop();

// if("manoj"){
//     console.log("hey");
// }else{
//     console.log("hello");
// }

// var a = [1,2,3,4,5];
// a.forEach(function(val){
//     console.log(val)
// })
   
// var a = [1,2,3,4,5];

// a.forEach(function(val){
//    console.log(val+2)
// })


// ==========================for-in=
//                      ===========================
// var key = {
//     name: "vishnu",
//     class: "21",
//     village: "sikar"
// }

// for(var data in key){
//     console.log(data, key[data]);
// }

// var key = {
//         name: "vishnu",
//         class: "21",
//         village: "sikar"
//     }
    
//     for(var data in key){
//         console.log( key[data]);
//     }

// var key = {
//     name: "vishnu",
//     class: "21",
//     village: "sikar"
// }
 
// for(var data in key){
//     console.log( data);
// }

// ==========================do - while
//                      ===========================

// var a = 34;
// do{
//     console.log("hey");
//     a++
// }
// while(a < 45);

// ===================callbackfunctions
//                   ==============================

// setTimeout(function(){
//     console.log("2 second")
// }, 5000);

// =======================what is first class function
//                    ===========================================
//   again
// function abcd(a){
//    a();
// }

// abcd(function(){console.log("hello")})

// =======================how arrays are made behind the scenes
//                    ===========================================

// var arr = [1,2,3,45]; typeof[check inspact]
// arr[-1] = 2;

// var arr = [1,2,3,45]; typeof{check inspact}
// arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 45
// }

// =====================how to delete object prop
//                  =====================================

// var key = {
//     name: "vishnu",
//     class: "12",
//     city: "sikar"
// }

// delete key.city;


// var  a = {
//     name: "vishnu",
//     class: "12",
//     city: "sikar"
// }
// delete a.class;

// ========
//   ==========
//            Again
//        =========
//           ========

//  function abc(){
//     for(let a = 1; a < 10; a++){
//         console.log(a);
//     }
//     console.log(a);
// }
// abc();
  
// ======================master advance
//                    =============================

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

//  ====================constructor function
//                       ============================

// function sea(){
//     this.name = "rocky";
//     this.class = 12;
//     this.city = "sikar"
//     this.vilage = "patoda"
// }

// var ew = new sea();

// function col(color){
//     this.name = "rocky";
//      this.class = 12;
//     this.city = "sikar"
//      this.vilage = "patoda"
//  }

//  var redbt = new col("yellow");
//  var redbt = new col("pink");


  