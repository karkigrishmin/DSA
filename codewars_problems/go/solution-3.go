package main

import (
	"strconv"
)

/*
Given a string of digits, you should replace any digit below 5 with '0' and
any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
func FakeBin(x string) string {
	result := ""

	for _, a := range x {
		eachCharacter, _ := strconv.Atoi(string(a))

		if eachCharacter >= 5 {
			result += "1"
		} else {
			result += "0"
		}
	}

	return result
}
