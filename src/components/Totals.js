import React, { Fragment, useEffect, useState } from "react";

import EditExpense from "./EditExpense";
import moment from "moment";
import DefaultDate from "./DefaultDate";
import InputExpense from "./InputExpense";
import TotalFood from "./TotalFood";
import TotalBy from "./TotalBy";

function sayHello() {
  alert("Button works!");
}

const Totals = () => {
  const [totalMonth, setTotalMonth] = useState({ sum: null });
  const [totalIncomes, setTotalIncomes] = useState({ sum: null });
  const [totalCategory, setTotalCategory] = useState([]);

  const getTotalMonth = async () => {
    try {
      const responsed = await fetch("http://localhost:5001/total-month");
      const jsonData = await responsed.json();

      setTotalMonth(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTotalCategory = async () => {
    try {
      const response = await fetch("http://localhost:5001/total-category");
      const jsonData = await response.json();

      setTotalCategory(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTotalIncomes = async () => {
    try {
      const response = await fetch("http://localhost:5001/total-incomes");
      const jsonData = await response.json();

      setTotalIncomes(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTotalMonth();
  }, []);

  useEffect(() => {
    getTotalIncomes();
  }, []);

  useEffect(() => {
    getTotalCategory();
  }, []);

  return (
    <Fragment>
      <div>
        <h1 className="text-right mt-5 expenseHeader pt-4">Totals</h1>
        <h5>Totally earned: {totalIncomes.sum} </h5>
      </div>
      <div>
        <h5>Totally spent by category:</h5>
        <table class="table table-light table-bordered table-sm text-center">
          <thead>
            <tr>
              <th>Category</th>
              <th>Sum</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {totalCategory.map((sisky) => (
              <tr>
                <td>{sisky.category}</td>
                <td>{sisky.sum}</td>
                <td>
                  {/* <button className="btn btn-info" onClick={TotalBy}>
                    Details...
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5>Total spent: {totalMonth.sum} </h5>
      </div>
    </Fragment>
  );
};

export default Totals;
