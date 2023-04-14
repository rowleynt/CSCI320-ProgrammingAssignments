/*
	Nathan Rowley
	hw2.ts
	CSCI320
	26 January 2023
*/

import * as fs from "fs"; // import fs to read file

// get command line arguments from user
const intext = fs.readFileSync(process.argv[2], 'utf-8').toString().split('\n'); // user inputs name of txt file // text -> array of lines from txt file
const col = process.argv[3]; // user inputs column to sort on

let text = new Array(intext.length); // new array that will hold an array for each line split at comma

for(let i = 0; i < intext.length; i ++){
	let temp = intext[i].split(","); // separate each line at commas (for sorting by given column)
	text[i] = temp; // add split lines to text array
}

mergeSort(text, parseInt(col), 0, text.length - 1);
print(text); // print final output

function mergeSort(text: string[], col: number, left: number, right: number){
    if(left < right){ // base case, stop recursioun if left < right
        let mid = left + Math.floor((right - left)/2); // calculate middle value
        mergeSort(text, col, left, mid); // recursively sort left side
        mergeSort(text, col, mid + 1, right); // recursively sort right side
        merge(text, col, left, mid, right); // merge sorted arrays
    }
}

function merge(text: string[], col: number, left: number, mid: number, right: number)
{
    let n = mid - left + 1;
    let m = right - mid;
    let partLeft = new Array(n); // temp array for left partition
    let partRight = new Array(m); // temp array for right partition
    for (let i = 0; i < n; i++){ // copy left half of text array into temp array
        partLeft[i] = text[left + i];
    }
    for (let j = 0; j < m; j++){ // copy right half of text array into temp array
        partRight[j] = text[mid + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = left;
    while (i < n && j < m) {
        if (partLeft[i][col].localeCompare(partRight[j][col]) < 1) { // if left <= right
            text[k] = partLeft[i];
            i++;
        }
        else { // if left > right
            text[k] = partRight[j];
            j++;
        }
        k++;
    }
	// remaining values go into text array
    while (i < n) {
        text[k] = partLeft[i];
        i++;
        k++;
    }
    while (j < m) {
        text[k] = partRight[j];
        j++;
        k++;
    }
}

// neatly prints final sorted array to terminal
function print(text: string[]){
	let outpt = ""; // empty string to concat to
	for(let i = 0; i < text.length; i++){ // outer loop for elements in text array
		outpt = outpt.concat(text[i][0].toString()); // start with element 0 of text[i]
		for(let j = 1; j < text[i].length; j++){ // inner loop for elements of elements in text array
			outpt = outpt.concat(", "); // add comma to string
			outpt = outpt.concat(text[i][j].toString()); // add text[i][j] after comma
		}
		if(i + 1 < text.length){
			outpt = outpt.concat("\n"); // begin new line, skipping last line of output
		}
	}
	console.log(outpt);
}

