import run from "aocrunner";


const parseInput = (rawInput: string) => rawInput;

function isReportSafe(report: number[]): boolean {
  if (report.length < 2) return false;

  // Determine initial direction (increase or decrease)
  let direction: 'increasing' | 'decreasing' | null = null;

  for (let i = 1; i < report.length; i++) {
    const prev = report[i - 1];
    const current = report[i];
    const diff = current - prev;

    // Check difference constraints
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    // Determine direction if not set
    if (direction === null) {
      if (diff > 0) {
        direction = 'increasing';
      } else if (diff < 0) {
        direction = 'decreasing';
      } else {
        // diff == 0: Neither increasing nor decreasing
        return false;
      }
    } else {
      // Check if direction is consistent
      if (direction === 'increasing' && diff <= 0) return false;
      if (direction === 'decreasing' && diff >= 0) return false;
    }
  }

  return true;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let safeCount = 0;
  // REQUIREMENTS
  // 1. Split input by newline
  // 2. Split each line by Spaces for each report and convert to number
  // 3. Considered safe if the level is ascending order or descending order, must not be random. If random, it is not safe
  // 4. Each level must increase or decrease by at least 1 but at most 3
  // 5. Count the number of safe reports
  // 6. Return the number of safe reports
  const reports = input.split("\n").map((report) => report.split(" ").map(Number));
  for (const report of reports) {
    if (isReportSafe(report)) {
      safeCount++;
    }
  }
  return safeCount;
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



