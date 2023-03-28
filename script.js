// a2 + b2 = c2
const isRectangularTriangle = (x1, x2, x3) => {
  const nums = [x1, x2, x3].sort((a, b) => {
    return a - b;
  });

  const a2 = nums[0];
  const b2 = nums[1];
  const c2 = nums[2]

  if (Math.pow(a2, 2) + Math.pow(b2, 2) === Math.pow(c2, 2)) {
    true
    console.log(`true`)
  } else {
    false
    console.log(`From the given lengths of the segments it is impossible to build a right triangle`);
  }
};

isRectangularTriangle(6, 8, 10);
