
// event handling
const event1=document.getElementById("event1");
event1.addEventListener("click", ()=>{
    console.log("Event1 Clicked");
})

// event bubbling
// if event starts from top to bottom is nothing but event bubbling.
const event2=document.getElementById("event2");
event2.addEventListener("click", (event)=>{
    console.log("Event2 Clicked");
   // event.stopPropagation();   // Note : if we want to execute only your particular events use : event.stopPrpagation()
   
})

const parent=document.getElementById("parent");
parent.addEventListener("click", ()=>{
    console.log("parent is clicked");
})

const child=document.getElementById("child");
child.addEventListener("click", ()=>{
    console.log("child is clicked");
})