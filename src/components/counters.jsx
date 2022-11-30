import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete } = this.props;

    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter key={counter.id} onDelete={onDelete} counter={counter}>
            <h4>title {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
