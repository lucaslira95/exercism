//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    constructor(matrixStr) {
        this.matrix = matrixStr.split('\n').map(line => line.split(' ').map(num => +num));
    }

    get rows() {
        return this.matrix;
    }

    get columns() {
        return this.matrix[0].map((_, index) => this.matrix.map(line => line[index]));
    }
}
