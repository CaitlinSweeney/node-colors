Write a program that takes a color name like 'red', 'green', or 'blue' as a command line argument and returns the RGB components, comma-separated. Use the request module to make an HTTP request to retrieve a list of web colors to use for comparison.

Create a new project directory.
Initialize an empty package.json file using npm init.
Install the request module using npm install --save request.

? Note: npm install downloads the module and saves it in the node_modules folder. The --save option modifies your package.json, adding the module as a dependency. Use --save-dev to add the module as a dependency for development only, such as a unit testing framework like mocha.

There are 140 web color names that browsers recognize. Use the request module to retrieve webcolors.json which contains an array of all 140 colors, stored as objects in the following format: { name: 'FireBrick', hex: 'B22222', rgb: { r: 178, g: 34, b: 34 } }

Call JSON.parse on the content body that comes back from the request in order to get a workable Javascript array containing all the colors.

Search the colors array for a color name that matches the user-specified name. Make sure to do a case-insensitive comparision. Return the R, G, and B components separated by spaces: $ node color.js papayawhip 255 239 213
