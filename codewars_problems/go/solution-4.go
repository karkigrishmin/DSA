package main

import "strings"

/*
Write a function to split a string and convert it into an array of words.
*/
func StringToArray(str string) []string {
	return strings.Split(str, " ")
}
