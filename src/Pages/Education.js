import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "../Css/Shared.css";
import "../Css/Education.css";
import RestClient from "../Utilities/RestClient.js";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Education: null
    };
    this.LoadEducation = this.LoadEducation.bind(this);
    this.LoadEducationCallback = this.LoadEducationCallback.bind(this);

    this.LoadEducation();
  }

  LoadEducation() {
    var restClient = new RestClient();
    restClient.GetEducation(this.LoadEducationCallback);
  }

  LoadEducationCallback(json) {
    this.setState({
      AboutPic: json.Image,
      AboutDesc: json.Description,
    });
  }

  render() {
    return (
      <div id="education" className="SharedOutter2 Education-Outter">
        <div className="Education-Title">
          <h1>Education</h1>
        </div>
      </div>
    );
  }
}

export default Education;
