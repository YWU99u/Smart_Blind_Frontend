import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,

    // imageUrl: "https://picsum.photos/200",
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    //obj.method(); We can use 'this'
    //function(); Cannot use 'this', 'this' will return undefine
  };
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <span className={this.get_Badge_Classes()}>{this.formatCount()}</span>

        {/* This classname is bootstrap m-2: margin 2 */}

        {/* In between the curly bracket, there can be any expression, including functions. Render value dynamically */}

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  get_Badge_Classes() {
    let classes = "badge m-2 badge-";

    classes += this.state.count === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
