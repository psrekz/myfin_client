import React, { Fragment, useState } from "react";

const ExpenseDetails = ({ expense }) => {
  const [date, setDate] = useState(expense.date);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [subcategory, setSubcategory] = useState(expense.subcategory);
  const [currency, setCurrency] = useState(expense.currency);
  const [expense_type, setExpenseType] = useState(expense.expense_type);

  //console.log(expense);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${expense.id}`}
      >
        Edit
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
                placeholder="Subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="Type"
                value={expense_type}
                onChange={(e) => setExpenseType(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="Currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn"
                data-dismiss="modal"
                onClick={
                  ((() => setDate(expense.date),
                  () => setAmount(expense.amount),
                  () => setCategory(expense.category),
                  () => setSubcategory(expense.subcategory),
                  () => setExpenseType(expense.expense_type)),
                  () => setCurrency(expense.currency))
                }
              >
                Cancel
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
