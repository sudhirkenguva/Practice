package main

import "fmt"

func main() {
	var listOfNumbers [5]int
	listOfNumbers[0] = 25
	listOfNumbers[1] = 52
	listOfNumbers[2] = 250
	listOfNumbers[3] = 275
	listOfNumbers[4] = 285

	for i := 0; i < 5; i++ {
		fmt.Println(listOfNumbers[i])
	}

	for ind, elem := range listOfNumbers {
		fmt.Println("index", ind, ": elem", elem)
	}
}
