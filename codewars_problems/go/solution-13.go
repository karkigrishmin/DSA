package main

import (
	"strings"
)

/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
"The greatest victory is that which requires no battle" -->
"battle no requires which that is victory greatest The"

*/

func ReverseWords(str string) string {
	words := strings.Fields(str)
	newWords := make([]string, 0, len(words))

	for i := len(words) - 1; i >= 0; i-- {
		newWords = append(newWords, words[i])
	}

	return strings.Join(newWords, " ")
}
