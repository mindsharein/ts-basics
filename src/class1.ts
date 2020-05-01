// class1.ts - Class example
class Rectangle {
    // Constructor
    constructor(public id : number, private length: number, 
        private breadth : number) {
    }

    // Accessors Fuctions
    public get Length() : number {
        return this.length;
    }
    public set Length(l : number) {
        if(l > 0) {
            this.length = l;
        }
    }

    public get Breadth() : number {
        return this.breadth;
    }

    public set Breadth(b : number) {
        if(b > 0) {
            this.breadth = b;
        }
    }

    public get Area() : number {
        return this.length * this.breadth;
    }
}

let r1 : Rectangle = new Rectangle(8745, 10, 5);

r1.Length = 20
r1.Breadth = 9;

console.log(`Rectangle Info
    ID     : ${ r1.id }
    Length : ${ r1.Length }
    Breadth: ${ r1.Breadth }
    Area : ${ r1.Area }
`);