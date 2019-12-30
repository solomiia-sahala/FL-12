function isLeapYear (x) {
    let createDate = new Date(x);
     let getYear = parseInt(createDate.getFullYear());
     let result
     if (isNaN(getYear)) {
         return `Invalid Date`;
     }

     if (getYear % 400 === 0) {
         result = `${getYear} is a leap year`;
     } else if (getYear % 100 === 0) {
         result = `${getYear} is not a leap year`;
     } else if (getYear % 4 === 0) {
        result = `${getYear} is a leap year`;
     } else {
        result = `${getYear} is not a leap year`;
     }
     return result;
}

isLeapYear('2021-01-01 00:00:00');