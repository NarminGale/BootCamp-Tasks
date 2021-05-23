// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

const request = require('request')

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2]

var queryUrl =
  'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy'

request(queryUrl, function (err, res, body) {
  let json = JSON.parse(body)
  console.log(json.Writer)
})
