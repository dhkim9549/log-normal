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
    let obj = {};
    obj.id = i;
    obj.val = 1.0;
    c.push(obj);
  }

  let cL = c.length;

  console.log({ c });

  for (let i = 0; i < 10000000000000; i++) {
    c = c.map((e) => {
      let r = Math.random();

      let sigma = 0.01;
      let mu = 0.00005;

      if (r >= 0.5) {
        e.val += e.val * mu + e.val * sigma;
      } else {
        e.val += e.val * mu - e.val * sigma;
      }

      return e;
    });

    if (i % 4000000 == 0) {
      c = c.filter((e) => e.val > Math.pow(1.0, 0.0));

      let c2 = c.slice();
      c2.sort((a, b) => b.val - a.val);
      c = c2;

      let cVal = c.map((e) => e.val);
      let max = Math.max(...cVal);
      let min = Math.min(...cVal);
      let max2 = c2[1];
      let mid = calculateMedian(cVal);
      let avg = calculateAverage(cVal);

      let cT = c.slice(0, 10);

      console.log({ c, max, max2, avg, mid, min });
      //       await new Promise((r) => setTimeout(r, 2000));

      for (let i = 0; i < 5; i++) {
        let obj = {};
        obj.id = cL++;
        obj.val = 1.0;
        c.push(obj);
      }
    }
  }
}

main();
