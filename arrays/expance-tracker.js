const account = {
  name: "Ahmed sakr",
  expenses: [],
  income: [],

  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },

  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },

  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;

    this.expenses.forEach(function (iteam) {
      totalExpenses += iteam.amount;
    });

    this.income.forEach(function (iteam) {
      totalIncome += iteam.amount;
    });

    return `${account.name} has a balance of $${
      totalIncome - totalExpenses
    }. $${totalIncome} in income. $${totalExpenses} in expenses`;
  },
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
