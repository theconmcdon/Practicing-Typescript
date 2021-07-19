let newDie: HTMLElement = document.getElementById('newDie') as HTMLElement;
let rollDice: HTMLElement = document.getElementById('rollDice') as HTMLElement;
let sumDice: HTMLElement = document.getElementById('sumDice') as HTMLElement;
let container: HTMLElement = document.getElementById('container') as HTMLElement;
let dice: any[] = [];
let value: number = Math.floor(Math.random() * 6 + 1);
//////////////////////////////////////////////////////////////////
newDie.addEventListener('click', () => {
    let die = new Die(value);
    dice.push(die);
});
//////////////////////////////////////////////////////////////////
rollDice.addEventListener('click', () => {
    let i: number = 0;
    for (i = 0; i < dice.length; i++) {
        dice[i].roll(value);
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
    value: number = Math.floor(Math.random() * 6 + 1);
    div: HTMLElement;
    constructor(value: number) {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.roll(value);
        container.appendChild(this.div);
        /////////////////////////////////////////////////// //////
        this.div.addEventListener('click', () => { this.roll(value) });
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
    
    roll(value: number) {
        let x = value;
        this.value = x;
        let y = this.value;
        let z = y.toString();
        this.div.textContent = z;
    };
};