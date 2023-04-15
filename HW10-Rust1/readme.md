# Homework 10 Part 2 - Rust

The program reads a .txt file containing four fields: year, title, character, and actor. The program creates a Movie struct with the title,
character, and actor fields, and inserts this movie into a HashMap with the year as the key. The program then prompts the user to input a
year, checks the year against the HashMap, and either returns the data from the movie that corresponds to that year or informs the user
that there was no movie with that year. The program terminates if the user inputs EOF (ctrl + D).

## Setup

Place a `.txt` file containing the movie fields into the program's root directory.

## Running

From the command line:

```
cargo run <filename>.txt
```

Example: `cargo run movies.txt`

