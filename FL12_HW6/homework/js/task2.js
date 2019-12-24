// Your code goes here

let a = parseInt(prompt('Please, enter first side of Triangle', ''));
let b = parseInt(prompt('Please, enter second side of Triangle', ''));
let c = parseInt(prompt('Please, enter third side of Triangle', ''));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    console.log('A triangle must have 3 sides with a positive definite length');
} else if (a < 0 || b < 0 || c < 0) {
    console.log('Triangle doesn’t exist');
} else if (a === b && a === c && b === c) {
    console.log('Equilateral triangle');
} else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
} else {
    console.log('Scalene triangle');
}