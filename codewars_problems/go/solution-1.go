package main

import "fmt"

func main() {
	fmt.Println(Solution("244", "1"))
	fmt.Println(MakeUpperCase("hello"))
	fmt.Println(FakeBin("5347"))
	fmt.Println(StringToArray("Hello World"))
	fmt.Println(Contamination("abc", "z"))
	fmt.Println(Points([]string{"1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"}))
	fmt.Println(DNAtoRNA("GCAT"))
	fmt.Println(Greet("Grishmin"))
	fmt.Println(AbbrevName("Grishmin Karki"))
	fmt.Println(MyString("GRISH").IsUpperCase())
	fmt.Println(RepeatStr(2, "Hello"))
	fmt.Println(ReverseString("hello"))
	fmt.Println(ReverseWords("hello world"))
	fmt.Println(RemoveChar("hello world"))
	fmt.Println(Feast("chickadee", "chocolate cake"))
	fmt.Println(countSheep(4))
	fmt.Println(NoSpace("hello world"))
}

// Given 2 strings, a and b, return a string of the form short+long+short,
// with the shorter string on the outside and the longer string on the inside.
// The strings will not be the same length, but they may be empty ( zero length ).

/*
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/
func Solution(a, b string) string {
	if len(a) > len(b) {
		return b + a + b
	}

	return a + b + a
}
