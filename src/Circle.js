// Circle.ts - Circle in Geomertry
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Object.defineProperty(Circle.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (r) {
            if (r > 0) {
                this.radius = r;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "Area", {
        get: function () {
            return (22 / 7) * (this.radius * this.radius);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "Circumference", {
        get: function () {
            return 2.0 * (22 / 7) * this.radius;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}());
// Lots of Circles of different sizes
var circles = [];
for (var i = 1; i <= 20; i++) {
    circles.push(new Circle(i));
}
// Display all my circles
circles.forEach(function (c) {
    console.log(c.Radius + "  " + c.Area + " " + c.Circumference);
});
