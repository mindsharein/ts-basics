// destruct2.ts - Spred operator in Destructuring

let nos1 : number[] = [78,45.5];
let nos2 : number[] = [5,2,3];

let [x, y, z, p, q] = [...nos1, ...nos2];


console.log(`Variables values -
    x:${ x} y:${ y} z:${ z} p:${ p}
`);

[z, p ] = [x, y];   // Exchanging values

console.log(`Variables values -
    x:${ x} y:${ y} z:${ z} p:${ p}
`);