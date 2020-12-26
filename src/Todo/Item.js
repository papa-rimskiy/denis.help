import React from "react";
import Header from "./Header"
import { withRouter } from "react-router";

class Item extends React.Component {
  

  render () {

    return (
      <div className="Item">
        <Header />
      </div>
    )
  }
}

export default withRouter(Item)


