var React = require('react');
var moment = require('moment');
var initEventsEntryAnimation = require('./eventsEntryAnimation.js');
var initWowAnimation = require('../../util/initWowAnimation.js');

var Event = React.createClass({
  componentDidMount: function() {
    // initEventsEntryAnimation();
    initWowAnimation()
  },
  render: function() {
    var momentDate = moment(this.props.event.start.dateTime, moment.ISO_8601);
    var date = momentDate.locale("it").format('dddd DD MMMM');
    return (
      <div className="wow fadeIn cd-timeline-block">
  			<div className="cd-timeline-img cd-location">
  				<img src="images/cd-icon-location.svg" alt="Picture" />
  			</div>

  			<div className="cd-timeline-content">
  				<h2>{this.props.event.summary}</h2>
  				<p>{this.props.event.description}</p>
  				<a href={this.props.event.htmlLink} className="cd-read-more">Read more</a>
  				<span className="cd-date">{date}</span>
          <br />
          <span className="cd-location"><a target="_blank" href={"http://maps.google.com/?q=" + this.props.event.location}>{this.props.event.location}</a></span>
  			</div>
  		</div>
    )
  }
});

module.exports = Event;
