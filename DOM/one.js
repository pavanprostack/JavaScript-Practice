
// Id
const view1 = document.getElementById("view1");
console.log(view1)

// querySelector
const view2 = document.querySelector("#view2")
console.log(view2)

// display
view1.style.display = "grid"
view2.style.display = "flex"

// className
const views = document.getElementsByClassName("view")
console.log(views)

//querySelectorAll
const sameView = document.querySelectorAll(".view")
console.log(sameView)

// TagName
const divs = view1.querySelectorAll("div")
console.log(divs)
// or
const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs)

// how to get even numbered divs
const evenDivs = document.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "blue"
    // evenDivs[i].style.width="200px"
    // evenDivs[i].style.height="200px"
}

// textContent
const navText = document.querySelector("nav, h1");
console.log(navText)
navText.textContent = "Hello World";
navText.style.padding = "20px"

// innerHTML
const navbar = document.querySelector("nav")
navbar.innerHTML = `<h1>Hello World</h1> <p>this should align right</p>`
navbar.style.justifyContent = "space-between"

// remove elements
view1.style.display = "none"
view2.style.display = "flex"

while (view2.lastChild) {
    view2.lastChild.remove()
}

// navigate DOM Tree
console.log(evenDivs)
console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
console.log(evenDivs[0].parentElement.hasChildNodes())
console.log(evenDivs[0].parentElement.lastChild)
console.log(evenDivs[0].parentElement.lastElementChild)
console.log(evenDivs[0].parentElement.firstChild)
console.log(evenDivs[0].parentElement.firstElementChild)

// How to create div elements using function.

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.style.textContent = iter;
    newDiv.style.backgroundColor = "green";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center"
    parent.append(newDiv)
}

// createDivs(view2, 10)
for (let i = 1; i <= 12; i++) {
    createDivs(view2, i);
}