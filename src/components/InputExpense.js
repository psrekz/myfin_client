import React, { Fragment, useState } from "react";
import DatePicker from "./DatePicker";

// $(document).keypress(function () {
//   alert("key pressed!!!");
// });

// function callDatePopup(key) {
//   switch (key) {
//     case "d":
//       console.log(`Key ${key} was pressed!`);
//       break;
//   }
// }

// document.addEventListener("keypress", function (event) {
//   callDatePopup(event.key);
//   // console.log(buttonInnerHTML);
//   // console.log(event.key);
// });

// document.addEventListener("click");

// function openDate(key) {}

const InputExpense = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [date, dateDef] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [currency, setCurrency] = useState("");
  const [expense_type, setExpType] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        date,
        amount,
        category,
        subcategory,
        type,
        currency,
        expense_type,
      };
      console.log(body);

      const response = await fetch(
        // "http://192.168.31.89:5001/expensess",
        "http://localhost:5001/expensess",

        {
          method: "POST",
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

  return (
    <Fragment>
      <div className="expenseForm">
        <h1 className="text-left mt-5 expenseHeader"> Input Expense </h1>
        <form className="d-flex flex-column mt-5" onSubmit={onSubmitForm}>
          <input
            id="datePopup"
            required
            className="form-control"
            type="date"
            onChange={(e) => dateDef(e.target.value)}
          />
          <br></br>
          <input
            required
            className="form-control"
            type="text mt-5"
            placeholder="How Much?"
            onChange={(e) => setAmount(e.target.value)}
          />
          <br></br>
          <input
            required
            className="form-control"
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <br></br>
          <input
            className="form-control"
            type="text"
            placeholder="Type"
            onChange={(e) => setType(e.target.value)}
          />
          <br></br>
          <input
            required
            className="form-control"
            type="text"
            placeholder="Subcategory"
            onChange={(e) => setSubcategory(e.target.value)}
          />
          <br></br>
          <select
            className="form-control"
            placeholder="Exp type"
            onChange={(e) => setExpType(e.target.value)}
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
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Currency">Select Currency</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <br></br>
          <button className="btn btn-success btn-lg" style={{ width: 160 }}>
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputExpense;
