import React from "react";
import "../Css/Shared.css";
import "../Css/Experience.css";
import RestClient from "../Utilities/RestClient.js";
import Moment from "moment";
import Arrow from "../Resources/Arrow.png";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	Experience: null,
    };
    this.LoadExperience = this.LoadExperience.bind(this);
    this.LoadExperienceCallback = this.LoadExperienceCallback.bind(this);
    this.Toggle = this.Toggle.bind(this);

    this.LoadExperience();
  }

  LoadExperience() {
    var restClient = new RestClient();
    restClient.GetExperience(this.LoadExperienceCallback);
  }

  LoadExperienceCallback(json) {
    json.forEach((val) => {
      this.setState({
        [val.Uuid]: false
      });
    });
    this.setState({
    	Experience: json.reverse(),
    });
  }

  Toggle(uuid) {
    console.log((this.state)[uuid])
    this.setState({
      [uuid]: !(this.state)[uuid],
    });
  }

  render() {
    return (
      <div id="experience" className="SharedOutter Experience-Outter">
	      <div className="Experience-Title">
	        <h1>Experience</h1>
	      </div>
	      <div className="Experience-List">
		      {this.state.Experience != null && this.state.Experience.map((experience, i) => 
            <div key={i} className="Experience-Item" onClick={() => this.Toggle(experience.Uuid)}>
              <div className={"Experience-Item-Top " + (!(this.state)[experience.Uuid] ? "Experience-Item-Top-Open" : "Experience-Item-Top-Closed")}>
                <img src={experience.LogoImage} tag={experience.Company + " Logo"}/>
                <h1>{experience.Company}</h1>
                <h2>{experience.Position}</h2>
                <h3>{`${Moment(experience.StartDate).format("MMM YYYY")}${experience.EndDate != null && Moment(experience.StartDate).isBefore(experience.EndDate) ? ` - ${Moment(experience.EndDate).format("MMM YYYY")}` : " - Present"}`}</h3>
              </div>
              <div className="Experience-Arrow">
                <img className={"Experience-Arrow-Image " + (!(this.state)[experience.Uuid] ? "Experience-Arrow-Image-Down" : "Experience-Arrow-Image-Up")} src={Arrow} tag="Expand" />
              </div>
              <div className={"Experience-Item-Bottom " + (!(this.state)[experience.Uuid] ? "Experience-Item-Bottom-Closed" : "Experience-Item-Bottom-Open")}>
                {experience.Content.map((content, j) => 
                  <div key={i + "" + j}>
                    <p>{content.Content}</p>
                  </div>
                )}
              </div>
            </div>
	      	)}
      	</div>
      </div>
    );
  }
}

export default Experience;
