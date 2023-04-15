// Nathan Rowley
// Homework 10 - Rust
// CSCI 320
// 20 April 2023

use std::env;
use std::fs::File;
use std::io::{ self, BufRead };
use std::collections::HashMap;

fn main() {
    let args: Vec<String> = env::args().collect();
    let mut movies = HashMap::new();
    let file = File::open(&args[1]).unwrap();
    let lines = io::BufReader::new(file).lines();
    for wrapped_line in lines {
        let line = wrapped_line.unwrap();
        let parts = line.split(",");
        let coll = parts.collect::<Vec<&str>>();
        let movie = build_movie(coll[1].to_string(), coll[2].to_string(), coll[3].to_string());
        movies.insert(coll[0].to_string(), movie);
    }
    
    loop {
        println!("Enter a year: ");
        let mut uinput = String::new();
        let bytes_read = io::stdin().read_line(&mut uinput).expect("Failed to read line");
        uinput.pop(); // remove invisible trailing newlines so that the check for equality actually passes
        
        if bytes_read == 0 { break; } // exit on ctrl + D
        
        let result = movies.get(&uinput);
        if result.is_some() { 
            let temp: &Movie = result.unwrap(); 
            println!("{}, {}, {}\n", temp.title, temp.character, temp.actor);
        }
        else { println!("No movie found in that year.") }
    }
    
}

fn build_movie(title: String, character: String, actor: String) -> Movie {
    let movie = Movie {
        title,
        character,
        actor
    };
    return movie;
}

struct Movie {
    title: String,
    character: String,
    actor: String
}