require('./calendar.scss');

var React = require('react');
var Banner = require('../_common/Banner');

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

module.exports = Calendar;
