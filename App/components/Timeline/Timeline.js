require('./timeline.scss');

var React = require('react');
var Event = require('./Event.js');

var Timeline = React.createClass({
  render: function() {
    var events = this.props.events.map(function(event, index) {
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
