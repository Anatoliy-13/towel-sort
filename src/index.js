const arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 12, 11 ] ];

module.exports = function towelSort (matrix) {
  if (undefined === matrix || 0 === matrix.length) return [];
  for (let i = 1; i < matrix.length; i += 2) {
      matrix[i] = matrix[i].reverse();
  }
  return [].concat.apply([], matrix);
}
