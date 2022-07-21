let myAccount = {
  name: "ahmed sakr",
  expencess: 0,
  income: 0,
};

let otheraccount = myAccount;
otheraccount.income = 1000;

let addExpense = function (account, amount) {
  account.expencess += amount;
  console.log(account);
};

addExpense(myAccount, 2.5);
console.log(myAccount);
