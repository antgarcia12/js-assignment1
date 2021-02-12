/*
create a new constructor function called RightTriangle

it should create an object that has the following properties:

- height, a number
- base, a number
- a method, getArea, returns the area for this specific RightTriangle object
(look up the formula for the area of a right triangle, .5*base*height)

upload your code to Github

let smallTriangle = new RightTriangle(3, 6); // base of 3, height of 6
let bigTriangle = new RightTriangle(10, 20);

let smallTriangleArea = smallTriangle.getArea();
let bigTriangleArea = bigTriangle.getArea();

if (smallTriangleArea == 9) {
    console.log("Small triangle test passed")
}
if (bigTriangleArea == 100) {
    console.log("Big triangle test passed")
}
*/

function RightTriangle(height, base) {

    this.height = height;
    this.base = base;

    this.getArea = function() {
        console.log(.5*base*height);
    }


let smallTriangle = new RightTriangle(3, 6); 
let bigTriangle = new RightTriangle(10, 20);
if (smallTriangle == 9) {
    console.log("Small triangle test passed")
}
if (bigTriangle == 100) {
    console.log("Big triangle test passed")
}

}


smallTriangle.getArea();
bigTriangle.getArea();

console.log(smallTriangle);
console.log(bigTriangle);