// func4.ts - Passing Arrays - Rest Parameter 

function Avg(n1 : number, n2: number, ...r : number[]) {
    let s = n1 + n2;

    for(let i=0; i < r.length; i++) {
        s += r[i];
    }

    return s / (r.length + 2);
}

let nos : number[] = [30,56,45,244,5,33,78];

console.log(`Average : ${ Avg(10,20,...nos) }`);