import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "../Css/Shared.css";
import "../Css/Experience.css";
import RestClient from "../Utilities/RestClient.js";
import Moment from 'moment';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	Experience: null,
    };
    this.LoadExperience = this.LoadExperience.bind(this);
    this.LoadExperienceCallback = this.LoadExperienceCallback.bind(this);

    this.LoadExperience();
  }

  LoadExperience() {
    var restClient = new RestClient();
    restClient.GetExperience(this.LoadExperienceCallback);
  }

  LoadExperienceCallback(json) {
    this.setState({
    	Experience: json,
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
		      	<div key={i} className="Experience-Item">
		      		<div className="Experience-Item-Image">
		      			<img src={experience.LogoImage} tag={experience.Company + " Logo"}/>
		      		</div>
		      		<div className="Experience-Item-Content">
		      			<h2>{experience.Position}</h2>
		      			<h3>{experience.Company} - {experience.Location}</h3>
		      			<h3>{`${Moment(experience.StartDate).format("MMMM YYYY")}${experience.EndDate != null ? ` - ${Moment(experience.EndDate).format("MMMM YYYY")}` : " - Present"}`}</h3>
		      			<ul>
		      				{experience.Content.map((content) => 
		      					<li className="Experience-Item-Content-List-Item" key={i + "" + content.SortOrder}>{content.Content}</li>
	      					)}
		      			</ul>
		      		</div>
		      	</div>
	      	)}
      	</div>
      </div>
    );
  }
}

export default Experience;
