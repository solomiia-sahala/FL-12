/* Your code goes here */

function getFighter({name, damage, hp, strength, agility}) {

    let wins = 0;
    let losses = 0;

    class Fighter {
        get getName() {
            return name;
        }

        get getDamage() {
            return damage;
        }

        get getHp() {
            return hp;
        }

        setHp(healsPoints) {
            hp = healsPoints;
        }

        get getStrength() {
            return strength;
        }

        get getAgility() {
            return agility;
        }

        attack(defender) {
            let chance = strength + agility;
            let probability = Math.random() * 100;

            if (probability > chance) {
                defender.setHp(defender.getHp - damage);
                console.log('Attack is successfull!');
            } else {
                console.log('Missed!');
            }
        }

        logCombatHistory() {
            console.log(`Name:${name}, Wins: ${wins}, Losses: ${losses}`);       
        }

        heal(health) {
            const max = 100;
            let temporaryHp = hp + health;
            hp = temporaryHp > max ? max : temporaryHp;
        }
        
        dealDamage(damage) {
            const min = 0;
            let temporaryHp = hp - damage;
            hp = temporaryHp < min ? min : temporaryHp;
        }

        addWin() {
            wins++;
        }

        addLoss() {
            losses++;
        }
    }
return new Fighter(0, 0);
}

function battle(fighter1, fighter2) {

    let startGame = true;

    while(startGame) {
    fighter1.attack(fighter2);
    if (fighter2.getHp <= 0) {
        console.log(`The winner is: ${fighter1.getName}`);
        fighter1.addWin();
        fighter2.addLoss();
        return;
    } 

    fighter2.attack(fighter1);
    if (fighter1.getHp <= 0) {
        console.log(`The winner is: ${fighter2.getName}`);
        fighter2.addWin();
        fighter1.addLoss();
        return;
    } 
}

}
const myFighter1 = getFighter({name: '#1', damage: 45, hp: 100, strength: 30, agility: 25});
const myFighter2 = getFighter({name: '#2', damage: 5, hp: 88, strength: 30, agility: 25});


battle(myFighter1, myFighter2);