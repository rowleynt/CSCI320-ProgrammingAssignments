// CSCI 320 Assignment 6 - Kotlin
// Nathan Rowley
// 2 March 2023

import java.io.File
import java.io.InputStream
import java.util.Scanner

fun main(args: Array<String>) {
    val inputStream: InputStream = File(args[0]).inputStream()
    val reader = Scanner(System.`in`)
	val name_map = mutableMapOf<String, String>() // initialize map to contain ititials (key) and names (value)
	inputStream.bufferedReader().forEachLine { // for every line in inputStream, put initials (key) and name (value) into map
        name_map.put(getInitials(it), it)
	}
    println("Enter initials or press 'cntl-d' to exit: ")
    while(true) { // while loop that runs indefinitely
        try { // pressing cntl-d throws an error so a try/catch is used to prevent it 
            val input = reader.nextLine() // check this against initials map
            // check map for initials key, print full name if found, ignore case
            if (name_map.containsKey(input.uppercase())) println(name_map[input.uppercase()])
            else println("Not Found") // print "Not Found" if initials not in map
        } catch(e: Exception) { break } // end try/catch
    }
}

// get initials from given name
fun getInitials(name: String): String {
	var initials = "" // initialize variable for initials as empty string
    // splits name at space, takes first letter of each new string (first/last name) and concatinates them together into initials
	for (item in name.split(" ")) initials = initials + item.subSequence(0, 1)
	return initials
}


// kotlinc hw6.kt -include-runtime -d hw6.jar && java -jar hw6.jar file.txt