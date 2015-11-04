var React = require('react');

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

module.exports = Banner;
