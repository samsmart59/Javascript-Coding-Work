//Welcome to my small project which covers the fundamnetals of the Javascript programming language. 
//To make this project work, you will need Node.js installed. 
//Alternatively, you can use the built-in terminal on VS Code.
//In VS code, navigate to Terminal and click the drop down icon next to the '+' sign.
//Select 'Command Prompt' and type node script.js into the terminal. 
//You should expect to see a paragraph telling you a bit about myself.


//Declaring an object which will display my information in a key/value format.

const myInformation = {
    firstName: "Sam",
    lastName: "Smart",
    age: 25,
    hobbies: ["software-development", "rugby", "socialising"],
    brownHair: true,
    skills: ["HTML", "Css", "Javascript"],
};
//Declare variables with the correct scope to use in a function.
//Use a favourite food variable and access the above variables first element using bracket notation.
let foodsIEatTheMost = ["pasta", "steak", "fish", "pizza", "cheese"];
let favouriteFood = foodsIEatTheMost[0];

//Declaring a function using ES6 syntax with a conditonal statement included.
const aboutMe = () => {
    //if brown hair is not true, I will create a message to display to the terminal that the information provided is false.
    if (myInformation.brownHair == false) {
        return "This information is not true. Sam has brown hair.";
    } else {
        //Return this paragraph to the terminal using string interpolation.
        return `Hi, my name is ${myInformation.firstName} ${myInformation.lastName} and i'm  ${myInformation.age}. 
    My hobbies include, but are not limited to ${myInformation.hobbies}. Some of my favourite foods are ${foodsIEatTheMost}. 
    My number one choice is ${favouriteFood}.`;
    }
};
//Calling the function and using the .log method to print the javascript to the terminal.
console.log(aboutMe()); 

