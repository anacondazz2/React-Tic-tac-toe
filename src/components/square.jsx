import React, { Component } from "react";

class Square extends Component {
   render() {
      return (
         <button
            className="square"
            style={this.props.should_highlight ? { backgroundColor: "lime" } : {}}
            onClick={() => {
               this.props.onClick();
            }}
         >
            {this.props.value}
         </button>
      );
   }
}

export default Square;
