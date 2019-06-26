import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "../Css/Shared.css";
import "../Css/Education.css";
import RestClient from "../Utilities/RestClient.js";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.LoadAbout = this.LoadAbout.bind(this);
    this.LoadAboutCallback = this.LoadAboutCallback.bind(this);

    this.LoadAbout();
  }

  LoadAbout() {
    var restClient = new RestClient();
    restClient.GetAbout(this.LoadAboutCallback);
  }

  LoadAboutCallback(json) {
    this.setState({
      AboutPic: json.Image,
      AboutDesc: json.Description,
    });
  }

  render() {
    return (
      <div id="education">
        <div className="TriangleTopRight"></div>
        <div className="SharedOutter ">
        Test
        </div>
        <div className="TriangleBottomRight"></div>
      </div>
    );
  }
}

export default Education;
