// rndnos.ts

let rndnos : number[] = [];

// Fill the array with random nos
for(let i=0;i < 100;i++) {
    let r : number = Math.random()*100;

    rndnos.push(parseFloat(r.toPrecision(2)));
}

// Write logic to Sort
rndnos = rndnos.sort(function(a,b) {
    return a - b;
})

// Print out the nos
for(let i=0;i < rndnos.length; i++) {
    console.log(rndnos[i]);
}

