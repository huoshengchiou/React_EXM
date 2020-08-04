function loginUser(email, pwd) {
  //回一個promise物件，再把需要執行的async包在裡面
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(resolve, reject);
      resolve({ userEmail: email });
    }, 5000);
  });
}

function getUservideo(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

//因為會回傳一個promise obj用then接
loginUser("jack", 12345).then((result) => getUservideo(result.userEmail));

// console.log(User1); //非同步而持續undefined

//更易讀的處理方式async //promise的語法糖，提升易讀性

// const user = loginUser();
// const uservideo = getUservideo();

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("get things from youtube");
    resolve({ video: [1, 2, 3] });
  }, 2000);
});
const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("get things from fb");
    resolve({ video: [3, 4, 5] });
  }, 5000);
});
//需要同時間完成後才會回傳結果，這種寫法不是一個一個接續完成
Promise.all([yt, fb]).then((result) => console.log(result));

//async寫法

// function displayUser(){

// }
// displayUser()

// async function displayUser() {

//   const logUser = await loginUser("Jack", 12345);
//   const videos = await getUservideo(logUser.userEmail);
//   console.log("final videos" + videos);
// }
// displayUser();

async function displayUser() {
  //最後利用try catch修飾處理機制
  try {
    const logUser = await loginUser("Jack", 12345);
    const videos = await getUservideo(logUser.userEmail);
    console.log("final videos" + videos);
  } catch (err) {
    console.log(" Videos don't exist there");
  }
}
// displayUser();

// 宣告 promise 建構式
let newPromise = new Promise((resolve, reject) => {
  // 傳入 resolve 與 reject，表示資料成功與失敗
  let ran = parseInt(Math.random() * 2); // 隨機成功或失敗
  console.log("Promise 開始");
  if (ran) {
    setTimeout(function () {
      // 3 秒時間後，透過 resolve 來表示完成
      resolve("3 秒時間(fulfilled)");
    }, 3000);
  } else {
    // 回傳失敗
    reject("失敗中的失敗(rejected)");
  }
});

newPromise
  .then((data) => {
    // 成功訊息 (需要 3 秒)
    console.log(data);
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err);
  });

// Promise.all(): 此方法可以同時執行大量 Promise 物件，並且在 “全部” 完成後回傳陣列。
// Promise.race(): 此方法執行大量 Promise 物件，但僅會回傳最快回應的結果。

// // 宣告 promise 建構式
// let newPromise1 = new Promise((resolve, reject) => {
//   let ran = parseInt(Math.random() * 5000); // 隨機成功或失敗
//   setTimeout(function(){
//     resolve('隨機時間完成');
//   }, ran);
// });

// let newPromise2 = new Promise((resolve, reject) => {
//   setTimeout(function(){
//     resolve('2 秒完成');
//   }, 2000);
// });

// let newPromise3 = new Promise((resolve, reject) => {
//   setTimeout(function(){
//     resolve('3 秒完成');
//   }, 3000);
// });

// let newPromise4 = new Promise((resolve, reject) => {
//   reject('失敗');
// });

// Promise.all([newPromise1, newPromise2, newPromise3, newPromise4]).then((data)=> {
//   // 一次性同時回傳成功訊息，回傳以上三個數值的陣列
//   console.log(data);
// }).catch( err => {
//   // 失敗訊息 (立即)
//   console.log(err)
// });

// Promise.race([newPromise1, newPromise2, newPromise3]).then((data)=> {
//   // 僅會回傳一個最快完成的 resolve 或 reject
//   console.log('race', data);
// }).catch( err => {
//   // 失敗訊息 (立即)
//   console.log(err)
// });
