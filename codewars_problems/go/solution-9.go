package main

import "strings"

/*
Write a function to convert a name into initials. This kata strictly takes
two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H
*/

func AbbrevName(name string) string {
	strArr := strings.Split(name, " ")
	firstName := strArr[0]
	lastName := strArr[1]

	return strings.ToUpper(string(firstName[0])) + "." + strings.ToUpper(string(lastName[0]))
}
