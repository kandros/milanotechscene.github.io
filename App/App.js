var React = require('react');
var ReactDOM = require('react-dom');
var Timeline = require('./components/Timeline/Timeline');
var Banner = require('./components/_common/Banner.js');
var GroupsList = require('./components/Groups/GroupsList');
var Calendar = require('./components/Calendar/Calendar');
var Manifesto = require('./components/Manifesto/Manifesto');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute= require('react-router').IndexRoute;

var HeaderComponent = React.createClass({
  render: function() {
    return (
      <header id="main_header" className="cf">
          <div className="wrapper_wide">
            <a href="#" id="logo"><img src="images/mts-logo.svg" alt="" /></a>
            <nav>
              <ul>
                <li>
                  <Link to="/calendar">Calendario</Link>
                  <Link to="/manifesto">Manifesto</Link>
                  <a target="_blank" href="https://milanotechscene.slack.com/messages/general/">Slack</a>
                </li>
              </ul>
            </nav>
            <a id="menu-button">X</a>
          </div>
        </header>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <HeaderComponent />
        {this.props.children}
      </div>
    )
  }
});

var Home = React.createClass({
  getInitialState: function() {
    return {
      banner: {
        title: "Milano Tech Scene",
        subtitle: "There are geeks here too"
      }
    }
  },
  render: function() {
    return (
      <div>
        <Banner title={this.state.banner.title} subtitle={this.state.banner.subtitle}/>
        <Timeline />
        <GroupsList />
      </div>
    )
  }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={Main}>
      <Route path="/calendar" component={Calendar}></Route>
      <Route path="/manifesto" component={Manifesto}></Route>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'));
