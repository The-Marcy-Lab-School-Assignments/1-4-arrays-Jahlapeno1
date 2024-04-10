const uppercaseAll = (...theWords) => {
  const uppercaseArr = []
  for (const word of theWords) {
    uppercaseArr.push(word.toUpperCase())
  }
  return uppercaseArr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
