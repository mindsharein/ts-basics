// destruct5.ts - Destructuring in function params

let scores : number[] = [23,45,43,12];

let [param1, param2] = scores;


console.log(`Sum : ${ AddScore([param1, param2]) } `);


function AddScore([x, y] : [number, number]) {
    return x + y;
}

function ReturnTuple(nos3 : number[]) : [number,number] {
    let retval : [number,number] = [nos3[0], nos3[1]];

    return retval;
}