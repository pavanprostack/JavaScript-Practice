
document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState==="complete"){
        console.log("readyState : complete");
        initApp();
    }
})

view1.style.display="none"
view2.style.display="none"
view3.style.display="flex"

const initApp=()=>{
    const view3=document.querySelector("#view3");
    const myForm=view3.querySelector("#myform");

    myForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        console.log("Submitted Successfully");
    })
}