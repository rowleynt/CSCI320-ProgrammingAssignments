# Homework 4 - Haskell

The `.hs` file contains the following 7 functions:
`piece'`: Implements a piecewise function that returns a value based on the defined criteria.
`exp'`: Accepts two values and raises the first value to the power of the second value.
`f'`: Helper function to be used with `comp'`. Squares every value in a given list and returns a new list.
`g'`: Helper function to be used with `comp'`. Sums every value in a given list.
`comp'`: Given a list, executes a composition of `f'` and `g'` in the form `g(f(x))` where `x` is a given list. 
`count`: Given a list, counts the number of list elements that satisfy some user-defined criteria, utilizing guard syntax.
`count'filter`: Given a list, counts the number of list elements that satisfy some user-defined criteria, utilizing the `filter` function.
`count'lc`: Given a list, counts the number of list elements that satisfy some user-defined criteria, utilizing a list comprehension.
`closure`: Given a list, counts the number of elements in said list which are greater than 10 using the above `count'lc` function.
`powers'`: Given a number, computes the powers of said number until a specified stopping point (using `take` function)
`count'`: Given a list, counts the number of list elements that satisfy some user-defined criteria, utilizing guard syntax. Filters out
          the common subexpression `count fn xs` using a `where` clause.

## Setup

Navigate to the folder containing `hw4.hs` and open the terminal. Type the commands `ghci` and `:l hw4.hs`.

## Running

From the command line:
`piece' <value>`
`exp' <value1> <value2>`
`comp' <list>`
`closure <list>`
`take <endpoint (e.g.: 4, 10, etc.)> $ powers' <value>`
For the following, the user must define some function to serve as the criteria for counting.
Ex: `isneg x = x < 0`, `ispos x = x > 0`, etc.
Running the functions:
`count <fn name (isneg, ispos, etc.)> <list>`
`count'filter <fn name> <list>`
`count'lc <fn name> <list>`
`count' <fn name> <list>`

## Notes:

I could not get `count`, `count'`, or `closure` to return an actual count value instead of a sublist of items which match the 
user-defined filtering function. 
