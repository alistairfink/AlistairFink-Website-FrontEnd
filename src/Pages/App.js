import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/App.css";
import ComputerIcon from "../Resources/programming (4).svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      headerClass: "HeaderTopFirstLoad",
      smallScreen: false,
    };

    this.smallScreen = this.smallScreen.bind(this);
  }

  listenScrollEvent = e => {
    if(this.refs.header.getBoundingClientRect().y === 0) {
      this.setState({
        scrolled: true,
        headerClass: "HeaderScrolled"
      });
    } else if(this.state.scrolled) {
      this.setState({
        headerClass: "HeaderTop"
      });
    }
  }

  smallScreen() {
    console.log(window.innerWidth < 1200)
    if(window.innerWidth < 1200){
      this.setState({smallScreen: true})
    } else {
      this.setState({smallScreen: false})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    this.smallScreen()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/About" component={() => alert("test")} />
          <Route exact path="/Projects" component={ () => alert("LER") } />
          <Route exact path="/Experience" component={ () => alert("LER") } />
          <Route exact path="/Education" component={ () => alert("LER") } />
          <Route exact path="/Portfolio" component={ () => alert("LER") } />
          <Route exact path="/Portfolio/:PortfolioUuid" component={ () => alert("LER") } />
        </div>
        <div className="Home">
          <div className="Title">
            {!this.state.smallScreen &&
              <div className="Title-Image">
                <img src={ComputerIcon} alt="Logo" />
              </div>
            }
            <div className="Title-Text">
              <p className="Title-Text-Blue">type </p><p className="Title-Text-Green">Software_Engineer </p><p className="Title-Text-Blue">struct </p><p>{`{`}</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>Name: </p><p className="Title-Text-Yellow">{"\"Alistair Fink\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>Location: </p><p className="Title-Text-Yellow">{"\"Toronto, Canada\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>Skill_Set: []</p><p className="Title-Text-Blue">{"string"}</p><p> {`{`}</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p className="Title-Text-Yellow">{"\"Full Stack Engineer\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p className="Title-Text-Yellow">{"\"Android Developer\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p className="Title-Text-Yellow">{"\"Go Developer\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>{`}`}</p><br/>
              <p>{`}`}</p><p className="Title-Blinking-Cursor"></p>
            </div>
          </div>
          <div className={`${this.state.headerClass} Header`} ref="header">
            <Link className="Heading-Link" to="/promospace/detail">
              <div className="Heading">
                <h2>About</h2>
              </div>
            </Link>
            <Link className="Heading-Link" to="/promospace/detail">
              <div className="Heading">
                <h2>Projects</h2>
              </div>
            </Link>
            <Link className="Heading-Link" to="/promospace/detail">
              <div className="Heading">
                <h2>Experience</h2>
              </div>
            </Link>
            <Link className="Heading-Link" to="/promospace/detail">
              <div className="Heading">
                <h2>Education</h2>
              </div>
            </Link>
          </div>
          <div>
            test
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
