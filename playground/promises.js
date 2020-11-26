const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 3000);
  });
};

add(1, 2)
  .then((sum) => {
    console.log(sum);
  })
  .catch((error) => {});
