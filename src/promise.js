let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve("ok");
  } else {
    reject("fail");
  }
});

p.then((msg) => {
  console.log(msg);
}).catch((err) => {
  console.log(err);
});

function funcPromise() {
  return new Promise((resolve, reject) => {
    const a = true;
    if (a) {
      resolve({ one: 1 });
    } else {
      reject({ two: 2 });
    }
  });
}

funcPromise()
  .then((r) => console.log(r))
  .catch((err) => console.log(err));

const recordOne = new Promise((resolve, reject) => {
  resolve("1");
});

const recordTwo = new Promise((resolve, reject) => {
  resolve("2");
});

const recordThree = new Promise((resolve, reject) => {
  resolve("3");
});
Promise.all([recordOne, recordTwo, recordThree]).then((msg) =>
  console.log(msg)
);

Promise.race([recordOne, recordTwo, recordThree]).then((msg) =>
  console.log(msg)
);

//multiple

function makeReq() {
  return new Promise((resolve, reject) => {
    const b = 1;
    if (b === 1) {
      resolve("right");
    } else {
      reject("err");
    }
  });
}

function processReq(r) {
  return new Promise((resolve, reject) => {
    resolve("process right" + r);
  });
}

makeReq()
  .then((r1) => {
    console.log(r1);
    return processReq(r1);
  })
  .then((r) => console.log(r))
  .catch((err) => err);

async function doThing() {
  try {
    const res1 = await makeReq();
    const res2 = await processReq(res1);
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
}
doThing();
