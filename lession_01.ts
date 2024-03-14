
//typescript is  a static type
//can avoid one variable changed to a difference type

const message: string = "Nguyen Hong Quan";
console.log(message);

const sumTs = function(x: number, y: number ): number{
    return x + y;
}

console.log(sumTs(3, 4));


console.log(message.length)
console.log(message.toLocaleUpperCase())

//the way to difination a variable :type

let userName: string = "Nguyen";
userName = "Nguyen" + "1213";

console.log(">>> this is userName", userName);

const age: number = 12;

console.log(">>> information of studen:" , userName , age);

let schoolName: string;

schoolName = "Le Huu Trac"

//to decleration a array variable  
//using the type annotation to explain 
//what data type are containing inside this array
let studens: string[] = [
    "Nguyen Hong Quan",
    "Ha Tinh",
    "Work at Scc Company"
]

console.log(">>> Student Name",studens[0]); 
console.log(">>> Length student", studens.length);

//type reference
//auto assigne type for variable
let test: (string | number)[]  = ["quan", "nguyen", "hoai", "linh", 96];
console.log(test.push(123))
