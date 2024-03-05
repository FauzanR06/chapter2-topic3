// Normal function
function calcSquare(length) {
  return length ** 2;
}

function calcSquareNoReturn(length) {
  console.log(length ** 2);
  // return undefined;
}

const square = calcSquare(30);
console.log("square", square);

const square2 = calcSquareNoReturn(10);
// undefined
console.log("square2", square2);

// Arrow Function
const calcTriangle = (length, height) => {
  return (length * height) / 2;
};

const triangle = calcTriangle(10, 10);
console.log("triangle", triangle);

// Currying function
const calcTriangleCurry = (length = (height) => {
  return (length * height) / 2;
});

const triangle2 = calcTriangleCurry(10, 20);
console.log("triangle2", triangle2);

// Anonymous function
((name) => {
  console.log(name);
})("Fauzan");
