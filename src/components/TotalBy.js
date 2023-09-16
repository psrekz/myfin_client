import React, { Fragment, useEffect, useState } from "react";
import TotalFood from "./TotalFood";

const TotalBy = () => {
  const [totalBy, setTotalBy] = useState([]);

  const getTotalBy = async () => {
    try {
      const response = await fetch("http://localhost:5001/total-food");
      const jsonData = await response.json();

      setTotalBy(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTotalBy();
  }, []);

  //console.log(expense);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        // data-target={`#id${expense.id}`}
      >
        More
      </button>

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Total By</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div class="modal-body"></div>
          <div>
            <h5>Totally spent for Food:</h5>
            <table class="table table-light table-bordered table-sm text-center">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Sum</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {TotalBy.map((sisky) => (
                  <tr>
                    <td>{sisky.type}</td>
                    <td>{sisky.sum}</td>
                    <td>
                      <button className="btn btn-info" onClick={TotalFood}>
                        Details...
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn"
              data-dismiss="modal"
              // onClick={
              //   (() => setDate(expense.date),
              //   () => setAmount(expense.amount),
              //   () => setCategory(expense.category),
              //   () => setType(expense.type),
              //   () => setSubcategory(expense.subcategory),
              //   () => setExpenseType(expense.expense_type),
              //   () => setCurrency(expense.currency))
              // }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TotalBy;
