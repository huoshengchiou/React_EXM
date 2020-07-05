const numToString = (num) => {
  //用null判斷，當num 為undefined 時避免error
  if (num !== null) {
    if (num < 0) {
      return ``;
    } else {
      return num.toString();
    }
  }
};

//pro
const numToString2 = (num) => {
  if (num === null) return;
  if (num < 0) return ``;
  return num.toString();
};

// edge case
// 當func完成後會嘗試送入不同的parameter來檢測是否有bug
// console.log(test());
// console.log(test(item1));
// console.log(test(undefied, item2));
// console.log(test([], {}));
// console.log(test([], {ship:0}));

// const TAX_RATE = 1.1
// const SHIPPING_DEFAULT = 5

// function calculateTotal(items, options = {}) {
//   if (items == null || items.length === 0) return 0

//   let total = 0
//   items.forEach(item => {
//     total += item.price * item.quantity
//   })
//   total = total - total * (options.discount || 0)
//   total = total * TAX_RATE
//   if (options.shipping !== 0) {
//     total = total + (options.shipping || SHIPPING_DEFAULT)
//   }
//   return total
// }

// const testItems = [
//   { price: 15, quantity: 2 },
//   { price: 20, quantity: 1 },
//   { price: 5, quantity: 4 }
// ]

// // console.log(calculateTotal())
// // console.log(calculateTotal(testItems))
// // console.log(calculateTotal(undefined, {}))
// // console.log(calculateTotal([], {}))
// console.log(calculateTotal(testItems, {}))
// console.log(calculateTotal(testItems, { shipping: 0 }))
// console.log(calculateTotal(testItems, { discount: .75 }))
// console.log(calculateTotal(testItems, { shipping: 12 }))
// pro
const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 5;

function calculateTotal(
  items,
  //如果沒有值就給預設,拆解處理
  { shipping = SHIPPING_DEFAULT, discount = 0 } = {}
) {
  if (items == null || items.length === 0) return 0;

  const itemCost = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const discountRate = 1 - discount;

  //所有的運作簡化成一行完成
  return itemCost * discountRate * TAX_RATE + shipping;
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
];

// // console.log(calculateTotal())
// // console.log(calculateTotal(testItems))
// // console.log(calculateTotal(undefined, {}))
// // console.log(calculateTotal([], {}))
// console.log(calculateTotal(testItems, {}))
// console.log(calculateTotal(testItems, { shipping: 0 }))
// console.log(calculateTotal(testItems, { discount: .75 }))
// console.log(calculateTotal(testItems, { shipping: 12 }))

// hierarchy
// const readline = require('readline')
// const readlineInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readlineInterface.question("What is your name? ", name => {
//   readlineInterface.question("What is your job? ", job => {
//     readlineInterface.question("How old are you? ", age => {
//       console.log("Hello " + name + ". You are a " + age + " year old " + job + ".")
//       readlineInterface.close()
//     })
//   })
// })

// const readline = require('readline')
// const readlineInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// async function main() {
//   const name = await askQuestion(readlineInterface, "What is your name? ")
//   const job = await askQuestion(readlineInterface, "What is your job? ")
//   const age = await askQuestion(readlineInterface, "How old are you? ")

//   console.log(`Hello ${name}. You are a ${age} year old ${job}.`)
//   readlineInterface.close()
// }
// main()

// function askQuestion(readlineInterface, question) {
//   return new Promise(resolve => {
//     readlineInterface.question(question, answer => {
//       resolve(answer)
//     })
//   })
// }

const askQuestion = require("./pro/askQuestion");

async function main() {
  const name = await askQuestion("What is your name? ");
  const job = await askQuestion("What is your job? ");
  const age = await askQuestion("How old are you? ");

  console.log(`Hello ${name}. You are a ${age} year old ${job}.`);
}
main();
// ---/----------額外寫出去--------------\----
const readline = require("readline");

function askQuestion(question) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
}

module.exports = askQuestion;

// ---\------------------------/----

// --------------fat function---------------
// const { updateUser, createUser } = require("./api/users");
// //獨立讓function只做一件事情
// function saveUser(user) {
//   if (user.id == null) {
//     console.log("Created User");
//     createUser(user);
//   } else {
//     console.log("Updated User");
//     updateUser(user);
//   }
// }

// function validateUser(user) {
//   return [
//     ...validateUsername(user.username),
//     ...validatePassword(user.password),
//   ];
// }

// function validateUsername(username) {
//   const errors = [];
//   if (!username) errors.push("Username is required");
//   if (username != null && username.length < 3)
//     errors.push("Username must be 3 or more characters");
//   return errors;
// }

// function validatePassword(password) {
//   const errors = [];
//   if (!password) errors.push("Password is required");
//   if (password != null && password.length < 8)
//     errors.push("Password must be 8 or more characters");
//   return errors;
// }

// const user = {
//   username: "WDS",
//   password: "password",
// };

// const errors = validateUser(user);
// if (errors.length > 0) {
//   errors.forEach((error) => console.error(error));
//   return;
// }

// saveUser(user);

//所有的logi拆解出去
const { updateUser, createUser } = require("./api/users");
const { validationMessages, printErrors } = require("./pro/validation");

function saveUser(user) {
  if (user.id == null) {
    console.log("Created User");
    createUser(user);
  } else {
    console.log("Updated User");
    updateUser(user);
  }
}

function validateUser(user) {
  const validations = {
    username: {
      required: true,
      length: 3,
    },
    password: {
      required: true,
      length: 8,
    },
  };

  const errors = validationMessages(validations, user);

  return {
    valid: Object.values(errors).every((messages) => messages.length === 0),
    errors: errors,
  };
}

const user = {
  id: 1,
  username: "WDS",
  password: "password",
};

const { errors, valid } = validateUser(user);
if (valid) {
  saveUser(user);
} else {
  printErrors(errors);
}

// -----------往外寫的function-----------

function validationMessages(validations, object) {
  return Object.entries(validations).reduce(
    (errors, [property, requirements]) => {
      errors[property] = [];
      if (requirements.required) {
        const errorMessage = validateRequiredMessage(object[property]);
        if (errorMessage) errors[property].push(errorMessage);
      }

      if (requirements.length) {
        const errorMessage = validateLengthMessage(
          object[property],
          requirements.length
        );
        if (errorMessage) errors[property].push(errorMessage);
      }

      return errors;
    },
    {}
  );
}

function validateLengthMessage(value, length) {
  if (value == null) return;
  if (value.length >= length) return;

  return `must be ${length} or more characters`;
}

function validateRequiredMessage(value) {
  if (value) return;

  return "is required";
}

function printErrors(errors) {
  Object.entries(errors).forEach(([property, messages]) => {
    messages.forEach((message) => {
      console.error(`${property} ${message}`);
    });
  });
}

module.exports = {
  validationMessages,
  printErrors,
};
