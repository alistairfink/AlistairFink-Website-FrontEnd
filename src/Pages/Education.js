import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "../Css/Shared.css";
import "../Css/Education.css";
import RestClient from "../Utilities/RestClient.js";
import Moment from "moment";

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
      Education: json
    });
  }

  render() {
    return (
      <div id="education" className="SharedOutter2 Education-Outter">
        <div className="Education-Title">
          <h1>Education</h1>
        </div>
        <div className="Education-List">
          {this.state.Education != null && this.state.Education.map((education, i) => 
            <div key={i} className={this.props.smallScreen ? "Education-Item-Mobile" : "Education-Item"}>
              <div className={this.props.smallScreen ? "Education-Item-Image-Mobile" : "Education-Item-Image"}>
                <img src={education.SchoolLogo} tag={education.SchoolName + " Logo"}/>
              </div>
              <div className="Education-Item-Content">
                <h2>{education.SchoolName}</h2>
                <h3>{education.Location}</h3>
                <h3>{education.Certification}</h3>
                <h3>{`${Moment(education.StartDate).format("MMMM YYYY")}${education.EndDate != null && Moment(education.StartDate).isBefore(education.EndDate)? ` - ${Moment(education.EndDate).format("MMMM YYYY")}` : " - Present"}`}</h3>
                {education.Scholarship != null &&
                  <div>
                    <h3 className="Education-SubTitle">Scholarships:</h3>
                    <ul>
                    {education.Scholarship.map((scholarship) => 
                      <li className="Education-Item-Content-List-Item" key={i + "" + scholarship.SortOrder}>{scholarship.Name}</li>
                    )}
                    </ul>
                  </div>
                }
                {education.Award != null &&
                  <div>
                    <h3 className="Education-SubTitle">Awards:</h3>
                    <ul>
                    {education.Award.map((award) => 
                      <li className="Education-Item-Content-List-Item" key={i + "" + award.SortOrder}>{award.Name}</li>
                    )}
                    </ul>
                  </div>
                }
                {education.Extracurricular != null &&
                  <div>
                    <h3 className="Education-SubTitle">Extracurriculars:</h3>
                    <ul>
                    {education.Extracurricular.map((extracurricular) => 
                      <li className="Education-Item-Content-List-Item" key={i + "" + extracurricular.SortOrder}>{extracurricular.Name}</li>
                    )}
                    </ul>
                  </div>
                }
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Education;
