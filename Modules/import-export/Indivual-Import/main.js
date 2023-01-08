
// Modules : introduced by ES6 Modules in 2015.

import playGuitar from "./guitar.js";  // it is default import.

// import { shredding, plucking } from "./guitar.js";    // it is named import
        // or
import { shredding as shred, plucking as pluck } from "./guitar.js";

console.log(playGuitar())

console.log(shred());

console.log(pluck())

