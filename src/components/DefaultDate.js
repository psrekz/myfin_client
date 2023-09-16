import React from "react";

class DefaultDate extends React.Component {
  constructor() {
    super();
    this.state = {
      dateDef: new Date().toISOString().slice(0, 10),
    };
  }

  selDateDef = (f) => {
    this.setState({ dateDef: f.target.value });
  };

  render() {
    return (
      <div>
        <center>
          <hr />
          <input
            className="form-control"
            name="dateDef"
            type="date"
            value={this.state.dateDef}
            onChange={this.selDateDef}
          />
          <hr />
          {/* <h2>{this.state.dateFrom}</h2>
          <h2>{this.state.dateTo}</h2> */}
        </center>
      </div>
    );
  }
}
export default DefaultDate;
