// Colorutil.js

// Create a file colorutil.js with the following content:;
// Add your luminosity function from Part I as a method on the module.exports object.

// Expose functionality

luminosity = function(r, g, b){
      return 0.2126*r + 0.7152*g + 0.0722*b
}

darkenColorComponent = function(color){
     return color - (color * 0.2);
}

darkenRGB = function(r, g, b){
     return {
         r : darkenColorComponent(r),
         g : darkenColorComponent(g),
         b : darkenColorComponent(b)
       }
     }

module.exports = {
  luminosity: luminosity,
  darken: darkenRGB
}
