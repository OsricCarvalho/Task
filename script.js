const mongoose = require("mongoose")
const people = require("people")
const promter = require("prompt-sync") // You may see the the shortcut "const input = require("prompt-sync")()"
const input = promter()                // running the promter function, returns a new function that then accepts inputs instead of configuration

mongoose.connect("mongodb://127.0.0.1:27017/nationwide").then( () => {
console.log("Connected.")
MainMenu()
}).catch(err => {
    console.log("There was an error.")
    console.log(err.message)
})

// This function calls itself acting as a loop while running
function MainMenu(){
    
    // Nicely Print each option (used by the switch)
    console.log(" --- CRUD Menu --- ")
    console.log("1 - Create")
    console.log("2 - Read One")
    console.log("3 - Read One")
    console.log("4 - Update")
    console.log("5 - Delete")
    console.log("6 - Name Search")
    console.log("7 - Sort (Extension)")
    console.log("q - to Quit")

const choice = input("Choose an option: ")
switch(choice){

    case "1":
        createFunction() 
        break;
  
    case "q":
        case "quit":
            console.log("bye!")
            mongoose.disconnect()
            break;
 
        default:
            console.log("That was not a vaild choice!")
            MainMenu()
}
}

function createFunction() 
{

    //enter username
    const userName = input("Enter Username")
    //enter user age
    const userAge = input("Enter User age")
    //enter user location 
    const userLocation = input("Enter Location")


}