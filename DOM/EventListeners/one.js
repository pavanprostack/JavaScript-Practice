
const view = document.getElementById("view2");
const div = view.querySelector("div")
const h3 = div.querySelector("h3")

// Syntax for addeventlistener
// addEventListener("event", function, useCapture(optional))


// const something = () => {
//     alert("doing wait")
// }
// h3.addEventListener("click", something, false)


// Click event

// using fatArrow Function
h3.addEventListener("click", (event) => {
    console.log(event.target)
    event.target.textContent = "Clicked"
})

           // or

// using Anonymous function
h3.addEventListener("click", function (event){
    console.log(event.target)
    event.target.textContent = "Clicked"
})

