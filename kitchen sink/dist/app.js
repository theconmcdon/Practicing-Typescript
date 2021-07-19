/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function() {

eval("\r\n/*Functions and variables*/\r\nvar myName = \"Connor McDonald\".toUpperCase();\r\nvar myCareer = \"Full Stack Web Development\";\r\nvar myDescription = \"I like turtles\";\r\nvar skill1 = {\r\n    name: \"Art\",\r\n    boolean: true,\r\n};\r\nvar skill2 = {\r\n    name: \"Driving\",\r\n    boolean: true,\r\n};\r\nvar skill3 = {\r\n    name: \"Eating\",\r\n    boolean: false,\r\n};\r\nvar skill4 = {\r\n    name: \"Walking\",\r\n    boolean: false,\r\n};\r\nvar skill5 = {\r\n    name: \"Talking\",\r\n    boolean: true,\r\n};\r\nvar skills = [skill1, skill2, skill3, skill4, skill5];\r\nfunction displayPosition(myName, myCareer, myDescription) {\r\n    console.log(\"Name: \" + myName);\r\n    console.log(\"Career: \" + myCareer);\r\n    console.log(\"Description: \" + myDescription);\r\n}\r\nfunction displaySkill(name, boolean) {\r\n    if (skills[i].boolean == true) {\r\n        console.log(\"* BAM: \" + skills[i].name);\r\n    }\r\n    else if (skills[i].boolean == false) {\r\n        console.log(\"* \" + skills[i].name);\r\n    }\r\n}\r\n/*Console Loggin' Code*/\r\ndisplayPosition(myName, myCareer, myDescription);\r\nconsole.log(\" \");\r\nconsole.log(\"My Interests:\");\r\nconsole.log(\"* Fall TV\");\r\nconsole.log(\"* Locomotives\");\r\nconsole.log(\"* Observing awkward situations\");\r\nconsole.log(\"* Film soundtracks\");\r\nconsole.log(\" \");\r\nconsole.log(\"My Previous Experience: \");\r\nconsole.log(\"* Math, Chemistry, Physics, Biology, and English tutor at Some School - Tutored students in those areas.\");\r\nconsole.log(\"* Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.\");\r\nconsole.log(\"* Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.\");\r\nconsole.log(\" \");\r\nconsole.log(\"My Skills:\");\r\nvar i = 0;\r\nfor (i = 0; i < skills.length; i++) {\r\n    displaySkill(skills[i].name, skills[i].boolean);\r\n}\r\n\n\n//# sourceURL=webpack://test3/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;