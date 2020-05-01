// swap.ts - Exchange the value of two variables

let n1 : number = 200;
let n2 : number = 400;

let temp : number = 200;

console.log(`Before swap : n1: ${ n1 } and n2 : ${ n2 }`);

// Swap here
temp = n1;
n1 = n2;
n2 = temp;

console.log(`After swap : n1: ${ n1 } and n2 : ${ n2 }`)
