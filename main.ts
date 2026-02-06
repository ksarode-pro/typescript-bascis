//TS is a superset of javascript which adds strict type checking
//TS checks all types at compile time which reduces possibilities of runtime errors.
//TypeScript uses official TypeScript compiler (tsc), which transpiles TypeScript code into JavaScript.
//TS runs anywhere where JS runs.

//how to install typescript?
//npm install -g typescript //installs TS globally 
//tsc -v //checks version

//types

//1. boolean 
    let isAcive: boolean = true;
//2. number
    let decimal: number = 6;
    let hex: number = 0xf00d;       // Hexadecimal
    let binary: number = 0b1010;     // Binary
    let octal: number = 0o744;      // Octal
    let float: number = 3.14;      // Floating point
//3. string - can use single quotes ('), double quotes ("), or backticks (`)
    let myName: string = "Kiran";
    let fullName: string = 'John Doe';
    let sentence: string = `Hello, my name is ${fullName} and I'll be ${30} next year.`;
//4. BigInt - Use the n suffix to create a bigint.
    const bigNumber: bigint = 9007199254740991n;
    const hugeNumber = BigInt(9007199254740991); // Alternative syntax
//5. Symbol - Useful for creating unique property keys and constants.
    const uniqueKey: symbol = Symbol('description');
    const obj = {
    [uniqueKey]: 'This is a unique property'
    };
    console.log(obj[uniqueKey]); // "This is a unique property"




function Add(x: number, y: number) : number
{
    return x + y;
}

console.log(Add(5,2));