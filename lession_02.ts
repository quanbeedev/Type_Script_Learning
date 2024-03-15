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



let userInformation: {
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    lastUpdate: string,
    vip: boolean
}={
    id: 1,
    userName: "Nguyen Hong Quan",
    firstName: "Nguyen",
    lastName: "Quan",
    lastUpdate: "2024",
    vip: true
}

//array
let dataResponse: (string | number)[] = ["quan"];

console.log(dataResponse.push("Nguyen"));
console.log(dataResponse.push(1));
console.log(dataResponse.push("Quan"));


//array containing object
interface Student {
    name: string;
    age: number;
  }
  
  let arrayStudent: Student[] = [];

//tuple
let arrary: [string, string] = ["quan", "quan"];
let array2: [string, string, string?] = ["quan1", "quan3"];

arrayStudent[0] = {
    age: 23,
    name: "linh",
}

console.log(">>> studens", arrayStudent , arrayStudent.length)



//defination the array of bike

interface Bike{
    id: number,
    color: string,
    name ?: string,
    size ?: string
}

let bikes: Bike[] = [];

bikes.push({
    id: 12,
    color: "black"
})

console.log(bikes);