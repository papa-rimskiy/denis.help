import React from "react"; 
import Shop from "./Todo/Shop";
import Info from "./Todo/Info"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route exact path="/">
          <div className="wrapper">
            <Shop/>
          </div>
        </Route>

        <Route exact path="/Info" Component={Info}/>
      </Router>
    )
  }
}

export default App