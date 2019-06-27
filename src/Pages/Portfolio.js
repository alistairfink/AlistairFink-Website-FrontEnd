import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/Portfolio.css";
import RestClient from "../Utilities/RestClient.js";
import { HashLink } from "react-router-hash-link";
import Home from "../Resources/Home.png";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Portfolio: null
    };
    this.LoadPortfolio = this.LoadPortfolio.bind(this);
    this.LoadPortfolioCallback = this.LoadPortfolioCallback.bind(this);

    this.LoadPortfolio();
  }

  componentDidMount() {
    window.scrollTo(0,0); 
  }

  LoadPortfolio() {
    var restClient = new RestClient();
    restClient.GetPortfolio(this.LoadPortfolioCallback);
  }

  LoadPortfolioCallback(json) {
    let years = {};
    json.forEach((element) => {
      let year = (new Date(element.Year)).getFullYear()
      if(!years[year]) {
        years[year] = [element]
      } else {
        years[year].push(element)
      }
    })

    this.setState({
      Portfolio: years
    });
  }

  render() {
    return (
      <div>
        <Link to={"/"} className="Portfolio-Back">
          <img src={Home} tag="Home"/>
          <h2>Home</h2>
        </Link>
        <div className="Portfolio-TopLevel">
          {this.state.Portfolio != null && Object.keys(this.state.Portfolio).map((year, i) =>
            <div>
              <h1 className="Portfolio-YearTitle">{year}</h1>
              <div className="Portfolio-Item-List">
                {this.state.Portfolio[year].map((portfolioItem, i) => 
                  <Link to={"/portfolio/" + portfolioItem.Uuid} key={i} style={{textDecorationLine: 'none'}}>
                    <div className="Project">
                      <img src={portfolioItem.Thumbnail}/>
                      <p>{portfolioItem.Name}</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          )}
          <div className="Portfolio-Title">
            <h1>Portfolio</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
