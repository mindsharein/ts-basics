// Destruct3.ts - Object Arrays

let [e, f] = [12, 13];

let [g, ...nos3] = [100,200,300,400,500];

let [,s1,,s2] = [3,4,5,6];

let [s3,s4] = [4,5,6,6];

console.log(`value of g : ${ g }`);

console.log(`s1 : ${ s1} and S2 : ${ s2}`);

// nos3 array
for(let i=0; i< nos3.length; i++) {
    console.log(`${ nos3[i] }`);
}

