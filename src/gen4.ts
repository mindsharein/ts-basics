// gen4.ts - Generics in Classes

class Calculator<T> {
    public add : (x : T, y : T) => T;

    public mult : (x : T, y: T) => T;
}


let calc1 = new Calculator<number>();

calc1.add = function(x, y ) {
    return x + y;
}

let calc2 = new Calculator<boolean>();

calc1.add = function(x, y) {
    return x + y;
}
