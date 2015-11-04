var React = require('react');
var Event = require('./Event.js');
var helpers = require('../../util/helpers.js');

var EventList = React.createClass({
  getInitialState: function() {
    return {
      events: []
    };
  },
  componentDidMount: function() {
    console.log(helpers.getEvents);
    // helpers.getEvents.call(this);
  },
  render: function() {
    var events = this.state.events.map(function(event, index) {
      return <Event event={event} key={index} />
    });
    return (
      <div className="event-list">
        {events}
      </div>
    )
  }
});

module.exports = EventList;
