const expenses = [];

const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const dateInput = document.getElementById("dateInput");
const noteInput = document.getElementById("noteInput");

const addBtn = document.getElementById("addBtn");

const addExpenses = () => {
  let amountValue = amountInput.value;
  let categoryValue = categoryInput.value;
  let dateValue = dateInput.value;
  let noteValue = noteInput.value;

  console.log(amountValue, categoryValue, dateValue, noteValue);

  const expense = {
    amount: amountValue,
    category: categoryValue,
    date: dateValue,
    note: noteValue,
  };

  expenses.push(expense);
  console.log(expenses);
  renderExpenses();
};

addBtn.addEventListener("click", addExpenses);

const expenseList = document.getElementById("expenseList");

const renderExpenses = () => {
  // Clear previous list
  expenseList.innerHTML = "";
  // Loop through expenses array

  expenses.forEach((exp) => {
    const li = document.createElement("li");
    li.textContent = `${exp.date} - ${exp.category} - ₹${exp.amount} - ${exp.note}`;
    expenseList.appendChild(li);
  });
};
