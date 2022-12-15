


const band={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
}

delete band.drums
console.log(band.hasOwnProperty("drums")); // it checks drums value is there or not.

console.log(Object.keys(band));  // it returns keys as in Array.
console.log(Object.values(band))  // it returns key-values as in Array.

for(let job in band){
    console.log(`On ${job}, its ${band[job]}!`)
}