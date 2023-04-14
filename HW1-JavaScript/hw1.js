/*
    Nathan Rowley
	hw1.js
	CSCI320
	22 January 2023
*/

// file name will be input by user in terminal
const fs = require('fs')
var text = fs.readFileSync(process.argv[2]).toString().split("\n") // read entire file input by user and split on each new line

for(var i = 0; i < text.length; i++){ // iterate through each line from 'test.txt'
    for(var j = 0; j < text.length - i - 1; j++){
	    var curr = text[j].split(",") // splits the current line at the comma
        var next = text[j + 1].split(",") // splits the next line at the comma
        if(curr[0].localeCompare(next[0]) == 1){ // if curr is alphabetically before next
            // swap current line and next line
            var temp = text[j] // temp variable to hold value of current
            text[j] = text[j + 1] // current line = value of next line
            text[j + 1] = temp // next line = value of current line (stored in temp)
        }
    }
}
// print sorted lines to console
for(line in text){
    console.log(text[line])
}
