# Homework 2 - TypeScript

The program takes the name of a csv text file and a number (0 to n where n is the total number of fields in the file) as inputs on the command line, 
sorts the file by the field specified by the given number using merge sort, and prints the sorted file on the command line.

## Setup

The TypeScript program will be run after setup from the command line using `node.js` which is available from https://nodejs.org/en/. 
In order to compile the TypeScript program to a runnable JavaScript format, `npm` must be installed alongside `node.js`, which should be done automatically. 
After installing `node.js` and `npm`, open the command prompt/terminal in the directory where `hw2.ts` is saved, and run the following commands:
`npm i -D typescript`
`npm i --save-dev @types/node`
The above commands will install the typescript into the local directory as well as allow the typescript program to read text files.
To compile `hw2.ts` to runnable JavaScript code, use the following command:
`npx tsc hw2.ts`
An example `input.txt` file is provided for sorting.

## Running

From the command line:

```
node hw2.js <filename>.txt <# of field to sort>
```

Example: `node hw2.js input.txt 0`

## Notes:

The implementation of merge sort used in the code is adapted from a JavaScript example from `https://www.geeksforgeeks.org/merge-sort/`
