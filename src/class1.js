// class1.ts - Class example
var Rectangle = /** @class */ (function () {
    // Constructor
    function Rectangle(id, length, breadth) {
        this.id = id;
        this.length = length;
        this.breadth = breadth;
    }
    Object.defineProperty(Rectangle.prototype, "Length", {
        // Accessors Fuctions
        get: function () {
            return this.length;
        },
        set: function (l) {
            if (l > 0) {
                this.length = l;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Breadth", {
        get: function () {
            return this.breadth;
        },
        set: function (b) {
            if (b > 0) {
                this.breadth = b;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Area", {
        get: function () {
            return this.length * this.breadth;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var r1 = new Rectangle(8745, 10, 5);
r1.Length = 20;
r1.Breadth = 9;
console.log("Rectangle Info\n    ID     : " + r1.id + "\n    Length : " + r1.Length + "\n    Breadth: " + r1.Breadth + "\n    Area : " + r1.Area + "\n");
