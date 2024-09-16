function stringCalculator(input) {
  if (input === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    delimiter = new RegExp(parts[0][2]);
    input = parts[1];
  }

  const numbers = input.split(delimiter);
  const sum = numbers.reduce((total, num) => total + parseInt(num, 10), 0);

  return sum;
}

export default stringCalculator;
