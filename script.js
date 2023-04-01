// a2 + b2 = c2
const isRectangularTriangle = (x1, x2, x3) => {
  if (typeof x1 !== 'number') {
    console.log('Input is not a number');
    return;
  } else if (typeof x2 !== 'number') {
    console.log('Input is not a number');
    return;
  } else if (typeof x3 !== 'number') {
    console.log('Input is not a number');
    return;
  }
  const numbers = [x1, x2, x3].sort((a, b) => {
    return a - b;
  });

  const a2 = numbers[0];
  const b2 = numbers[1];
  const c2 = numbers[2];

  if (Math.pow(a2, 2) + Math.pow(b2, 2) === Math.pow(c2, 2)) {
    console.log(`true`);
    return true;
  } else {
    console.log(
      `From the given lengths of the segments it is impossible to build a right triangle`
    );
    return false;
  }
};

isRectangularTriangle(6, 8, 10);
isRectangularTriangle(6, 8, '10');
