import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Css/Portfolio.css";
import RestClient from "../Utilities/RestClient.js";
import Home from "../Resources/Home.png";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Portfolio: null,
      smallScreen: false
    };
    this.LoadPortfolio = this.LoadPortfolio.bind(this);
    this.LoadPortfolioCallback = this.LoadPortfolioCallback.bind(this);
    this.smallScreen = this.smallScreen.bind(this);

    this.LoadPortfolio();
  }

  componentDidMount() {
    this.smallScreen();
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

  smallScreen() {
    if(window.innerWidth < 1200){
      this.setState({smallScreen: true})
    } else {
      this.setState({smallScreen: false})
    }
  }

  render() {
    return (
      <div>
        <Link to={"/"} className="Portfolio-Back">
          <img src={Home} alt="Home"/>
        </Link>
        <div className="Portfolio-TopLevel">
          {this.state.Portfolio != null && Object.keys(this.state.Portfolio).map((year, i) =>
            <div key={year}>
              <h1 className="Portfolio-YearTitle">{year}</h1>
              <div className="Portfolio-Item-List">
                {this.state.Portfolio[year].map((portfolioItem, i) => 
                  <Link to={{pathname:"/portfolio/" + portfolioItem.Uuid, backLocation: "/portfolio"}} key={i} style={{textDecorationLine: 'none'}}>
                    <div className={!this.state.smallScreen ? "Project" : "Project-Mobile"}>
                      <img src={portfolioItem.Thumbnail} alt={portfolioItem.Name + " Thumbnail"}/>
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
