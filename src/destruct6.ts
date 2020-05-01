// Destruct.ts

let mat : number[] = [12,34,5,
                      56,67,78,
                      777,55,55,
                      5544,44,555];

// Write code to display this 3x3 using destructuring

let [x1, x2, x3] : [number, number, number] = [0,0,0];

for(let i=0; i < mat.length; i+=3) {
    [x1, x2, x3] = [mat[i], mat[i+1], mat[i+2]];

    console.log(`${ x1 }    ${ x2 }     ${ x3 }`);
}