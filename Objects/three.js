


const band={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
}

console.log(Object.keys(band));  // it returns keys as in Array.
console.log(Object.values(band))  // it returns key-values as in Array.

for(let job in band){
    console.log(job)
    console.log(band[job])
    console.log(`On ${job}, its ${band[job]}!`)
}