  
let names="pavankalyan";
let counter=0;
let myLetter;

while(counter<=names.length){
    myLetter=names[counter];
    console.log(myLetter);
    
    if(counter===1){
        counter+=3
        continue;
    }
  
    if(myLetter==="y") break
    counter++
}
console.log(counter)