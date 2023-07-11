const mongoose = require("mongoose")
const people = require("./people")
const promter = require("prompt-sync") // You may see the the shortcut "const input = require("prompt-sync")()"
const peopleModel = require("./people")
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
    console.log("3 - Read All")
   

const choice = input("Choose an option: ")
switch(choice){

    case "1":
        createFunction() 
        break;
    
    case "2":
        readOne() 
        break;
    
    case "3":
        ReadAllFunction() 
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

    const newPerson = { name:userName, age:userAge, location:userLocation}

    peopleModel.create(newPerson).then( dbPerson => {    // const dbPerson = await peopleModel.create(newPerson);
        console.log(dbPerson)                           // console.log(dbPerson)
        
       // print newly created person (document with id)
       // Loop back to mainmenu

        MainMenu()
   } )

}

function readOne(){

    const userId = input ("Enter user ID")

    peopleModel.find(userId).then( person => {    // const dbPerson = await peopleModel.create(newPerson);
        console.log(person)                           // console.log(dbPerson)
    
    } ).catch(()=> {

    console.log("That person does not exist!")

    }).finally( () => {
    MainMenu()
    })
}

function ReadAllFunction(){
    peopleModel.find({}).then( allPeople => {
        if (allPeople.length > 0){
            for (let person of allPeople){
                console.log(person)
            }
        }else{
            console.log("There are no people in the database!")
        }
        MainMenu()
    })
}