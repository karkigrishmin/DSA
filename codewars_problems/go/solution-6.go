package main

import "strings"

/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented
by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number
of points our team (x) got in the championship by the rules given above.

*/

func Points(games []string) int {
	pointOfX := 0

	for _, eachGameScore := range games {
		scoreArr := strings.Split(eachGameScore, ":")
		if scoreArr[0] > scoreArr[1] {
			pointOfX += 3
		} else if scoreArr[0] < scoreArr[1] {
			pointOfX += 0
		} else {
			pointOfX += 1
		}
	}

	return pointOfX
}
