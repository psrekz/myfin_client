import React, { Fragment, useState } from "react";

const EditExpense = ({ expense }) => {
  const [date, setDate] = useState(expense.date);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [type, setType] = useState(expense.type);
  const [subcategory, setSubcategory] = useState(expense.subcategory);
  const [currency, setCurrency] = useState(expense.currency);
  const [expense_type, setExpenseType] = useState(expense.expense_type);

  const updateDate = async (e) => {
    e.preventDefault();
    try {
      const body = {
        date,
        amount,
        category,
        type,
        subcategory,
        currency,
        expense_type,
      };
      const response = await fetch(
        `http://localhost:5001/expensess/${expense.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  //console.log(expense);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${expense.id}`}
      >
        Edits
      </button>

      <div class="modal" id={`id${expense.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Expense</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={
                  (() => setDate(expense.date),
                  () => setAmount(expense.amount),
                  () => setCategory(expense.category),
                  () => setType(expense.type),
                  () => setSubcategory(expense.subcategory),
                  () => setCurrency(expense.currency),
                  () => setExpenseType(expense.expense_type))
                }
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                required
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="Subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              />
              <br></br>
              <select
                type="text"
                className="form-control"
                placeholder="Expense Type"
                value={expense_type}
                onChange={(e) => setExpenseType(e.target.value)}
              >
                <option value="Expense Type">Select Expense Type</option>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
              </select>
              <br></br>
              <select
                name="currency"
                className="form-control"
                placeholder="Currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="Currency">Select Currency</option>
                <option value="UAH">UAH</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn"
                data-dismiss="modal"
                onClick={
                  (() => setDate(expense.date),
                  () => setAmount(expense.amount),
                  () => setCategory(expense.category),
                  () => setType(expense.type),
                  () => setSubcategory(expense.subcategory),
                  () => setExpenseType(expense.expense_type),
                  () => setCurrency(expense.currency))
                }
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => updateDate(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditExpense;
