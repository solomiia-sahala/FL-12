function countNumbers (arr) {
    let result = {};
    let getSeparateElements = arr.split('');
    for (let elem of getSeparateElements) {
       if (!isNaN(elem)) {
           result[elem] = result[elem] ? (result[elem] +1) : (result[elem] = 1)
           
       } 
   }
   return result;

   
}
countNumbers('sdc2323');


