const addToFrontOrBack = (arr, value, isFront) => {
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
  return new Array(numOfValue).fill(value)
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(arr.length / 2, 0, value)
};

const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
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
