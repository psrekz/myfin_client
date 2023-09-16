import React from "react";

class DefaultDate extends React.Component {
  constructor() {
    super();
    this.state = {
      dateFrom: new Date().toISOString().slice(0, 10),
      dateTo: new Date().toISOString().slice(0, 10),
    };
  }

  selDateFrom = (f) => {
    this.setState({ dateFrom: f.target.value });
  };

  selDateTo = (e) => {
    this.setState({ dateTo: e.target.value });
  };

  render() {
    return (
      <div>
        <center>
          <hr />
          <input
            name="dateFrom"
            type="date"
            value={this.state.dateFrom}
            onChange={this.selDateFrom}
          />
          <input
            name="dateTo"
            type="date"
            value={this.state.dateTo}
            onChange={this.selDateTo}
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
