import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  
  render() {
      const { onReset,counters, onDelete, onIncrement} = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn-danger"
          style={{ marginBottom: "2vh", marginTop: "2vh" }}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
