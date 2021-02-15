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

// function RightTriangle(height, base) {

//     this.height = height;
//     this.base = base;

//     this.getArea = function() {
//         return this.base * this.height * .5; 

//     }

//     /*
//       add another method called longestSide.
//        if the base of this RightTriangle is greater 
//        than the height, log the string "Base is longer".

//        if the height of this RightTriangle is greater than 
//        the base, log the string "Height is longer".

//        if both are equal, log the string 
//        "This right triangle can't exist."  
//     */

//     this.longestSide = function () {
//         if (this.height > this.base) {
//             console.log("Base is longer");
//         }

//         if (this.height < this.base) {
//             console.log("Height is longer");
//         }

//         if (this.height === this.base) {
//             console.log("This right triangle can't exist")
//         }
//     }

// }



// let smallTriangle = new RightTriangle(3, 6); 
// let bigTriangle = new RightTriangle(10, 20);



// // let smallTriangleArea = smallTriangle.getArea();
// // let bigTriangleArea = bigTriangle.getArea();

// let smallTriangleArea = smallTriangle.longestSide();
// let bigTriangleArea = bigTriangle.longestSide();


// if (smallTriangleArea === 9) {
//     console.log("Small triangle test passed")
// }
// if (bigTriangleArea === 100) {
//     console.log("Big triangle test passed")
// }


/*
0. Write a constructor function for an object
called User that takes in the following inputs
and stores them as properties:
- username, a string
- password, a string

1. Add a method to your constructor function called
changePassword. It should take in one input, a string
representing a new password. It does not return anything,
but it changes the value of the  password property to 
become the input provided.

2A. Add a property to your constructor function
called oldPasswords. It should be an empty array.

2B. Modify your changePassword method to do an additional task:
store the previous value of the password property inside 
the oldPasswords array.
    hint: use the .push() method 


    3. Modify your changePassword to perform some safety checks.
When the changePassword method is called, loop through
each element in the oldPasswords array. If the newPassword
is equal to any of the old passwords, log a message to the user
indicating they can't use that password.

Otherwise, change the password as normal.

*/

function User(username, password, oldPasswords) {

    this.username = username;
    this.password = password;

    this.oldPasswords = [];





    this.changePassword = function(newPassword) {
        this.oldPasswords.push(this.password);

        for (let i = 0; i < this.oldPasswords.length; i++) {
        
            if (this.password === this.oldPasswords){
                console.log("This password cannot be used. Please try again");
            }

            else {
                this.password = newPassword;
                console.log("test");   
            }
        }
    
    }
}

console.clear();
let anthony = new User("antgarcia014", "password1234")
anthony.changePassword("antwav");
anthony.changePassword("password1234");
console.log(anthony);


