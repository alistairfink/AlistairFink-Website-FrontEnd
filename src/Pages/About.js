import React from "react";
import "../Css/Shared.css";
import "../Css/About.css";
import RestClient from "../Utilities/RestClient.js";


import Github from "../Resources/Github2.png";
import LinkedIn from "../Resources/LinkedIn2.png";
import Resume from "../Resources/Resume2.png";
import Email from "../Resources/Email2.png";
import Phone from "../Resources/Phone.png";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AboutPic: null,
      AboutDesc: null,
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
      <div id="about">
        <div className={"SharedOutter " + (this.props.smallScreen ? "AboutOutter-Mobile" : "AboutOutter")}>
          <div className={this.props.smallScreen ? "About-Top-Mobile" : "About-Top"}>
            <div className="About-Image">
              {this.state.AboutPic != null &&
                <img src={this.state.AboutPic} alt="Alistair Fink Portrait"/>
              }
            </div>
            <div className="About-Title">
              <h1>Alistair Fink</h1>
              <h3>Software Engineer</h3>
            </div>
          </div>
          <div className="About-Bottom">
            {this.state.AboutDesc != null && this.state.AboutDesc.map((item, i) =>
              <div key={i} className={"AboutDesc"}>
                <p>{item.Content}</p><br/>
              </div>
            )}
            <div className="AboutLinks">
              <a className="AboutLink" href="https://github.com/alistairfink"><img src={Github} alt="Alistair's Github"/>GitHub</a>
              <a className="AboutLink" href="https://www.linkedin.com/in/alistairfink/"><img src={LinkedIn} alt="Alistair's LinkedIn"/>LinkedIn</a>
              <a className="AboutLink" href="https://drive.google.com/file/d/12KtoofbXqJj4QFBQ4gzA0PMsdmMH5wpj/view?usp=sharing"><img src={Resume} alt="Alistair's Resume"/>Resume</a>
              <a className="AboutLink" href="mailto:alistairfink@gmail.com"><img src={Email} alt="alistairfink@gmail.com"/>alistairfink@gmail.com</a>
              <a className="AboutLink" href="tel:289-259-6008"><img src={Phone} alt="289-259-6008"/>(289) 259-6008</a>
            </div>
          </div>
        </div>      </div>
    );
  }
}

export default About;
