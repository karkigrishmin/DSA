package main

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

func ReverseString(word string) string {
	runeArr := []rune(word)
	result := ""

	for i := len(runeArr) - 1; i >= 0; i-- {
		result += string(runeArr[i])
	}

	return result
}
