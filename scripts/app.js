const addExpenseSection = document.getElementById("addExpenseSection");
const expenseHistorySection = document.getElementById("expenseHistorySection");
const reportsSection = document.getElementById("reportsSection");
const expenseForm = document.getElementById("expenseForm");
const expenseTableBody = document.getElementById("expenseTableBody");
showSection(addExpenseSection);
document.getElementById("addExpenseBtn").addEventListener("click", () => {
  showSection(addExpenseSection);
});

document.getElementById("viewExpensesBtn").addEventListener("click", () => {
  showSection(expenseHistorySection);
  renderExpenseTable();
});

document.getElementById("reportsBtn").addEventListener("click", () => {
  showSection(reportsSection);
  generateCategoryChart();
});

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const expense = {
    amount: parseFloat(document.getElementById("amount").value),
    category: document.getElementById("category").value,
    date: document.getElementById("date").value,
    description: document.getElementById("description").value,
  };
  saveExpense(expense);
  alert("Expense Added!");
  expenseForm.reset();
});

function renderExpenseTable() {
  const expenses = getExpenses();
  expenseTableBody.innerHTML = expenses
    .map(
      (expense, index) => `
    <tr>
      <td>${expense.date}</td>
      <td>${expense.category}</td>
      <td>₹${expense.amount}</td>
      <td>${expense.description || "-"}</td>
      <td>
        <button onclick="deleteExpense(${index})">Delete</button>
      </td>
    </tr>
  `
    )
    .join("");
}

function showSection(section) {
  [addExpenseSection, expenseHistorySection, reportsSection].forEach((sec) =>
    sec.classList.add("hidden")
  );
  section.classList.remove("hidden");
}
