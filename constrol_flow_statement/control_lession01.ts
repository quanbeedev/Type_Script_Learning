let age2: number = 25;

if( age2 === 25){
    console.log(">>> age was maped");
};

//functional parameter
//this example bellow is us can achieve add the optional paramerter in argument 
let sumxyz =  (x: number, y: number, z?: number) => {
    if( !z ){
        return x + y;
    }
    return x + y + z;
}

console.log(">>> sum of that function is: ", sumxyz(1,2));
console.log(">>> sum of that function is: ", sumxyz(5,2,9));



//rest ...rest: number[];
//in one function just only have one rest in a function

/**
 * This function 
 * 
 * @param rest 
 * @returns {number}
 */
let restSum = (...rest: number[]): number =>{
    let result = 0;
    console.log(rest);

    return result;
}
console.log(">>> function rest: ", restSum(10,23,83))


let restSum2 = (n: number , ...rest: number[]):  number[] => {
    return rest.map((num) => n * num);
}

console.log(">>> function rest2: ", restSum2(2,10,23,83))

//overloading

function sum4(a: number, b: number): number;
function sum4(a: string, b: string): string;

function sum4(a: any , b: any){
    return a + b;
}

console.log(">>> overloading function: ", sum4(1,2))
console.log(">>> overloading function: ", sum4("quan", "nguye"));


//class

//public
//private
//protected

class Person{
    public ssn: string;
    public firstName: string;
    protected lastname: string;

    constructor(ssn: string, firstName: string, lastName: string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastname = lastName;
    }

    getfullName(): string {
        return `${this.firstName} ${this.lastname}`;
    }

}

let quan = new Person("1234", "Quan", "Nguyen");

console.log(">>> fullName is: ", quan.getfullName());


class Employee extends Person{
    private id: string;
    private experienceTime: string;

    constructor(ssn: string, firstName: string, lastName: string, id: string, experienceTime: string){
        super(ssn, firstName, lastName);
        this.id = id;
        this.experienceTime= experienceTime;
    }

}



