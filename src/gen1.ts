// gen1.ts - Generics

function getTuple<T, U>(a : T, b: U) : [T,U] {

    console.log(`Creating Tuple for : ${ a } and ${ b }`);

    return [a,b];
}
console.log(`Results - 
    No and String - ${ getTuple<number, string>(34343," Microsoft") }
    Two Strings - ${ getTuple<string, string>("MSFT"," Microsoft") }
`);

