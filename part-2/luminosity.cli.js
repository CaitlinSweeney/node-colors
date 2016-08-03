
//
// Call the luminosity method defined on the colorutil module, passing the r, g, b values that are specified on the command line (process.argv[2], process.argv[3], process.argv[4]) and store the calculated result in a variable.
// console.log the result.

// Add a darken function to your luminosity module which returns the given color in r,g,b, but with each value decreased by 20% in order to return a darker overall color. Write a darken-cli.js to take r,g,b command line arguments like luminosity-cli.js to test your darken function. It should also require colorutil.js. It should output space-separated r,g,b values for the darker color.

var r = process.argv[2]
    g = process.argv[3]
    b = process.argv[4]

var colorutil = require('./colorutil.js')
var result = colorutil.luminosity(r,g,b)

console.log(result)
