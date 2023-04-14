# Homework 8 - Go

The program reads a .csv file of actors, places said actors into a struct, creates a list of actors, and sorts said list using the field provided by the user.

## Setup

Place a `.txt` file containing the list of actors into the same directory as the `hw8.go` file. The file will have the format: `lastname, firstname, series`.

## Running

From the command line:

```
go run hw8.go <filename>.txt <field to sort on>
```

The fields to sort on are: 1 -> lastname, 2 -> firstname, 3 -> series
Example: `go run hw8.go actors.txt 1` will sort actors.txt using the lastname field
