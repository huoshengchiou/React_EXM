import React from "react";

function Try_recursion() {
  const countdown = (n) => {
    for (let i = n; i > 0; i--) {
      console.log(i);
    }
    console.log("finish countdown");
  };

  const countdownRecursion = (n) => {
    if (n <= 0) {
      return console.log("finish countdown");
    }
    console.log(n);

    countdownRecursion(n - 1);
  };

  const sumUp = (n, total = 0) => {
    if (n <= 0) {
      return total;
    }
    return n - 1, total + n;
  };

  // tree structure

  const printChildren = (t) => {
    if (t.children.length === 0) {
      return;
    }
    t.children.forEach((child) => {
      console.log(child.name);
      printChildren(child);
    });
  };

  const tree = {
    name: "jack",
    children: [
      {
        name: "mary",
        children: [],
      },
      {
        name: "jill",
        children: [
          {
            name: "mary",
            children: [],
          },
        ],
      },
    ],
  };

  return <></>;
}

export default Try_recursion;
