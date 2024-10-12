// //THIS IS CONTACT MANAGEMENT SYSTEM

const prompt = require("prompt-sync")()

function printInfo() {
    console.log("Contact Management System")
    console.log("-------------------------")
    console.log("1. Add Contact")
    console.log("2. Delete Contacts")
    console.log("3. View Contacts")
    console.log("4. Search Contacts")
    console.log("5. Exit")
}
printInfo()

const contacts = []

function addContact() {
    const name = prompt("Name: ")
    const email = prompt("Email: ")
    const contact = {
        name: name, 
        email: email
    }
    contacts.push(contact)
    console.log("Added!")
}

function deleteContact() {
    //We want to list each of the contact with a nunmber beside their name
    console.log("Contact IDs")
    for (let i = 0; i < contacts.length; i++){
        const contact = contacts[i]
        console.log((i + 1).toString() + ": ", contact.name) //takes the index and adds 1 for formality, converts to string, and then assign to name according to its index in array
        
    }
    const number = parseFloat(prompt("Enter an ID to delete: ")) //grab id
    if (number >  contacts.length || isNaN(number))
    {
        console.log("Invalid!")
        return
    }
    contacts.splice(number - 1, 1) // The index minues the 1 added initially to acces the right index, and its the only one to delete.
    console.log("Removed!")

}

function viewContact(contacts) {
    //for loop to iterate the contacts
    //iterating by item
    for (let contact of contacts){
        console.log("###################")
        console.log("Name: ",contact.name)
        console.log("Email: ",contact.email)
    }
}

function searchContact(params) {
    const searchString = prompt("Search: ").toLowerCase()
    const results = [];

    for (let contact of contacts){
        //includes compares any character in the searchString value to whatever is in the contacts, and then push to results.
        if (contact.name.toLowerCase().includes(searchString)){
            results.push(contact) 
            //we then add the characters her and then, print out whatever is associated with the ch using viewContact function.
        }
    }

    viewContact(results)
}



let keepGoing = true;

while (keepGoing){
    console.log()
    const number = prompt("Enter an operation: ");
    console.log()

    switch (number) {
        case '1':
            addContact()
            break;
        case '2':
            deleteContact()
            break;
        case '3':
            viewContact(contacts)
            break;
        case '4':
            searchContact()
            break;
        case '5':
            keepGoing = false;
            break;


        default:
            console.log("Unknown.")
            break;
    }
}



//FOR LOOP
// const fruits = ["apples","mango", "pear"]

// //starting from index 0
// for (let i = 0; i < fruits.length;i++){
//     console.log(fruits[i])
// }

// //starting from index 1
// for (let i = 1; i < fruits.length;i++){
//     console.log(fruits[i])
// }

// console.log(":::Decrement:::")

// for (let i = 10; i > 0;i--){
//     console.log(i)
// }

// //Arrays
// const arr = [1, 2, 3, 4]
// arr[0] = 9
// arr.push(10)

// console.log(arr)

// arr.pop()  //Removes the last item from the list or array
// console.log(arr.length)
// console.log(arr)

// arr.splice(2, 1) //Use to remove items using its index
// console.log(arr)

// //Objects are ways we can group information together, just like dictionary in python. (key, value)
// const  contacts = {
//     name:"Salim",
//     email:"adams@yahoo.com"
// }

// console.log(contacts.name)