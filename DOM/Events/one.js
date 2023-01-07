
const view = document.getElementById("view2");
const div = view.querySelector("div");
const h3 = div.querySelector("h3")

// readystatechange event  means Loading.

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState : complete");
        initApp();
    }
})

// event bubbling.

// Syntax for addeventlistener
// addEventListener("event", function, useCapture(optional))

// bydefault useCapture is false.

// Note : in eventbubbling if we give usecapture is false it will apply eventbubbling from inner to outer.
// Note : in eventbubbling if we give usecapture is true it will apply eventbubbling from outer to inner.

const initApp = () => {
    const view = document.getElementById("view2");
    const div = view.querySelector("div");
    const h3 = div.querySelector("h3");

    div.addEventListener("click", (event) => {
        // event.stopPropagation()  it stops the eventbubbling.
        div.style.backgroundColor = "green"
    },)

    h3.addEventListener("click", (event) => {
        h3.style.backgroundColor = "red"
    },)

    h3.addEventListener("click", (event) => {
        const myText = event.target.textContent
        myText === "Page2"
            ? event.target.textContent = "Clicked"
            : event.target.textContent = "Page2"
    },)
}
