# Assignment 7 - Kotlin #

### *Nathan Rowley - CSCI320 - 16 March 2023* #

## *Part 2: Syntax Processing* # 

a.

b. Derivation

| Production |                     |                                                                                                                                          |
|:----------:|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|     a)     | \<fun\> -->         | 'fun' <ident='SomeFunNow'> \<block\>                                                                                                     |
|     b)     | \<block\> -->       | 'fun' <ident='SomeFunNow'> '{' \<stmt\> { \<stmt\> } '}'                                                                                 |
|     c)     | \<stmt\>  -->       | 'fun' <ident='SomeFunNow'> '{' \<stmt\> { \<while_stmt\> } '}'                                                                           |
|     f)     | \<while_stmt\>  --> | 'fun' <ident='SomeFunNow'> '{' \<stmt\> { 'while' '(' \<ident='ixd'\> \<relop='>='\> \<const=0\> ')' \<block\> } '}'                     |
|     b)     | \<block\>  -->      | 'fun' <ident='SomeFunNow'> '{' \<stmt\> { 'while' '(' \<ident='ixd'\> \<relop='>='\> \<const=0\> ')' '{' \<stmt\> { \<stmt\> } '}' } '}' |


c.



## *Part 3: Kotlin Programming* #

## Setup
In the command line:

```
kotlinc hw7.kt -include-runtime -d hw7.jar
```

## Running

In the command line:

```
java -jar hw7.jar <list of words>
```

where the list of words is a sequence of words separated by spaces.

## Notes: