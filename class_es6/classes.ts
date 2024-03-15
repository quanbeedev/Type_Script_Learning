//manage a student
//keyword manage status vatiable 
// public private properties static


class People{
    protected firstName: string;
    protected lastName: string;
    protected age: number;
    protected address: string;
    protected phoneNumber: string;


    constructor( firstName, lastName, age, address, phoneNumber ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    discribe():string{
        return `${this.firstName} ${this.lastName}`;
    }

}

class Studentt extends People{
    private idNumber: number;
    private classNumber: string;
    static range: number;

    constructor(firstName: string, lastNamne: string , age: number , address: string, phoneNumber, idNumber: number, classNumber: string, range: number){
        super(firstName, lastNamne, address, age, phoneNumber);
        this.idNumber = idNumber;
        this.classNumber = classNumber;
        range = range;
    } 

    get _age(){
        return this.age;
    }

    set currentAge(range: number){
        range = range
    }

    //overrite >>>> ghi de len method cua cha
    //the difference between overiteding and overloading 

    //overloading is refer to use the same method name but 
    //it can pass the difference parameter
    //base upon your parameter the programing will
    //choose the version the fit with those


    discribe(): string {
        return super.discribe() + `${this.firstName} + ${this.lastName}`
    }
    //overiteding refer to the inheritance 
    //when perform the same mothod name, parameter
}

let student1 = new Studentt("Quan", "Nguyen", 23, "Ha Tinh", 123455, 234, "12a3", 3);

console.log(">>>> this is studen1", student1);
console.log(">>>> this is studen1:", student1.discribe());