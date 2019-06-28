// Libraries
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// CSS
import "../Css/Home.css";

// Components
import About from "./About.js";
import Projects from "./Projects.js";
import Experience from "./Experience.js";
import Education from "./Education.js";

// Pictures
import ComputerIcon from "../Resources/programming (4).svg";
import Github from "../Resources/Github.png";
import LinkedIn from "../Resources/LinkedIn.png";
import Resume from "../Resources/Resume.png";
import Email from "../Resources/Email.png";
import Menu from "../Resources/Menu.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      headerClass: "HeaderTopFirstLoad",
      smallScreen: false,
      mobileOpen: false,
      mobileShow: false,
    };

    this.smallScreen = this.smallScreen.bind(this);
    this.hashLinkScroll = this.hashLinkScroll.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent(e) {
    if(window.location.pathname == "/") {
      try {
        if(this.refs.header.getBoundingClientRect().y <= 0) {
          this.setState({
            scrolled: true,
            headerClass: "HeaderScrolled",
            mobileShow: true,
          });
        } else if(this.state.scrolled) {
          this.setState({
            headerClass: "HeaderTop",
            mobileShow: false,
          });
        }
      }
      catch(error) {}
    }
  }

  smallScreen() {
    if(window.innerWidth < 1200){
      this.setState({smallScreen: true})
    } else {
      this.setState({smallScreen: false})
    }
  }

  hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    this.smallScreen()

    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => () => {
        this.hashLinkScroll();
      }, 1000);
    } else {
      window.scrollTo(0,0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <div className="Home">
        {this.state.smallScreen && this.state.mobileShow &&
          <div className="Mobile-Hamburger" onClick={() => this.setState({mobileOpen: !this.state.mobileOpen})}>
            <img src={Menu} tag="Menu"/>
          </div>
        }
        {this.state.smallScreen && this.state.mobileOpen &&
          <div className="Mobile-Menu">
            <Link className="Heading-Link-Mobile-Menu" smooth to="#about" onClick={() => this.setState({mobileOpen: !this.state.mobileOpen})}>
                <h2>About</h2>
            </Link>
            <Link className="Heading-Link-Mobile-Menu" smooth to="#projects" onClick={() => this.setState({mobileOpen: !this.state.mobileOpen})}>
              <h2>Projects</h2>
            </Link>
            <Link className="Heading-Link-Mobile-Menu" smooth to="#experience" onClick={() => this.setState({mobileOpen: !this.state.mobileOpen})}>
              <h2>Experience</h2>
            </Link>
            <Link className="Heading-Link-Mobile-Menu" smooth to="#education" onClick={() => this.setState({mobileOpen: !this.state.mobileOpen})}>
              <h2>Education</h2>
            </Link>
          </div>
        }
      	<div>
      		<div className="Logos">
      			<a className="LogoLink" href="https://github.com/alistairfink"><img src={Github} alt="Alistair's Github"/></a>
      			<a className="LogoLink" href="https://www.linkedin.com/in/alistairfink/"><img src={LinkedIn} alt="Alistair's LinkedIn"/></a>
      			<a className="LogoLink" href="https://drive.google.com/file/d/12KtoofbXqJj4QFBQ4gzA0PMsdmMH5wpj/view?usp=sharing"><img src={Resume} alt="Alistair's Resume"/></a>
      			<a className="LogoLink" href="mailto:alistairfink@gmail.com"><img src={Email} alt="Alistair's Email"/></a>
      		</div>
          <div className={this.state.smallScreen ? "Title-Mobile" : "Title"}>
            {!this.state.smallScreen &&
              <div className="Title-Image">
                <img src={ComputerIcon} alt="Logo"/>
              </div>
            }
            <div className={this.state.smallScreen ? "Title-Text-Mobile" : "Title-Text"}>
              <p className="Title-Text-Blue">type </p><p className="Title-Text-Green">Software_Engineer </p><p className="Title-Text-Blue">struct </p><p>{`{`}</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>Name: </p><p className="Title-Text-Yellow">{"\"Alistair Fink\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>Location: </p><p className="Title-Text-Yellow">{"\"Toronto, Canada\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>Skill_Set: []</p><p className="Title-Text-Blue">{"string"}</p><p> {`{`}</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p className="Title-Text-Yellow">{"\"Full Stack Developer\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p className="Title-Text-Yellow">{"\"Android Developer\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p className="Title-Text-Yellow">{"\"Go Developer\""}</p><p>,</p><br/>
              <p>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</p><p>{`}`}</p><br/>
              <p>{`}`}</p><p className={this.state.smallScreen ? "Title-Blinking-Cursor-Mobile" : "Title-Blinking-Cursor"}></p>
            </div>
          </div>
        </div>
        <div className={`${this.state.headerClass} ${this.state.smallScreen ? "Header-Mobile" : "Header"}`} ref="header">
          <Link className={this.state.smallScreen ? "Heading-Link-Mobile" : "Heading-Link"} smooth to="#about">
            <div className="Heading">
              <h2>About</h2>
            </div>
          </Link>
          <Link className={this.state.smallScreen ? "Heading-Link-Mobile" : "Heading-Link"} smooth to="#projects">
            <div className="Heading">
              <h2>Projects</h2>
            </div>
          </Link>
          <Link className={this.state.smallScreen ? "Heading-Link-Mobile" : "Heading-Link"} smooth to="#experience">
            <div className="Heading">
              <h2>Experience</h2>
            </div>
          </Link>
          <Link className={this.state.smallScreen ? "Heading-Link-Mobile" : "Heading-Link"} smooth to="#education">
            <div className="Heading">
              <h2>Education</h2>
            </div>
          </Link>
        </div>
        <About smallScreen={this.state.smallScreen}/>
        <Projects smallScreen={this.state.smallScreen}/>
        <Experience smallScreen={this.state.smallScreen}/>
        <Education smallScreen={this.state.smallScreen}/>
      </div>
    );
  }
}

export default Home;
