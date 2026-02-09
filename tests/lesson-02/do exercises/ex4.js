const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a height: ", (input) => {
  const height = parseFloat(input);
  const base = height - 100;

  const idealWeight = (base * 9) / 10;
  const maxWeight = base;
  const minWeight = (base * 8) / 10;

  console.log("Ideal weight:", idealWeight, "kg");
  console.log("Max weight:", maxWeight, "kg");
  console.log("Min weight:", minWeight, "kg");

  rl.close();
});
