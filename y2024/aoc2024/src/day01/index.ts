import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let sum = 0;
  // Parse input into 2 arrays of numbers
  // 1. Put all numbers in one consolidated array, split them by 3 spaces and then split by newline
  // 2. Iterate the consolidated array and remove the even indexes and put them in a separate array
  const allNumbers = input.split("   ").flatMap((line) => line.split("\n"));
  const evenIdxArray = allNumbers.filter((_, i) => i % 2 === 0).sort((a, b) => +a - +b);
  const OddIdxArray = allNumbers.filter((_, i) => i % 2 !== 0).sort((a, b) => +a - +b);

  // Difference between the two arrays for each index and sum them up
  for (let i = 0; i < evenIdxArray.length; i++) {
    let max = Math.max(+evenIdxArray[i], +OddIdxArray[i]);
    let min = Math.min(+evenIdxArray[i], +OddIdxArray[i]);
    sum += max - min;
  }
  console.log(sum);
  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
