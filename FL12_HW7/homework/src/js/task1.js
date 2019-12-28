// Your code goes here

let askEmail = prompt('Please, enter your Email', '');

const user = 'user@gmail.com';
const admin = 'admin@gmail.com';
const userPass = 'UserPass';
const adminPass = 'AdminPass';
let five = 5;
let six = 6;


if (!askEmail) {
    alert('Canceled');
} else if (askEmail.length < five) {
    alert('I don’t know any emails having name length less than 5 symbols');

} else if (askEmail === user || askEmail === admin) {
    let askPassword = prompt('Please, enter your password');
    if (!askPassword) {
        alert('Canceled');
    } else if (askPassword === userPass && askEmail === user || askPassword === adminPass && askEmail === admin) {
        let passwordChange = confirm('Do you want to change your password?');
        if (!passwordChange) {
            alert('You have failed the change');
        } else {
            let validation = prompt('Please, write the old password','');
            if (validation === userPass && askEmail === user || validation === adminPass && askEmail === admin) {
                let newPass = prompt('Please, enter the new password','');
                if (newPass.length < six) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let doubleCheckPass = prompt('Please, enter it again');
                    if (doubleCheckPass === newPass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
            
                }
            } else {
                alert('Canceled');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}






