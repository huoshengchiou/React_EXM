import React from "react";
import { asyncScheduler, of } from "rxjs";

console.log("start");
of(1, 2, 3, asyncScheduler).subscribe({
  next: (result) => console.log(result),
  complete: () => console.log("complete"),
});
console.log("end");

const funcA = (response) => {
  console.log(response);
  return new Promise(() => {
    setTimeout(() => {
      console.log("funcA");
    }, 2000);
  });
};

const funcB = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   console.log("funcB");
    // }, 5000);
    resolve("funcB");
  });
};

const allWith = async () => {
  let response = await funcB();
  let final = await funcA(response);
};

const AsyncPlay = () => {
  //   setTimeout(() => {
  //     console.log("setTimeOut");
  //   }, 3000);
  //   allWith();
  //   funcB()
  //     .then(() => {
  //       console.log("讀完");
  //       return funcA();
  //     })
  //     .catch(() => {
  //       console.log("錯誤");
  //     });
  //   const PromiseArray = [
  //     Promise.resolve(100),
  //     Promise.reject(null),
  //     Promise.resolve("Data release"),
  //     Promise.reject(new Error("Something went wrong")),
  //   ];
  //   Promise.allSettled(PromiseArray)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));

  return <></>;
};

export default AsyncPlay;
