/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, Collapse } from "reactstrap";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse1: false,
      collapse2: false,
      collapse3: false,
      collapse4: false,
      collapse5: false,
      collapse6: false,
      collapse7: false,
      collapse8: false,
    };
    this.activeRoute.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle8.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  toggle1() {
    this.setState({ collapse1: !this.state.collapse1 });
  }
  toggle2() {
    this.setState({ collapse2: !this.state.collapse2 });
  }
  toggle3() {
    this.setState({ collapse3: !this.state.collapse3 });
  }
  toggle4() {
    this.setState({ collapse4: !this.state.collapse4 });
  }
  toggle5() {
    this.setState({ collapse5: !this.state.collapse5 });
  }
  toggle6() {
    this.setState({ collapse6: !this.state.collapse6 });
  }
  toggle7() {
    this.setState({ collapse7: !this.state.collapse7 });
  }
  toggle8() {
    this.setState({ collapse8: !this.state.collapse8 });
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  render() {
    const { bgColor, routes, rtlActive, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
      if (logo.outterLink !== undefined) {
        logoImg = (
          <a
            href={logo.outterLink}
            className="simple-text logo-mini"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        );
        logoText = (
          <a
            href={logo.outterLink}
            className="simple-text logo-normal"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </a>
        );
      } else {
        logoImg = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-mini"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </Link>
        );
        logoText = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-normal"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </Link>
        );
      }
    }
    return (
      <div className="sidebar" data={bgColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          {logoImg !== null || logoText !== null ? (
            <div className="logo">
              {logoImg}
              {logoText}
            </div>
          ) : null}
          <Nav>
            {/* {routes.map((prop, key) => {
              if (prop.redirect) return null;
              return ( */}
                <li
                  className={
                    this.activeRoute(routes[0].path) +
                    (routes[0].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[0].layout + routes[0].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle1}
                    aria-expanded={true}
                  >
                    <i className={routes[0].icon} />
                    <p>{rtlActive ? routes[0].rtlName : routes[0].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse1}>
                      <ul className="nav">
                        {routes[0].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>
              
                <li
                  className={
                    this.activeRoute(routes[1].path) +
                    (routes[1].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[1].layout + routes[1].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle2}
                    aria-expanded={true}
                  >
                    <i className={routes[1].icon} />
                    <p>{rtlActive ? routes[1].rtlName : routes[1].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse2}>
                      <ul className="nav">
                        {routes[1].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>

                <li
                  className={
                    this.activeRoute(routes[2].path) +
                    (routes[2].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[2].layout + routes[2].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle3}
                    aria-expanded={true}
                  >
                    <i className={routes[2].icon} />
                    <p>{rtlActive ? routes[2].rtlName : routes[2].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse3}>
                      <ul className="nav">
                        {routes[2].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>

                <li
                  className={
                    this.activeRoute(routes[3].path) +
                    (routes[3].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[3].layout + routes[3].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle4}
                    aria-expanded={true}
                  >
                    <i className={routes[3].icon} />
                    <p>{rtlActive ? routes[3].rtlName : routes[3].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse4}>
                      <ul className="nav">
                        {routes[3].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>

                 <li
                  className={
                    this.activeRoute(routes[4].path) +
                    (routes[4].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[4].layout + routes[4].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle5}
                    aria-expanded={true}
                  >
                    <i className={routes[4].icon} />
                    <p>{rtlActive ? routes[4].rtlName : routes[4].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse5}>
                      <ul className="nav">
                        {routes[4].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>

                <li
                  className={
                    this.activeRoute(routes[5].path) +
                    (routes[5].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[5].layout + routes[5].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle6}
                    aria-expanded={true}
                  >
                    <i className={routes[5].icon} />
                    <p>{rtlActive ? routes[5].rtlName : routes[5].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse6}>
                      <ul className="nav">
                        {routes[5].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>
                
                <li
                  className={
                    this.activeRoute(routes[6].path) +
                    (routes[6].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[6].layout + routes[6].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle7}
                    aria-expanded={true}
                  >
                    <i className={routes[6].icon} />
                    <p>{rtlActive ? routes[6].rtlName : routes[6].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse7}>
                      <ul className="nav">
                        {routes[6].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>

                <li
                  className={
                    this.activeRoute(routes[7].path) +
                    (routes[7].pro ? " active-pro" : "")
                  }
                  // key={key}
                >
                  <NavLink
                    to={routes[7].layout + routes[7].path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                    onClick={this.toggle8}
                    aria-expanded={true}
                  >
                    <i className={routes[7].icon} />
                    <p>{rtlActive ? routes[7].rtlName : routes[7].name}<b className="caret"></b></p>
                  </NavLink>
                    <Collapse isOpen={this.state.collapse8}>
                      <ul className="nav">
                        {routes[7].innerroutes.map((prop, key) => {
                          if (prop.redirect) return null;
                          return (
                            <li
                            className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={prop.layout + prop.path}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                            >
                              <i className={prop.icon} />
                              <p>{rtlActive ? prop.rtlName : prop.name}</p>
                            </NavLink>
                          </li>
                      );})}
                    </ul>
                  </Collapse>
                </li>
              {/* );
            })} */}
          </Nav>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}]
};

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  rtlActive: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};

export default Sidebar;
