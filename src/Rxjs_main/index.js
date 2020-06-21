import React from "react";
import {
  Observable,
  Subject,
  asapScheduler,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent,
} from "rxjs";
import { map, filter, scan } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export default function Rxjs_main() {
  const source$ = new Observable((sub) => {
    sub.next(() => {
      return { me: "Sheng" };
    });
  });

  //next值直接轉到subscribe的val
  source$.subscribe((val) => console.log(val));
  //依序但有非同步問題
  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
    console.log("here");
  });

  console.log("just before subscribe");
  observable.subscribe({
    next(x) {
      console.log("got value " + x);
    },
    error(err) {
      console.error("something wrong occurred: " + err);
    },
    complete() {
      console.log("done");
    },
  });
  console.log("just after subscribe");

  //   just before subscribe
  //  got value 1
  //  got value 2
  //  got value 3
  // here
  //  just after subscribe

  //simple next

  return <></>;
}
