import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/PortfolioItem.css";
import RestClient from "../Utilities/RestClient.js";
import { HashLink } from "react-router-hash-link";
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
      touchMove: true,
      swipeToSlide: true,
    };
    return (
      <div className="Portfolio-Item-Page-Outter">
        <Link to={this.props.location.backLocation} className="Portfolio-Item-Back">
          <img src={Close} tag="Back"/>
        </Link>
        {this.state.PortfolioItem != null &&
          <div>
            <div className="Portfolio-Item-Title">
              <h1>{this.state.PortfolioItem.Name}</h1>
            </div>
            <Slider className="Carousel" {...settings}>
              {this.state.PortfolioItem.Image != null && this.state.PortfolioItem.Image.map((img, i) => 
                <div className="Carousel-Item" key={i}>
                  <img src={img.Image}/>
                </div>
              )}
              {this.state.PortfolioItem.Video != null && this.state.PortfolioItem.Video.map((vid, i) => 
                <div className="Carousel-Item" key={i}>
                  <iframe title={"Video " + i} src={vid.Video} allowFullScreen></iframe>
                </div>
              )}
            </Slider>
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
