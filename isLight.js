// LIGHT OR DARK
// Write a separate program that takes a color and returns 'light' if the luminosity is greater than 155 and 'dark' otherwise. At this point, you can just copy the luminosity function from the last step into a new file. You'll require it as a module in Part III. $ node islight.js 255 239 213 light $ node islight.js 50 15 25 dark

var r = process.argv[2]
    g = process.argv[3]
    b = process.argv[4]
    luminosity = 0.2126*r + 0.7152*g + 0.0722*b
    light = luminosity > 155

console.log(light);
console.log(light ? "light" : "dark")

// if (light) console.log ("light")
// else console.log("dark")
