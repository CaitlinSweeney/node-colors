// COLOR API
var http = require('http');
    request = require('request');
    colorsUrl = "https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json"
    rColorName = process.argv[2]; // Pull the color name to search for from the command line arguments

request(colorsUrl, function(err, response, body){
  colors = JSON.parse(body)

  // Search through the array for any matches
  var matches = colors.filter(function(color){
      var color1 = color.name.toLowerCase()
          color2 = rColorName.toLowerCase()
          matched = color1 === color2
          if (matched){
      console.log (matched, color1, color2)
    }
      return matched
   })
});


// var server = http.createServer(function(request, response){
// 	request.get("https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json", function (err, res, body){
// 		console.log(body)
// 		response.writeHead(418, {
// 			"Content-Type" : "text/html"
// 		});
// 		response.end(body);
// 	});



// request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body)
//   }
// })
//


// {
// 	"name": "Lavender",
// 	"hex": 	"E6E6FA",
// 	"rgb": { "r": 230, "g": 230, "b": 250 }
// }
