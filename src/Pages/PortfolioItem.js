import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/Portfolio.css";
import RestClient from "../Utilities/RestClient.js";
import { HashLink } from "react-router-hash-link";
import Home from "../Resources/Home.png";

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PortfolioItem: null
    };
    this.GetPortfolioItem = this.GetPortfolioItem.bind(this);
    this.LoadPortfolioItemCallback = this.LoadPortfolioItemCallback.bind(this);

    this.GetPortfolioItem();
  }

  componentDidMount() {
  }

  GetPortfolioItem() {
    var restClient = new RestClient();
    restClient.GetPortfolioItem(this.LoadPortfolioItemCallback, this.props.match.params.PortfolioUuid);
  }

  LoadPortfolioItemCallback(json) {
    this.setState({
      PortfolioItem: json
    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default PortfolioItem;
