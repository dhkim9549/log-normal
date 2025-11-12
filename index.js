function calculateMedian(arr) {
  if (arr.length === 0) {
    return undefined; // Or throw an error for an empty array
  }

  const sortedArr = arr.slice().sort((a, b) => a - b); // Use .slice() to avoid modifying the original array
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 1) {
    return sortedArr[mid];
  } else {
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  }
}

function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0; // Handle empty array case
  }
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return sum / arr.length;
}

async function main() {
  let c = [];

  for (let i = 0; i < 100; i++) {
    c.push(1.0);
  }

  console.log({ c });

  for (let i = 0; i < 10000000000000; i++) {
    c = c.map((e) => {
      let result = 0;
      let r = Math.random();

      let m = 1.02;
      let m2 = 1.02;

      if (r >= 0.5) {
        result = e * m;
      } else {
        result = e / m2;
      }
      return result;
    });

    if (i % 1000000 == 0) {
      // c.sort((a, b) => b - a);
      let avg = calculateAverage(c);
      c = c.map((e) => e / avg);

      let max = Math.max(...c);
      let mid = calculateMedian(c);
      avg = calculateAverage(c);
      console.log({ c, max, mid, avg });
      // await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

main();
