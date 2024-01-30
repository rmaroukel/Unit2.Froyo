/*
A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
When they view the browser console, they observe a table listing how many of each flavor they have ordered.
In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.
*/


// vanilla,vanilla,vanilla,strawberry,coffee,coffee
const froyo = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
}

// The user is prompted for froyo flavors upon entering the website.



let userInput = prompt("Choose your flavor and quantity: Vanilla, Strawberry or Coffee")

// The user's input string is split into an array of strings.
function splitFlavors (input){  
    const getStringToArray = input.split(`,`)

    // A loop is used to iterate through the array of flavors.
    
    console.log(getStringToArray)
}

splitFlavors(userInput)

// An object is used to keep count of how many orders there are of each flavor.

// The program correctly counts the number of each flavor in the user's input.