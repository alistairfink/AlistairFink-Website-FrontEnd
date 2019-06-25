import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./Home.js";

class App extends React.Component {
  render() {
    return (
      <Router onUpdate={this.hashLinkScroll}>
        <div>
          <Redirect from="/" to="/Home" />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Portfolio" component={ () => alert("LER") } />
          <Route exact path="/Portfolio/:PortfolioUuid" component={ () => alert("LER") } />
        </div>
      </Router>
    );
  }
}

export default App;
