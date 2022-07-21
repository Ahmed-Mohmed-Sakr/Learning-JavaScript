let myAccount = {
  name: "ahmed sakr",
  expencess: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expencess += amount;
};

let addIncome = function (account, amount) {
  account.income += amount;
};

let resetAccount = function (account) {
  account.expencess = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  return `Account for ${account.name} has $${
    account.income - account.expencess
  }. $${account.income} in income. $${account.expencess} in expencess.`;
};

addIncome(myAccount, 50000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 6000);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
