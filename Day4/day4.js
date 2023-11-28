//function testfunction(){
   /* console.log("Hello");
    console.log("World");
    console.log("let's  begin:");  //  ->  let's  begin:
    console.log("Hello");  //  ->  Hello
    console.log("World");  //  ->  World
    console.log("and  again:");  //  ->  and  again:
    console.log("Hello");  //  ->  Hello
    console.log("World");  //  ->  World
    console.log("and  once  more:");  //  ->  and  once  more:
    console.log("Hello");  //  ->  Hello
    console.log("World");  //  ->  World*/
//}


/*var  globalGreeting  =  "Good  ";
   
 function  testFunction()  {
          var  localGreeting  =  "Morning  ";    
          console.log("function:");

          console.log(globalGreeting);
         console.log(localGreeting);
 }

    
 testFunction();

    
 console.log("main  program:");
 console.log(globalGreeting);
 console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined*/

 /*let  counter  =  100;
  console.log(counter);  //  ->  100
  {
        counter  =  200;
         console.log(counter);  //  ->  200
  }
  console.log(counter);  //  ->  200*/



  /*var  counter  =  100; 
function  testFunction()  {
         var  counter  =  200;    
         console.log(counter);
         }
   
 console.log(counter);  //  ->  100
 testFunction();  //  ->  200
 console.log(counter);  //  ->  100*/

// Prices and quantities of rose
const rosePrice = 8;
const roseQuantity = 20;

// Prices and quantities of lily
const lilyPrice = 10;
const lilyQuantity = 30;

// Prices and quantities of tulip
const tulipPrice = 2;
const tulipQuantity = 120;

// Total price for rose, lily, and tulip
const totalRosePrice = rosePrice * roseQuantity;
const totalLilyPrice = lilyPrice * lilyQuantity;
const totalTulipPrice = tulipPrice * tulipQuantity;

// Total price of all flowers
const Total = totalRosePrice + totalLilyPrice + totalTulipPrice;

console.log(rosePrice , roseQuantity, totalRosePrice);

console.log(lilyPrice , lilyQuantity, totalLilyPrice);

console.log(tulipPrice , tulipQuantity, totalTulipPrice);

console.log(Total);


