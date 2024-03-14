//number
let count: number = 69;
count = 999;


//string 
let string: string = "ngyen quan";

//boolean

let trueValue: boolean = true;
let falseVaue: boolean = false;


//use Boolean when check an exist value
let isCheck: boolean = Boolean(`${string}`);

console.log(">>> isCheck: ", isCheck);

//how to define a object 
let person:{
    age: number,
    name: string,
    address: string
}={
    age: 34,
    name: "nguyen hong quan",
    address: "ha tinh"
}

person["address"] = "string";