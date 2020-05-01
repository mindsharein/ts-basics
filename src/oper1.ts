// oper1.ts - Operators
let x : number = 97;
let y : number = 3;

let r : number = 0;

// Math ops
// + - / * %  ++ -- 

r = x % y;

console.log(`Division: ${x } / ${ y } = ${ x/y }`);
console.log(`Remainder (Modulo): ${x } % ${ y } = ${ x % y }`);

// Relational Operators
// > < >= <= != == ===

// Boolean Operators
// and - &&   not - !  or - ||

// Assignment
// = += -= /= *=

// Sign operators -

x = -10;

// Bitwise
// AND - &, OR - |, NOT - ~, XOR - ^, LEFT SHIFT - <<, RIGHT SHIFT - >>, 
// RIGHT SHIFT WITH ZERO - >>>

let a = 0b01;
let b = 0b0;

let c = a | b;

console.log('Bitwise and op of 1 and 0 binary : ' + c);

let z = 0b101010;

z = z << 1;

console.log('Left shifted 101010 is ' + z.toString());

