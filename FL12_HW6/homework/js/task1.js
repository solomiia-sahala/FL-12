// Your code goes here
let a = parseFloat(prompt('Please, enter A', ''));
let b = parseFloat(prompt('Please, enter B', ''));
let c = parseFloat(prompt('Please, enter C', ''));
let value1;
let value2;
let discr;
const four = 4;
const two = 2;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    discr = b * b - four * (a * c);
    console.log(discr);

    if (discr > 0 ) {
        value1 = ((-b + Math.sqrt(discr)) / two * a).toFixed(1);
        value2 = ((-b - Math.sqrt(discr)) / two * a).toFixed(1);
        console.log(`x1 = ${value1} and x2 = ${value2}`);
    } else if (discr === 0) {
        let x = (-b / two * a).toFixed(1);
        console.log(`x = ${x}`);
    } else {
        console.log('no solution');
    }
}






