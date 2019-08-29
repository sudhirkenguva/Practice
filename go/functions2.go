// Function returning multiple values
package main

import "fmt"

func squareAndCube(a int) (int, int) {
	return a * a, a * a * a
}

func main() {
	square, cube := squareAndCube(2)
	fmt.Println("Square", square, " cube", cube)
}
