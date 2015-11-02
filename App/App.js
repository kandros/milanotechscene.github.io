var React = require('react');
var ReactDOM = require('react-dom');
var Timeline = require('./components/Timeline/Timeline');
var GroupsList = require('./components/Groups/GroupsList');
var axios = require('axios');
var moment = require('moment');

var Main = React.createClass({
  getInitialState: function() {
    return {
      events: [],
      groups: []
    };
  },
  componentDidMount: function() {
    var that = this;
    var urlEvents = "https://www.googleapis.com/calendar/v3/calendars/3nctrbqaukrc5i8g6j7d54b9q4@group.calendar.google.com/events?key=AIzaSyBP-eVlQhmfD0Ml630CHwWxsv27k14zjfc&maxResults=5&singleEvents=true&orderBy=startTime&timeMin=" + moment().format('YYYY-MM-DD') + "T00%3A00%3A00%2B00%3A00";
    // console.log(urlEvents);
    axios.get(urlEvents)
      .then(function(response) {
        var events = response.data.items;
        // console.log(events);
        that.setState({
          events: events
        });
      })
      .catch(function(response) {
        // console.log(response);
      });
    // console.log(this.state.groups)

    var urlGroups = "https://b458e59e35ebffd6ffbbc3d4bbfb6c0c6b100f6a-www.googledrive.com/host/0B5ENAUFZNl-YLXpKTHJ3cmY4ZGc"
    axios.get(urlGroups)
      .then(function(response) {
        var groups = response.data;
        // console.log(groups);
        that.setState({
          groups: groups
        });
      })
      .catch(function(response) {
        console.log(response);
      });
    // console.log(this.state.groups);

  },
  render: function() {
    return (
      <div>
        <Timeline events={this.state.events} />
        <GroupsList groups={this.state.groups} />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
