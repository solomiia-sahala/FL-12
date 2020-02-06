const markMass = +prompt('Please, Enter the Mark`s mass');
const markHeight = +prompt('Please, Enter Mark`s height');
const johnMass = +prompt('Please, Enter the John`s mass');
const johnHeight = +prompt('Please, Enter the John`s height');
const BMIofMark = markMass / Math.pow(markHeight, 2); 
const BMIofJohn = johnMass / Math.pow(johnHeight, 2);
let result = BMIofMark > BMIofJohn;

if (!markMass || !markHeight || !johnMass || !johnHeight) {
    alert('You entered wrong paramethers.')
} else if (BMIofJohn === BMIofMark) {
    alert('The BMI is equal');
} else {
    alert(`Is Mark\`s BMI higher than John\`s? ${result}`);
}
