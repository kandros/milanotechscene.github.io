var React = require('react');
var ReactDOM = require('react-dom');
var Timeline = require('./components/Timeline/Timeline');
var GroupsList = require('./components/Groups/GroupsList');

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

var Banner = React.createClass({
  render: function() {
    return (
      <div id="banner">
        <h1 id="title">{this.props.title}</h1>
        <h1>
              {this.props.subtitle}
        </h1>
      </div>
    )
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

require('./components/Calendar/calendar.scss')
var Calendar = React.createClass({
  getInitialState: function() {
    return {
      banner: {
        title: "Calendario",
        subtitle: ""
      }
    }
  },
  render: function() {
    return (
      <div>
        <Banner title={this.state.banner.title} subtitle={this.state.banner.subtitle}/>
        <div className="calendar">
          <h2 className="manifesto__heading">Our Calendar</h2>
           <iframe src="https://www.google.com/calendar/embed?title=MilanoTechScene&amp;mode=AGENDA&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=3nctrbqaukrc5i8g6j7d54b9q4%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=Europe%2FRome" style={{borderWidth:0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
    )
  }
});

var Manifesto = React.createClass({
  getInitialState: function() {
    return {
      banner: {
        title: "Manifesto",
        subtitle: ""
      }
    }
  },
  render: function() {
    return (
      <div>
        <Banner title={this.state.banner.title} subtitle={this.state.banner.subtitle}/>
        <ManifestoText />
      </div>
    )
  }
});

require('./components/Manifesto/manifesto.scss');
var ManifestoText = React.createClass({
  render: function() {
    return (
        <div className="manifesto">
          <h2 className="manifesto__heading">Our Manifesto</h2>
          <p>Milano Tech Scene assemble all  the communities of digital technologies builders in Milan. Groups,  meetups, workshops and events for software developers, digital  designers, devops and data scientists in one single place.
          </p>
          <p>
              We believe that communities are where a lot of the knowledge is, grow and spread around.
              Milano is living a renaissance since 2010 and many new communities about digital technologies are also emerging.
          </p>
          <p>
              The objective of Milano Tech Scene, MTS for friends, is to provide a single point of access to what's here and what's going on, providing informations about existing groups and a shared calendar of relevant events.
          </p>
          <p>
              MTS scope extends to organize a few meetups with topics that are good for any technologist and not specific to any other group. Also MTS can be used to incubate new meetups, helping them to grow and spread. </p>
          <p></p>
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
