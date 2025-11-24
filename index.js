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

  for (let i = 0; i < 31; i++) {
    let obj = {};
    obj.id = i;
    obj.val = 1.0;
    c.push(obj);
  }

  let cL = c.length;

  console.log({ c });

  for (let i = 0; true; i++) {
    c = c.map((e) => {
      let r = Math.random();

      let s = 1.001;

      if (r >= 0.5) {
        e.val *= s;
      } else {
        e.val /= s;
      }

      return e;
    });

    if (i % 4000000 == 0) {
      let c2 = c.slice();
      c2.sort((a, b) => b.val - a.val);
      c = c2;

      let cVal = c.map((e) => e.val);
      let max = Math.max(...cVal);
      let min = Math.min(...cVal);
      let [max1, max2] = [c2[0], c2[1]];
      let mid = calculateMedian(cVal);
      let avg = calculateAverage(cVal);
      let c_length = c.length;

      console.log({ c, max1, max2, avg, mid, min, c_length, cL, i });
      // await new Promise((r) => setTimeout(r, 2000));

      c = c.filter((e) => e.val > Math.pow(10, -1));

      while (c.length < 31) {
        let obj = {};
        obj.id = cL++;
        obj.val = 1.0;
        c.push(obj);
      }
    }
  }
}

main();
