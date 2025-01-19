let chartInstance = null;
function generateCategoryChart() {
  const canvas = document.getElementById("categoryChart");

  // Check if there is an existing chart instance
  if (chartInstance) {
    // Destroy the existing chart before creating a new one
    chartInstance.destroy();
  }

  // Reinitialize the chart
  const ctx = canvas.getContext("2d");
  const expenses = getExpenses();
  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  //const ctx = document.getElementById("categoryChart").getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(categoryData),
      datasets: [
        {
          data: Object.values(categoryData),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ],
        },
      ],
    },
  });
}
