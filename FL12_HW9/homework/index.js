// Your code goes here

//Task 1
function convert (...items) {
    let result = [];
    for (let item of items) {
        let convertedItem = typeof item === 'number' ? item + '' : parseInt(item);
        result = [...result,convertedItem];
    }
    return result;
}

convert('1', 2, 3, '4');

//Task2
function executeforEach(array, func) {
    array.forEach(func);
}

executeforEach([1,2,3], function(el) { 
    console.log(el * 2);
});

//Task 3
function mapArray(array, func) {
    array.forEach(func);
    return array;
}

mapArray([2, '5', 8], function(el, index, arr) {
    arr[index] = typeof arr[index] === 'number' ? arr[index] + 3 : parseInt(arr[index]) + 3
}
)

//Task 5
function flipOver (string) {
    let reversed = '';
    for (let letter of string) {
        reversed = letter + reversed;
    }
    return reversed;
}

flipOver('hey world'); 

//Task 6
function akeListFromRange (array) {
    let start = array[0];
    let end = array[1];
    let newArray = [];
    for (let i = start; i <= end; i++) {
        newArray = [...newArray, i];
    }
    return newArray;
}

akeListFromRange([2, 7]);

// Task 7
const actors = [
    { 
        name: 'tommy',
        age: 36
    },
    { 
        name: 'lee',
        age: 28
    }
];

  function getArrayOfKeys(array, value) {
      let newArray = [];
      array.forEach(x => {
          newArray = [...newArray, x[value]];
      })
     return newArray;
  }

 getArrayOfKeys(actors, 'name'); 

//Task 8 
function substitute(array) {
    let newArray = [];
    array.forEach( x => {
        if (x < 30) {
            x = '*';
            newArray = [...newArray, x];
        } else {
            newArray = [...newArray, x];
        }
    })
        return newArray;
}

substitute([58, 14, 48, 2, 31, 29]);

//Task 9
function getPastDay(date, day) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - day);
    return newDate.getDate();
}

const date = new Date(2019, 0, 2);
getPastDay(date, 365);

//Task 10
 function formatDate(date) {
     let year = date.getFullYear();
     let month = date.getMonth() + 1;
     let day = date.getDate();
     let hours = date.getHours() < 10 ? `0${date.getHours()}`: date.getHours();
     let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
     return `${year}/${month}/${day} ${hours}:${minutes}`;
 }

formatDate(new Date('6/15/2018 09:05:00'));
formatDate(new Date());
