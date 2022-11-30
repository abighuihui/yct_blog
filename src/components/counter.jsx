import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   //tags: ["tag1", "tag2", "tag3"],
  // };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold",
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleDelete = () => {
  //   const { count, tags } = this.state; //新建一个，不直接操作state
  //   tags.splice(0, 1);
  //   if (count > 0) {
  //     //删除逻辑
  //     this.setState({
  //       count: count - 1,
  //       tags,
  //     });
  //   } else {
  //     console.log("count is lower than 0!");
  //   }
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  componentWillUnmount() {
    console.log("counter unmounted");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        {/*<button className="btn btn-danger btn-sm">Delete</button>*/}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Delete2
        </button>

        {/*this.state.tags.length === 0 && "Please create a new tags!"*/}
        {/*this.renderTags()*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

//<span style={this.styles} className='brdge badge-primary m-2'>{this.state.count}</span>

//47          {/*onClick={() => this.handleDelete({ id: 1 })*/}
