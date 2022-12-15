
// Destructuring Objects

const band={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
}

const {vocals, bass, guitar, drums} = band;

console.log(vocals);
console.log(bass);

// destructing Object inside of object.

function pavan({vocals}){
    return `${vocals} sings!`
}
console.log( pavan(band))
