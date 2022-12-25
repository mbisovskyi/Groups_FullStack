//Function that returns new Array of numbers
function arrayRange(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
}

const arrayMethods = {
  arrayRange,
};

export default arrayMethods;
