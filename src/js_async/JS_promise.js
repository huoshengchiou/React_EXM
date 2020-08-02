//promise是一種obj，會return async下的成功或者失敗
const promise = new Promise((resolve, reject) => {
  console.log("get User");
  setTimeout(() => {
    //當成功要啟動resolve
    // resolve({ user: "jack" });
    //失敗時丟出err
    reject(new Error("User not logged in"));
  }, 2000);
});
//拿回成功或失敗後取得的資料
promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
    //如果只想顯示msg
    console.log("只顯示錯誤訊息" + err.message);
  });
