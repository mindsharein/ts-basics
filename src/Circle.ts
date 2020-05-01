// Circle.ts - Circle in Geomertry
const PIE : number = 3.14;

class Circle {
    
    constructor(private radius : number) {

    }

    public get Radius() : number {
        return this.radius;
    }

    public set Radius(r : number) {
        if(r > 0) {
            this.radius = r;
        }
    }

    public get Area() : number {
        return PIE * (this.radius * this.radius);
    }

    public get Circumference() : number {
        return 2.0 * PIE * this.radius;
    }

    public static createCircles(r : number, c: number) : Circle[] {
       let circles : Circle[] = [];

       for(let i=0;i<c;i++) {
           circles.push(new Circle(r));
       }

       return circles;
    }
}

let mycircles = Circle.createCircles(10,5);


// Lots of Circles of different sizes
let circles : Circle[] = [];

for(let i=1; i <= 20; i++) {
    circles.push(new Circle(i));
}
// Display all my circles
circles.forEach((c : Circle) => {
    console.log(`${ c.Radius }  ${ c.Area } ${ c.Circumference }`);
});