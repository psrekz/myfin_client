import React, { Fragment, useEffect, useState } from "react";

import EditExpense from "./EditExpense";
import moment from "moment";
import DefaultDate from "./DefaultDate";
import InputExpense from "./InputExpense";

function sayHello() {
  alert("Button works!");
}

const TotalFood = () => {
  const [totalFood, setTotalFood] = useState([]);

  const getTotalFood = async () => {
    try {
      const response = await fetch("http://localhost:5001/total-food");
      const jsonData = await response.json();

      setTotalFood(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTotalFood();
  }, []);

  return (
    <Fragment>
      <div>
        <h5>Totally spent for Food:</h5>
        <table class="table table-light table-bordered table-sm text-center">
          <thead>
            <tr>
              <th>Type</th>
              <th>Sum</th>
              {/* <th>Details</th> */}
            </tr>
          </thead>
          <tbody>
            {totalFood.map((sisky) => (
              <tr>
                <td>{sisky.type}</td>
                <td>{sisky.sum}</td>
                <td>
                  {/* <button className="btn btn-info" onClick={sayHello}>
                    Details...
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TotalFood;
