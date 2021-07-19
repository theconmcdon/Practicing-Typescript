/*Functions and variables*/

let myName = "Connor McDonald".toUpperCase();
let myCareer = "Full Stack Web Development";
let myDescription = "I like turtles";

let skill1 = {
    name: "Art",
    boolean: true,
}
let skill2 = {
    name: "Driving",
    boolean: true,
}
let skill3 = {
    name: "Eating",
    boolean: false,
}
let skill4 = {
    name: "Walking",
    boolean: false,
}
let skill5 = {
    name: "Talking",
    boolean: true,
}

let skills = [skill1, skill2, skill3, skill4, skill5];

function displayPosition(myName: string, myCareer: string, myDescription: string) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription);
}

function displaySkill(name: string, boolean: boolean) {
    if (skills[i].boolean == true) {
        console.log("* BAM: " + skills[i].name);
    } else if (skills[i].boolean == false) {
        console.log("* " + skills[i].name);
    }
}

/*Console Loggin' Code*/

displayPosition(myName, myCareer, myDescription);

console.log(" ");

console.log("My Interests:");
console.log("* Fall TV");
console.log("* Locomotives");
console.log("* Observing awkward situations");
console.log("* Film soundtracks");

console.log(" ");

console.log("My Previous Experience: ");
console.log("* Math, Chemistry, Physics, Biology, and English tutor at Some School - Tutored students in those areas.");
console.log("* Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.");
console.log("* Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.");

console.log(" ");

console.log("My Skills:");

let i: number = 0

for (i = 0; i < skills.length; i++) {
    displaySkill(skills[i].name, skills[i].boolean);
}

