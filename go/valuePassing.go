// Call by value and call by reference
package main

import "fmt"

func makeDouble(x *int) {
	*x = (*x) * 2
}

func main() {
	x := 25
	makeDouble(&x)
	fmt.Println(x)
}
