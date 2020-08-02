function loginUser(email, pwd) {
  //回一個promise物件，再把需要執行的async包在裡面
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
  }, 2000);
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
displayUser();
