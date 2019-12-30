function makeNumbers (arg) {
    let newArray = [];
 let getSeparateElements = arg.split('');
 for (let elem of getSeparateElements) {
    if (!isNaN(elem)) {
        newArray.push(elem);
    } 
}
 let result = newArray.join('');
 return result;
}

makeNumbers('skdb989ks');

