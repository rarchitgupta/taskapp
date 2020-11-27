const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(1, 4);
  const sumTwo = await add(8, 2);
  return sumTwo;
};

doWork()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log(error);
  });
