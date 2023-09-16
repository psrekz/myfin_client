import React, { Fragment, useEffect, useState } from "react";

import EditExpense from "./EditExpense";
import moment from "moment";
import DefaultDate from "./DefaultDate";
import InputExpense from "./InputExpense";

const ListExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  //delete expense function

  const deleteExpense = async (id) => {
    try {
      const deleteExpense = await fetch(
        `http://localhost:5001/expensess/${id}`,
        {
          method: "DELETE",
        }
      );

      // filter to filter out deleted ids
      setExpenses(expenses.filter((expense) => expense.id !== id));

      console.log(deleteExpense);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getExpenses = async () => {
    try {
      //const response = await fetch("http://192.168.31.89:5001/expensess");
      const response = await fetch("http://localhost:5001/expensess");
      const jsonData = await response.json();

      setExpenses(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <Fragment>
      {/* Expenses */}
      <table class="table table-dark table-striped mt-5 text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Subcategory</th>
            <th>Currency</th>
            <th>Expense Type</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((siski) => (
            <tr key={siski.id}>
              <td>{moment(siski.date).format("DD MMM")}</td>
              <td>{siski.amount}</td>
              <td>{siski.category}</td>
              <td>{siski.type}</td>
              <td>{siski.subcategory}</td>
              <td>{siski.currency}</td>
              <td>{siski.expense_type}</td>
              <td>
                <EditExpense expense={siski} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteExpense(siski.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListExpenses;
