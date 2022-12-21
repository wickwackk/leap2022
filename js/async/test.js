function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 3000);
  });

  let bacon_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bacon ready");
    }, 2000);
  });
  let combined_promise = Promise.all([
    coffee_promise,
    egg_promise,
    bacon_promise,
  ]);

  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}
morning();
