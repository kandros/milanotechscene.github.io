var React = require('react');
var Event = require('./Event.js');

var EventList = React.createClass({
  render: function() {
    var events = this.props.events.map(function(event, index) {
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
