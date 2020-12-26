import React from "react";
import Delai from "./Delai";
import Item from "./Item"

class Shop extends React.Component {
  render () {
    if (localStorage.getItem("token")) {
      return <Item />
    }

    return <Delai />
  }
}

export default Shop
