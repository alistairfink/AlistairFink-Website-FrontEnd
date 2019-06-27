import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./Home.js";
import Portfolio from "./Portfolio.js"

class App extends React.Component {
  render() {
    return (
      <Router onUpdate={this.hashLinkScroll}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Portfolio/:PortfolioUuid" component={ () => alert("test") } />
        </div>
      </Router>
    );
  }
}

export default App;
