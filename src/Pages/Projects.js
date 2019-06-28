import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../Css/Shared.css";
import "../Css/Projects.css";
import RestClient from "../Utilities/RestClient.js";
import Portfolio from "../Resources/Portfolio.png"

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FeaturedProjects: null,
    };
    this.LoadProjects = this.LoadProjects.bind(this);
    this.LoadProjectsCallback = this.LoadProjectsCallback.bind(this);

    this.LoadProjects();
  }

  LoadProjects() {
    var restClient = new RestClient();
    restClient.GetFeatured(this.LoadProjectsCallback);
  }

  LoadProjectsCallback(json) {
    this.setState({
      FeaturedProjects: json
    });
  }

  render() {
    return (
      <div id="projects" className="SharedOutter2 Projects-Outter">
        <div className="Projects-Title">
          <h1>Projects</h1>
        </div>
        <div className="Featured-Outter">
          {this.state.FeaturedProjects != null && this.state.FeaturedProjects.map((project, i) => 
            <Link to={{pathname: "/portfolio/" + project.Uuid, backLocation: "/"}} key={i} style={{textDecorationLine: 'none'}}>
              <div className="Project">
                <img src={project.Thumbnail} alt={project.Name + " Thumbnail"}/>
                <p>{project.Name}</p>
              </div>
            </Link>
          )}
        </div>
        <div>
          <Link className="Portfolio-Link-Outter" to="/portfolio">
            {!this.props.smallScreen && <img src={Portfolio} alt="Portfolio"/> }
            <div className="Portfolio-Link">
              Click to View Full Portfolio
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Projects;
