const getExpenses = () => JSON.parse(localStorage.getItem("expenses")) || [];

const saveExpense = (expense) => {
  const expenses = getExpenses();
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

const deleteExpense = (index) => {
  const expenses = getExpenses();
  expenses.splice(index, 1);
  console.log(expenses, "expences");
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenseTable();
  generateCategoryChart();
};
