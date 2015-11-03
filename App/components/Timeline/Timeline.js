require('./timeline.scss');

var React = require('react');
var Event = require('./Event.js');
var helpers = require('../../util/helpers.js');

var Timeline = React.createClass({
  getInitialState: function() {
    return {
      events: []
    };
  },
  componentDidMount: function() {
    helpers.getEvents(this);
  },
  render: function() {
    var events = this.state.events.map(function(event, index) {
      return <Event event={event} key={index} />
    });
    return (
      <section id='cd-timeline' className='cd-container'>
          {events}
      </section>
    )
  }
});

module.exports = Timeline;
