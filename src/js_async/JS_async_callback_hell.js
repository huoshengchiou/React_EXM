//加入一個callback(做為一個para傳入function的function，會在後期執行)
function loginUser(email, pwd, callback) {
  //模擬遠端資料傳送
  setTimeout(() => {
    // return { userEmail: email };
    //用callback包裹
    callback({ userEmail: email });
  }, 5000);
}

function getUservideo(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}

//兩層的callback
const User1 = loginUser("XXXX@gmail.com", 12345, (user) => {
  console.log(user); //等待執行完成再invoke一個function把值調回來

  //當拿回第一個值後，再invoke另一個callback拿到video
  getUservideo(user.userEmail, (video) => {
    console.log(video);
  });
});

//以上便是callback hell形成

console.log(User1); //非同步而持續undefined
