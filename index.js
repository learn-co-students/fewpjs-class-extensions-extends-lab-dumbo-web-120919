// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]

        if ( (a + b) > c && (b + c) > a && (a + c) > b ) {
            return true
        } else {
            return false
        }

    }
}

class Square extends Polygon {
    get isValid() {
        for (let i = 0; i < this.sides.length; i++) {
            return this.sides[i] === this.sides[i + 1]
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}