function double3(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

let arr=[2,3,6,1]

const double4= arr => arr.map(num =>num *2);
//to run
double4(arr);


function squareAndFindEvens3(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(squares => square % 2 === 0)