// Arrow Functions in TS

let Calc = (x : number, y : number) : number => {
    return x + y;
}

let funcx = () => {
    console.log("you just called funcx");
    console.log("this is inside a => function");
}

let add = (x : number, y : number) : number => x + y; 

let rnd = () : number => Math.random();

console.log(rnd());
