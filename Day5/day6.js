
//Data types
/*let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
 let  name  =  "Alice";
 console.log(typeof  name);  //  ->  string
 console.log(typeof  "Bob");  //  ->  string
   
 let  typeOfYear  =  typeof  year;
 console.log(typeOfYear);  //  ->  number
 console.log(typeof  typeOfYear);  //  ->  string*/

    //Boolean
    let  isDataValid  =  true;
    let  isStringTooLong  =  false;
    let  isGameOver  =  false;
    continueLoop  =  true;

    console.log(false);  //  ->  false
    console.log(typeof  false);  //  ->  boolean
    console.log(isDataValid);  //  ->  true
    console.log(typeof  isDataValid);  //  ->  boolean

        //Number
        const  year  =  1991;
        let  delayInSeconds  =  0.00016;
        let  area  =  (16  *  3.14);
        let  halfArea  =  area  /  2;
        
        console.log(year);  //  ->  1991;
        console.log(typeof  year);  //  ->  number;

        let a = 10;
        let b = 0 * 10;
        let c = 0o10;
        let d = 0b10;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);

        let x = 9e3;
        let y = 123e-5;
        console.log(x);
        console.log(y);

        //BigInt
        let  big  =  1234567890000000000000n;
        let  big2  =  1n;
        
        console.log(big);  //  ->  1234567890000000000000n
        console.log(typeof  big);  //  ->  bigint
        
        console.log(big2);  //  ->  1n
        console.log(7n  /  4n);  //  ->  1n
