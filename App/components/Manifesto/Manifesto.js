require('./manifesto.scss');

var React = require('react');
var Banner = require('../_common/Banner');
var ManifestoText = require('./ManifestoText');

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

module.exports = Manifesto;
