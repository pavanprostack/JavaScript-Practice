
// event handling
const event1=document.getElementById("event1");
event1.addEventListener("click", ()=>{
    console.log("Event1 Clicked");
})

// event capturing
// if event starts from bottom to top is nothing but event capturing.
const event2=document.getElementById("event2");
event2.addEventListener("click", ()=>{
    console.log("Event2 Clicked");
}, true)

const parent=document.getElementById("parent");
parent.addEventListener("click", ()=>{
    console.log("parent is clicked");
}, true)

const child=document.getElementById("child");
child.addEventListener("click", ()=>{
    console.log("child is clicked");
}, true)