// jshint esversion: 7

// arrAvg function
let arrAvg = (arr) => {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
  total += arr[i];
  var avg = total / arr.length;
} return avg;
};

// function arrMax
let arrMax = (arr) => {
let maxSoFar = arr[0].length;
arr.forEach(elem) => {
  if (elem.length > maxSoFar) {
  maxSoFar = elem.length;
}
}
return maxSoFar
}

//function 'sumEvens' accepts array and returns even number
let sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++){
    if (numStr[i] % 2 === 0){
      sum = sum + numStr[i];
    }
  }
  return sum;
};
