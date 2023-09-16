import React, { Fragment } from "react";
import "./App.css";

//components

import InputExpense from "./components/InputExpense";
import ListExpenses from "./components/ListExpenses";
import DefaultDate from "./components/DefaultDate";
import Totals from "./components/Totals";
import DatePicker from "./components/DatePicker";
import TotalFood from "./components/TotalFood";
import TotalBy from "./components/TotalBy";

function App() {
  return (
    <Fragment>
      <div class="container-fluid">
        <div class="row">
          <div className="col-lg-3 inputExpense">
            <InputExpense />
            <Totals />
            <TotalFood />
          </div>

          <div className="col-lg-9 expList custom-scrollbar">
            <ListExpenses />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
