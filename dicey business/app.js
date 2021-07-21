"use strict";
var newDie = document.getElementById('newDie');
var rollDice = document.getElementById('rollDice');
var sumDice = document.getElementById('sumDice');
var container = document.getElementById('container');
var dice = [];
//////////////////////////////////////////////////////////////////
newDie.addEventListener('click', function () {
    var die = new Die();
    dice.push(die);
});
//////////////////////////////////////////////////////////////////
rollDice.addEventListener('click', function () {
    var i = 0;
    for (i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
    ;
});
//////////////////////////////////////////////////////////////////
sumDice.addEventListener('click', function () {
    var totalSum = 0;
    var i = 0;
    for (i = 0; i < dice.length; i++) {
        totalSum += dice[i].value;
    }
    ;
    alert('The sum of all dice is ' + totalSum);
});
//////////////////////////////////////////////////////////////////
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.roll();
        container.appendChild(this.div);
        /////////////////////////////////////////////////// //////
        this.div.addEventListener('click', function () { _this.roll(); });
        //////////////////////////////////////////////////////////
        this.div.addEventListener('dblclick', function () {
            var deleter = 0;
            dice.forEach(function (die, activate) {
                if (_this.value == die.value) {
                    deleter = activate;
                }
                ;
            });
            dice.splice(deleter, 1);
            container.removeChild(_this.div);
        });
    }
    ;
    //////////////////////////////////////////////////////////////
    Die.prototype.roll = function () {
        ;
        this.value = Math.floor(Math.random() * 6 + 1);
        var x = this.value;
        var y = x.toString();
        this.div.textContent = y;
    };
    ;
    return Die;
}());
;
