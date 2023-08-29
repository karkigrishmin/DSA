package main

import "unicode"

/*
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

type MyString string

func (s MyString) IsUpperCase() bool {
	// Your code here!

	for _, eachCharacter := range s {
		if !unicode.IsUpper(eachCharacter) && unicode.IsLetter(eachCharacter) {
			return false
		}
	}

	return true
}
