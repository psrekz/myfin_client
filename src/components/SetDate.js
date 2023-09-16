import React from "react";

const SetDate = () => {
  const [date, dateDef] = new (Date().toISOString().slice(0, 10))();
  console.log(dateDef);

  const selDateDef = (e) => {
    setState;
  };

  return (
    <div>
      <center>
        <hr />
        <input
          className="form-control"
          name="dateDef"
          type="date"
          value={e.state.dateDef}
          onChange={e.selDateDef}
        />
        <hr />
        {/* <h2>{this.state.dateFrom}</h2>
        <h2>{this.state.dateTo}</h2> */}
      </center>
    </div>
  );
};

export default SetDate;
