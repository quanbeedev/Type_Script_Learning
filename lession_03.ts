//void : return any type => just return undefined
//void represent for annotation this function no return any type of data


const sum = (a: number , b: number) :number =>  {
    return a + b;
}

//to inform that this function no return any data
const handleLogs = (message: string): void =>{
    console.log(">>> message", message)
}

//never keyworld
//to inform that function never return data

let handleException = (errorMessage: string) : never => {
    throw Error(errorMessage);
}

// handleException(">>> Server has an error.");


//union type
//


let addNumberOrString = (a: number | string , b: number | string): number | string =>{
    if( typeof a === "number" && typeof b === "number"){
        return a + b
    }

    if( typeof a === "string" && typeof b === "string"){
        return a.concat(b)
    }

   return handleException(">>> Internal server has an error.")
}


console.log(">>> Sum of 1, 3 = ",addNumberOrString(1,3));
console.log(">>> String concat = ", addNumberOrString("Nguyen ", "Hong Quan"));


//alias
//name = string | number | boolean | object