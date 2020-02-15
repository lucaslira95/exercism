//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(a, b, c) {
        this.sides = [a, b, c].sort();
    }

    isTriangle() {
        if (this.sides[0] > 0 && this.sides[1] > 0 && this.sides[2] > 0) {
            if (this.sides[0] + this.sides[1] > this.sides[2]) return true;
            else return false;
        }
        else return false;
    }

    isEquilateral() {
        if (this.isTriangle()) {
            if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) return true;
            else return false;
        }
        else return false;
    }

    isIsosceles() {
        if (this.isTriangle() && this.sides[0] + this.sides[1] > this.sides[2]) {
            if (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2]) return true;
            else return false;
        }
        else return false;
    }

    isScalene() {
        if (this.isTriangle()) {
            if (this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2]) return true;
            else return false;
        }
        else return false;
    }
}