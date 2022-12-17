class Shapes {
    static count = 0;
    constructor(height, width) {
        this.height = height;
        this.width = width;
        Shapes.count++;
    }

    static getCount() {
        return Shapes.count;
    }
}

Shapes.prototype.toString = function () {
    console.log(`The perimeter of the ${this.name} is: ${this.perimeter()} and the area is: ${this.area()}`);
};

class Rectangle extends Shapes {
    constructor(height, width) {
        super(height, width);
        this.name = "Rectangle";
    }
}

Rectangle.prototype.perimeter = function () {
    return 2 * (this.height + this.width);
};

Rectangle.prototype.area = function () {
    return this.height * this.width;
};

class Square extends Shapes {
    constructor(side) {
        super(null, null);
        this.name = "Square";
        this.side = side;
    }
}

Square.prototype.perimeter = function () {
    return 4 * this.side;
};

Square.prototype.area = function () {
    return this.side * this.side;
};

class Circle extends Shapes {
    constructor(r) {
        super(null, null);
        this.name = "Circle";
        this.r = r;
    }
}

Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.r;
};

Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.r, 2);
};

let rectangleOne = new Rectangle(10, 20);
let squareOne = new Square(10);
let circleOne = new Circle(5);
