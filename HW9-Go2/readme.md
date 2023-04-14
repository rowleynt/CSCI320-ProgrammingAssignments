# Homework 9 - Go

The program reads a .txt file containing website urls, navigates to those urls, and computes and prints the url, length of the website body, and the website title (if it has one).

## Setup

Place a `.txt` file containing the list of urlsinto the same directory as the `hw9.go` file.

## Running

From the command line:

```
go run hw9.go <filename>.txt
```

Example: `go run hw8.go urls.txt`

## Notes

Wait groups take much longer to terminate if the GET request returns an error, but the program otherwise seems to work as intended.
