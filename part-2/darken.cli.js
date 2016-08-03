// darken the color by 20%

var r = process.argv[2]
    g = process.argv[3]
    b = process.argv[4]

var colorutil = require('./colorutil.js')

// Calculate the darkened value from the given rgb
var darkened = colorutil.darken(r, g, b);

// Print the result to the console
console.log(darkened.r, darkened.g, darkened.b);
