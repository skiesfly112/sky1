// JavaScript source code
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/2pic.jpg") {
        myImage.setAttribute("src",
            "images/3pic.jpg");
    } else {
        myImage.setAttribute("src", "images/2pic.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello! I'm ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello! I'm ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
};