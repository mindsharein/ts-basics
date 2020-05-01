// array1.ts - Arrays in TS

let nos : number[] = [10,20,45,56,234,33,445];

let score : Array<number> = new Array<number>();

let emptyarray : number[] = [];

nos.push(340);
nos.push(675);
nos.push(123);

nos.pop();

for(let i=0; i < nos.length; i++) {
    console.log(nos[i]);
}

