// Two Dimensional Array - Printing
let matrix : number[][] = [
    [ 12, 34, 85],
    [ 85, 74, 96],
    [ 78, 52, 65]
];

console.log(`Length: ${ matrix.length }`);

// Print the Matrix on the screen
for(let i=0; i< matrix.length; i++) {
    let output : string = "";

    for(let j=0; j < matrix[i].length; j++) {
        output += matrix[i][j] + "\t\t";
    }

    console.log(output);
}