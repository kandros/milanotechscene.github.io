var React = require('react');

var Event = React.createClass({
  render: function() {
    return (
      <div className="event-list__item">
        <h3>evento  {this.props.index}</h3>
        <ul>
          <li>{this.props.event.summary}</li>
          <li>{this.props.event.description}</li>
          <li>{this.props.event.quando}</li>
        </ul>
      </div>
    )
  }
});

module.exports = Event;
