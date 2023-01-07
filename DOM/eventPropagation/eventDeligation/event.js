
// event handling
const event1 = document.getElementById("event1");
event1.addEventListener("click", (event) => {
    console.log("Event1 Clicked");
    // event.stopPropagation();
    // event.stopImmediatePropagation()

})


// event Deligation(mostly used on tables)
// only using parent we can handle childrens is nothing but event deligation.
const tasks = document.getElementById("tasks");
console.log(tasks)

tasks.addEventListener("click", (event)=>{
    event.target.classList.toggle('completed');    // we are adding class and toggle means one click add event and click again click remove event.

})
