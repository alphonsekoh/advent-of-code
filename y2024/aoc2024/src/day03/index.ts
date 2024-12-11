import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;


const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const regex = /mul\(\s*(\d+)\s*,\s*(\d+)\s*\)/g
  const matches = input.matchAll(regex);
  let result: Array<number> = [];
  for (const match of matches) {
    // match[0] is the full match
    // match[1] is the first capture group for the first number
    // match[2] is the second capture group for the second number

    result.push(parseInt(match[1]) * parseInt(match[2]));
  }
  // Sum all the results in the array
  return result.reduce((acc, curr) => acc + curr, 0);
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
