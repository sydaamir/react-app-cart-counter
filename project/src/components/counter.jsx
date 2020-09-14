import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={{ marginRight: "2vh" }}>
          {" "}
          {this.formatCount()}{" "}
        </span>
        <button
          className="btn"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger"
          style={{ marginLeft: "2vh" }}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "";
    classes = this.props.counter.value === 0 ? "badge-yellow" : "badge-blue";

    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
