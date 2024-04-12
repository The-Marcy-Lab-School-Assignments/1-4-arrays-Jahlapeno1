const addToFrontOrBack = (arr, value, isFront) => {
  /** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
  if (isFront === true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
};

const reverseString = (str) => {
  return str.split('').reverse().join('')
};

const newArrayFullOf = (value, numOfValue) => {
  let newArray = new Array(numOfValue).fill(value)
  return newArray
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(arr.length / 2, 0, value)
};

const deleteFromMiddle = (arr) => {
  arr.splice(arr.length / 2, 1)
};
/** FEEDBACK: Same here! You could just return arr[index] === value. */
const isRightIndex = (arr, value, index) => {
  if (arr[index] === value) {
    return true
  } else {
    return false
  }
};

const roundAllNumsDown = (arr) => {
  const roundedArr = []
  for (let num of arr) {
    roundedArr.push(Math.floor(num))
  }
  return roundedArr
};

const getAllYCoordinates = (arrOfCoords) => {
  const yCoords = []
  for (let coord of arrOfCoords) {
    yCoords.push(coord[1])
  }
  return yCoords
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
