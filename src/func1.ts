// func1.ts - First function in TS
let num1, num2 : number = 0;

num1  = 200;
num2 = 300;

let result = Multiply(num1, num2);

console.log(`Sum ${ num1 } plus ${ num2 } = ${ result }`);

result = Multiply(300,456);

function Multiply(n1 : number, n2 : number) : number {
    return n1 + n2;
}

// Function with No arguments and no return types
function Greet() : void {
    console.log("Ola!!");
}

function GetCurrentDate() : Date {
    return new Date();
}

function ShowMessage(message : string) : void {
    console.log(message);
}

let d = GetCurrentDate();
console.log(d.toDateString());
