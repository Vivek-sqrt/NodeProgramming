const rect = require("./logger");
function solveRectangle(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        "The area of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.area()
      );
      console.log(
        "The perimeter of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.perimeter()
      );
    }
  });
  console.log("This statement after the call to rect()");
}

solveRectangle(5, 6);
solveRectangle(7, 0);
solveRectangle(-5, -2);
solveRectangle(9, 8);
