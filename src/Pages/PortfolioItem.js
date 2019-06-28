import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Css/PortfolioItem.css";
import RestClient from "../Utilities/RestClient.js";
import Close from "../Resources/Close.png";
import Slider from "react-slick";
import Linkify from 'react-linkify';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PortfolioItem: null
    };
    this.GetPortfolioItem = this.GetPortfolioItem.bind(this);
    this.LoadPortfolioItemCallback = this.LoadPortfolioItemCallback.bind(this);
    this.smallScreen = this.smallScreen.bind(this);

    this.GetPortfolioItem();
  }

  componentDidMount() {
    this.smallScreen();
    window.scrollTo(0,0);
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

  smallScreen() {
    if(window.innerWidth < 1200){
      this.setState({smallScreen: true})
    } else {
      this.setState({smallScreen: false})
    }
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      variableWidth: true,
      adaptiveHeight: true,
      centerMode: false,
      touchMove: true,
      swipe: true,
      draggable: true,
      focuseOnSelect: false,
      swipeToSlide: true,
    };
    return (
      <div className="Portfolio-Item-Page-Outter">
        <Link to={this.props.location.backLocation} className="Portfolio-Item-Back">
          <img src={Close} alt="Back"/>
        </Link>
        {this.state.PortfolioItem != null &&
          <div>
            <div className={"Portfolio-Item-Title" + (this.state.smallScreen ? " Portfolio-Item-Title-Mobile" : "")}>
              <h1>{this.state.PortfolioItem.Name}</h1>
            </div>
            {!(this.state.PortfolioItem.Image == null && this.state.PortfolioItem.Video == null) &&
              <Slider className={this.state.smallScreen ? "Carousel-Mobile" : "Carousel"} {...settings}>
                {this.state.PortfolioItem.Image != null && this.state.PortfolioItem.Image.map((img, i) => 
                  <div className="Carousel-Item" key={i}>
                    <img src={img.Image} alt={this.state.PortfolioItem.Name + " Image " + i}/>
                  </div>
                )}
                {this.state.PortfolioItem.Video != null && this.state.PortfolioItem.Video.map((vid, i) => 
                  <div className="Carousel-Item" key={i}>
                    <iframe title={"Video " + i} src={vid.Video} allowFullScreen></iframe>
                  </div>
                )}
              </Slider>
            }
            {this.state.PortfolioItem.Description != null && this.state.PortfolioItem.Description.map((desc, i) => 
              <div key={i} className="Portfolio-Item-Description">
                <Linkify><p className="Portfolio-Item-Description-Text">{desc.Content}</p></Linkify><br/>
              </div>
            )}
          </div>
        }
      </div>
    );
  }
}

export default PortfolioItem;
