let h1Element = document.querySelector("h1")
let h1Content = h1Element.textContent

// console.log(h1Content)

let p1Element = document.querySelectorAll("p")[0]
let p1Content = p1Element.textContent

// console.log(p1Content)


// Creating New Element
const myButton = document.createElement("button")

myButton.textContent ="Console Hello"

function printMessage() {
    console.log("Hello Basic Webpage")
}

myButton.addEventListener("click", printMessage)

document.body.insertBefore(myButton, p1Element)


// Returning Functions

function getFullName(firstName, lastName) {
    let tmpFullName = firstName + " " + lastName
    console.log(tmpFullName)
    // return tmpFullName
}

let fullName = getFullName("Murendeni", "Mukwevho")

console.log(fullName)



