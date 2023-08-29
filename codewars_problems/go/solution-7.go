package main

import "strings"

/*
Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
*/

func DNAtoRNA(dna string) string {
	return strings.Replace(dna, "T", "U", -1)
}
