export enum Color {
    Red = 1,
    Blue,
    Green
}

let fg : Color = Color.Blue;
let fgColor : string = Color[fg];

console.log(`Color : ${ fg } - ${ fgColor }`);

export enum DataMode {
    Ajax  = 1,
    Mock,
    GraphQL
};

let mode : DataMode = DataMode.Mock;

console.log(`mode : ${ mode }`);



