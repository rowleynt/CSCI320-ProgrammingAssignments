// CSCI 320 Assignment 7 - Kotlin
// Nathan Rowley
// 16 March 2023

fun main(args: Array<String>) {
	var inlist = mutableListOf<String>()
	for(item in args) inlist.add(item)
	println("Average length of words in list: " + avg_word_len(inlist))
	println("Standard deviation of length of words in list: " + std_dev_len(inlist))
}

fun avg_word_len(wordList: List<String>): Double {
	var lenSum = wordList.sumOf { it.length }
	return lenSum.toDouble() / wordList.size
}

fun std_dev_len(wordList: List<String>): Double {
	var summation = wordList.sumOf { Math.pow((it.length - avg_word_len(wordList)), 2.0) }
	return Math.sqrt((summation / wordList.size))
}

// DELETE THIS BEFORE SUBMITTING
// kotlinc hw7.kt -include-runtime -d hw7.jar && java -jar hw7.jar hello how are you I am very good thanks
