// Your code goes here

let startGame = confirm('Do you want to play a game');
if (!startGame) {
    alert('You did not become a billionaire, but can.');
} else {
    let range = 9;
    let randomNum = Math.floor(Math.random() * range);
    let doubleMoney = 2;
    let counter = 0;
    let money = 100;
    let gameAgain = true;
    let two = 2;
    while (gameAgain) {
        for (let i = 3; i > 0;) {
            let userGuess = parseInt(prompt(`
        Choose a roulette pocket number from 0 to ${range-1}
        Attempts left: ${i}
        Total prize: ${counter}$
        Possible prize on current attempt:${money}$\n `));
            if (isNaN(userGuess)) {
                break;
            } else if (userGuess === randomNum) {
                counter += money
                let continueGame = confirm(`Congratulation, you won! Your prize is: ${counter}$.
                Do you want to continue?`);
                if (!continueGame) {
                    break;
                } else {
                    let makeBiggerRange = 4;
                    range += makeBiggerRange;
                    i = 3;
                    randomNum = Math.floor(Math.random() * range);
                    money = 100;
                    money *= doubleMoney;
                    doubleMoney *= two;
                }
            } else {
                i--;
                money /= two;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${counter}$`);
        gameAgain = confirm('Do you want to play again?');
        money = 100;
        let startGameRange = 9;
        range = startGameRange;
        counter = 0;
    }

}