module.exports = function getPositiveKeysOfBoolset(boolset) {
  let output = [];
  for (let i = 1; i < boolset.length; i += 2) {
    boolset[i] === true && output.push(boolset[i-1]);
  }
  return output;
}
