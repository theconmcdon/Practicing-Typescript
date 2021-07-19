var nameMe = 'Connor';/*my name*/
console.log('My name is ' + nameMe);
const statesNumber = 50;/*constant for number of states*/
console.log('The number of states is '+ statesNumber);
var sum = 4 + 5; /*adds 4 and 5 saves as var sum*/
console.log(sum);
console.log('Addition successful')
/* SAY HELLO */

function sayHello(){
    alert('Hello World!');
    console.log('Hello World successful')
}
sayHello()


/* AGE CHECKER */

function checkAge(name: string, age: number){
    if (age < 21) {
        console.log(name + ' was denied access to this page because they are ' + age + '.');
        alert('Sorry, ' + name + ", you aren't old enough to view this page!");
    } else {
        console.log("Welcome to the website, " + name + "! " + name + " was allowed access because they are " + age + '.');
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);


/* VEGETABLE ARRAY */


var veggies = ['Brussels', 'Beets', 'Celery']

let i: number = 0;

for(i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
}



/* PET OBJECT */


var pet = {
    namePet: 'Maple',
    breed: 'Cat',
}
console.log('My pet is named ' + pet.namePet);
console.log('My pet is a ' + pet.breed);



/* ARRAY MADE OF OBJECTS FEEDING INTO CHECKAGE FUNCTION */


var obj1 = {
    name: 'John',
    age: 22,
    pos: 'first',
}

var obj2 = {
    name: 'Eliza',
    age: 20,
    pos: 'second',
}

var obj3 = {
    name: 'Beth',
    age: 26,
    pos: 'third',
}

var obj4 = {
    name: 'Mark',
    age: 30,
    pos: 'fourth',
}

var obj5 = {
    name: 'David',
    age: 18,
    pos: 'fifth',
}

var alcArray = [obj1, obj2, obj3, obj4, obj5];

console.log('A new group of users are approaching.');

for (i = 0; i < alcArray.length; i++){
    console.log('The ' + alcArray[i].pos + ' person is ' + alcArray[i].name + '.');
    checkAge(alcArray[i].name, alcArray[i].age);
}


/* FINDS THE LENGTH OF STRING AND RETURNS MESSAGE IF ODD OR EVEN */


function getLength(input: string){
    var n = input.length;
    if (n % 2 == 1){
        console.log("The world is an odd place!");
    } else {
        console.log("The world is nice and even!");
    }
    return console.log(input.length);
}

getLength('Hello World!')
getLength('Hello World')