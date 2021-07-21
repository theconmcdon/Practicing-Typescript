let newDie: HTMLElement = document.getElementById('newDie') as HTMLElement;
let rollDice: HTMLElement = document.getElementById('rollDice') as HTMLElement;
let sumDice: HTMLElement = document.getElementById('sumDice') as HTMLElement;
let container: HTMLElement = document.getElementById('container') as HTMLElement;
let dice: Die[] = [];
//////////////////////////////////////////////////////////////////
newDie.addEventListener('click', () => {
    let die = new Die();
    dice.push(die);
});
//////////////////////////////////////////////////////////////////
rollDice.addEventListener('click', () => {
    let i: number = 0;
    for (i = 0; i < dice.length; i++) {
        dice[i].roll();
    };
});
//////////////////////////////////////////////////////////////////
sumDice.addEventListener('click', () => {
    let totalSum = 0;
    let i: number = 0;
    for (i = 0; i < dice.length; i++) {
        totalSum += dice[i].value;
    };
    alert('The sum of all dice is ' + totalSum);
});
//////////////////////////////////////////////////////////////////
class Die {
    value!: number;
    div: HTMLElement;
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.roll();
        container.appendChild(this.div);
        /////////////////////////////////////////////////// //////
        this.div.addEventListener('click', () => { this.roll() });
        //////////////////////////////////////////////////////////
        this.div.addEventListener('dblclick', () => {
            let deleter = 0;
            dice.forEach((die, activate) => {
                if (this.value == die.value) {
                    deleter = activate;
                };
            });
            dice.splice(deleter, 1);
            container.removeChild(this.div);
        });
    };
    //////////////////////////////////////////////////////////////
    
    roll() {;
        this.value = Math.floor(Math.random() * 6 + 1);
        let x = this.value;
        let y = x.toString();
        this.div.textContent = y;
    };
};